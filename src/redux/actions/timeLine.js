export const setArchive = (archive) =>{
    return {
        type: 'SET_ARCHIVE',
        archive
    };
};

export const setActive = (name) =>{
    return {
        type: 'SET_ACTIVE',
        name
    };
};