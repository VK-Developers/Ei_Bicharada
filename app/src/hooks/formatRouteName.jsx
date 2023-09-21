const formatRouteName = (name) => {
     const formated = name
          .replace(/ç/g, 'c')
          .replace(/\|/g, '')
          .replace(/\ã/g, 'a')
          .replace(/\ú/g, 'u')
          .replace(/\á/g, 'a')
          .replace(/\s/g, '');
 
     return formated;
}
 
export default formatRouteName;