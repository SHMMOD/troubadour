import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import Sound from 'react-native-sound';
import { AudioRecorder, AudioUtils } from 'react-native-audio';
var RNFS = require('react-native-fs');
import { colors } from '../styles/colors';

class RecordingNew extends React.Component {
  constructor(props){
    super(props);

    const filename = `/${Date.now()}.aac`;

    this.state = {
      currentTime: 0.0,
      recording: false,
      stoppedRecording: false,
      finished: false,
      filename: filename,
      audioPath: AudioUtils.DocumentDirectoryPath + filename
    };

    this.onPressSave = this.onPressSave.bind(this);
    this.onPressDelete = this.onPressDelete.bind(this);
  }

  prepareRecordingPath(audioPath) {
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000
    });
  }

  componentDidMount() {
    this.prepareRecordingPath(this.state.audioPath);

    AudioRecorder.onProgress = (data) => {
      this.setState({currentTime: Math.floor(data.currentTime)});
    };

    AudioRecorder.onFinished = (data) => {
      this._finishRecording(data.status === "OK", data.audioFileURL);
    };
  }

  _checkFiles() {
    console.log('in _checkFiles');
    RNFS.readDir(RNFS.DocumentDirectoryPath)
      .then((result) => {
        console.log('GOT RESULT', result);

        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then((statResult) => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          return RNFS.readFile(statResult[1], 'utf8');
        }

        return 'no file';
      })
      .then((contents) => {
        // log the file contents
        console.log(contents);
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
  }

  _renderButton(title, onPress, active) {
    let style = (active) ? styles.activeButtonText : styles.buttonText;
    const icons = {
      RECORD: 'fiber-manual-record',
      STOP: 'stop',
      PAUSE: 'pause',
      PLAY: 'play-arrow'
    };

    return (
      <Button
        iconRight={{name: icons[title]}}
        title={title}
        backgroundColor={colors.button}
        containerViewStyle={styles.button}
        borderRadius={4}
        onPress={onPress}
        />
    );
  }

  async _pause() {
    if (!this.state.recording) {
      console.warn('Can\'t pause, not recording!');
      return;
    }

    this.setState({stoppedRecording: true, recording: false});

    try {
      const filePath = await AudioRecorder.pauseRecording();
    } catch (error) {
      console.error(error);
    }
  }

  async _stop() {
    if (!this.state.recording) {
      console.warn('Can\'t stop, not recording!');
      return;
    }

    this.setState({stoppedRecording: true, recording: false});

    try {
      const filePath = await AudioRecorder.stopRecording();

      return filePath;
    } catch (error) {
      console.error(error);
    }
  }

  async _play() {
    if (this.state.recording) {
      await this._stop();
    }

    // These timeouts are a hacky workaround for some issues with react-native-sound.
    // See https://github.com/zmxv/react-native-sound/issues/89.
    setTimeout(() => {
      var sound = new Sound(this.state.audioPath, '', (error) => {
        if (error) {
          console.log('failed to load the sound', error);
        }
      });

      setTimeout(() => {
        sound.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }, 100);
    }, 100);
  }

  async _record() {
    if (this.state.recording) {
      console.warn('Already recording!');
      return;
    }

    if(this.state.stoppedRecording){
      this.prepareRecordingPath(this.state.audioPath);
    }

    this.setState({recording: true});

    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
  }

  _finishRecording(didSucceed, filePath) {
    this.setState({ finished: didSucceed });
    console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
    this._checkFiles();
  }

  onPressSave() {

  }

  onPressDelete() {
    console.log(this.state);
    return RNFS.unlink(this.state.audioPath)
      .then(() => {
        console.log('FILE DELETED');
        this._checkFiles();
      })
      // `unlink` will throw an error, if the item to unlink does not exist
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    const prerecording = (
      <View>
        <View>
          {this._renderButton("RECORD", () => this._record(), this.state.recording )}
          {this._renderButton("STOP", () => this._stop() )}
        </View>
        <View style={styles.progress}>
          <Text style={styles.progressText}>{this.state.currentTime}s</Text>
        </View>
      </View>
    );

    const postrecording = (
      <View>
        {this._renderButton("PLAY", () => this._play() )}
        {this._renderButton("PAUSE", () => this._pause() )}
        <TextInput
          placeholder="Add a title"
          style={styles.text}
          onChangeText={(title) => this.setState({title})}
          editable = {true}
          value={this.state.title}
          />
        <View style={styles.filesave}>
          <Button
            iconRight={{name: 'check', color: 'green'}}
            title="SAVE"
            backgroundColor={colors.button}
            containerViewStyle={styles.button}
            borderRadius={4}
            onPress={this.onPressSave}
            />
          <Button
            iconRight={{name: 'close', color: 'red'}}
            title="DELETE"
            backgroundColor={colors.button}
            containerViewStyle={styles.button}
            borderRadius={4}
            onPress={this.onPressDelete}
            />

        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        {
          !this.state.finished ? prerecording : postrecording
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  progress: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  progressText: {
    fontSize: 50,
    paddingTop: 20
  },
  button: {
    marginTop: 20
  },
  disabledButtonText: {
    color: '#eee'
  },
  buttonText: {
    fontSize: 20,
    // color: "#fff"
  },
  activeButtonText: {
    fontSize: 20,
    color: "#B81F00"
  },
  text: {
    padding:20,
    paddingTop: 20,
    fontSize: 24,
    textAlign: 'center'
  },
  filesave: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default RecordingNew;
