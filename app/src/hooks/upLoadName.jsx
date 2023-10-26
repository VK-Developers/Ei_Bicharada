const upLoadName = (obj, where) => {
    const date = new Date();
    const dateFormat = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    if (where === 'adoption' || where === 'lost') {    
        const name = obj.nome.replace(/\s/g, "").replace(/,/g, "_").replace(/\./g, "");
        const nameToSave = `${dateFormat}_${name.toLowerCase()}.jpg`;
        return nameToSave
    }

    const name = obj.animal.replace(/\s/g, "").replace(/,/g, "_").replace(/:/g, "-").replace(/\./g, "");
    const time = obj.horario.replace(/:/g, "-")
    const nameToSave = `${dateFormat}_${time}_${name.toLowerCase()}.jpg`;
    return nameToSave
}

export default upLoadName;