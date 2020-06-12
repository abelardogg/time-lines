const initialState = {
    archive: [],
    active: null
};

export default function (state = initialState, actions){
    switch(actions.type) {
        case 'SET_ARCHIVE':
            return {
                ...state,
                archive: actions.archive
            }
        case 'SET_ACTIVE':
            return {
                ...state,
                active: actions.name
            }
        default:
            return {
                ...state
            }
    }
}
