import { launchCamera } from 'react-native-image-picker';

function camera(state) {
  const save = (res) => {
    const conditionsToSave = !res.didCancel && !res.error && !res.errorCode;
    const cameraError = !res.errorCode;

    (conditionsToSave && cameraError) && state(
      prev => (
        {
          ...prev, 
          picture: res.assets[0].uri
        }
      )
    );
  }

  launchCamera(
    { 
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 500,
      maxHeight: 500,
    }, 
    (response) => save(response)
  );
};

export default camera;
