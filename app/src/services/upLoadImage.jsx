import axios from 'axios';

const upLoadImage = (imageUri) => {
  const formData = new FormData();
  formData.append('photo', {
    uri: imageUri,
    type: 'image/jpeg',
    name: 'photo.jpg',
  });

  axios.post('http://192.168.0.51:3001/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((response) => {
      console.log('Upload bem-sucedido', response.data);
    })
    .catch((error) => {
      console.error('Erro no upload', error);
    });
};

export default upLoadImage;
