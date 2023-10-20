import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

function camera(state, type) {
  const save = (res) => {
    const conditionsToSave = !res.didCancel && !res.error && !res.errorCode;
    const cameraError = !res.errorCode;

    (conditionsToSave && cameraError) && state(
      prev => (
        {
          ...prev, 
          picture: [res.assets[0].uri, type]
        }
      )
    );
  }

  const config = {
    camera: {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 500,
      maxHeight: 500,
    },
    folder: {
      mediaType: 'photo',
    }
  }

  const action = {
    camera: () => launchCamera(config[type], (response) => save(response)),
    folder: () => launchImageLibrary(config[type], (response) => save(response)),
  }

  return action[type]
};

export default camera;
