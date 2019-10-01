const rotatingReducer = (state = false,action) =>{
    switch (action.type) {
        case 'ROTATE': {
            return state = true;
            break;
        }
        case 'UN_ROTATE': {
            return state = false;
            break;
        }
        default:return false;
    }
};

export default rotatingReducer;