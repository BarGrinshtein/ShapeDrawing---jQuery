import {combineReducers} from "redux";
import hasSelectedReducer from "./hasSelectedReducer";
import rotatingReducer from "./rotatingReducer";
import selectedShapeReducer from "./selectedShapeReducer";

const allReducers = combineReducers({
    hasSelected:hasSelectedReducer,
    rotating:rotatingReducer,
    selectedShape: selectedShapeReducer
});

export default allReducers;