const upLoadName = (obj, where) => {
    const date = new Date();
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    if (where === 'adoption' || where === 'lost') {    
        const name = obj.nome.replace(/\s/g, "").replace(/,/g, "_").replace(/\./g, "");
        const nameToSave = `${formattedDate}_${name.toLowerCase()}.jpg`;
        return nameToSave
    }
}

export default upLoadName;