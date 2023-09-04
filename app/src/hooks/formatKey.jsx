const formatKey = (key) => {
    key = key.toLowerCase();
    key = key.replace(/ç/g, 'c');
    key = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return key;
}

export default formatKey;