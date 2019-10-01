const hasSelectedReducer = (state = false,action) =>{
    switch (action.type) {
        case 'SELECT': {
            return state = true;
            break;
        }
        case 'UN_SELECT': {
            return state = false;
            break;
        }
        default: return false;
    }
};

export default hasSelectedReducer;