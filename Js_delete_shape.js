
var Js_delete_shape = (function () {
    var containers , rotateBtb , deleteBtn , observers = [];
    
    function Js_delete_shape(_containers,_rotateBtn,_deleteBtn) {
        containers = _containers;
        rotateBtb = _rotateBtn;
        deleteBtn = _deleteBtn;
    }

    deleteDrawable = function(){
        const $rBtn = $(rotateBtb);
        const $dBtn = $(deleteBtn);

        for (var i of containers){
            $(i).children('div').each(function () {
                if($(this).hasClass('selected') ||$(this).hasClass('tri-selected')) {
                    $(this).remove();
                    notifyObservers();
                    hasSelected = false;
                }
            })
        }
        $dBtn.prop('disabled',true);
        $rBtn.prop('disabled',true);
    };

    notifyObservers = function(){
        for(let o of observers)
            o.update();
    };

    Js_delete_shape.prototype.addObserver = function(o){
        observers.push(o);
    };

    Js_delete_shape.prototype.deleteShape = function () {
        deleteDrawable();
    };

    return Js_delete_shape;
})();

