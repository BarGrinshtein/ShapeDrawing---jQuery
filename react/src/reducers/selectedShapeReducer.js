const selectedShapeReducer = (state = null,action) => {
    switch (action.type) {
        case 'SELECTED_SHAPE': {
            return state = action.selectedShape;
            break;
        }
        default:return null;
    }
};

export default selectedShapeReducer;