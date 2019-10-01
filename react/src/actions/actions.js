export const select = () =>{
    return {
        type: 'SELECT'
    }
};

export const unSelect = () =>{
    return{
        type:'UN_SELECT'
    }
};

export const rotate = ()=>{
  return{
      type:'ROTATE'
  }
};

export const unRotate = () =>{
    return{
        type:'UN_ROTATE'
    }
};

export const selectedShape = (selectedShape) =>{
    return{
        type:'SELECTED_SHAPE',
        selectedShape:selectedShape
    }
};