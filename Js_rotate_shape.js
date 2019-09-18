
var Js_rotate_shape = (function () {
    var rotating,containers;
    
    function Js_rotate_shape(_containers) {
        rotating = false;
        containers = _containers;
    }

    rotateDrawable = function(){
        const $btn = $('#rotateBtn');
        if($btn.text()==='Start Rotation'){
            $btn.text('Stop Rotation');
        }
        else{
            $btn.text('Start Rotation');
        }
        if(!rotating) {
            for (var i of containers) {
                $(i).children('div').each(function () {
                    if ($(this).hasClass('selected') || $(this).hasClass('tri-selected')) {
                        $(this).addClass('rotational');
                    }
                });
            }
            rotating=true;
        }
        else {
            for (var i of containers) {
                $(i).children('div').each(function () {
                    if ($(this).hasClass('rotational')) {
                        $(this).removeClass('rotational');
                    }
                });
            }
            rotating = false;
        }
    };

    Js_rotate_shape.prototype.update = function(){
        rotating = false;
        $('#rotateBtn').text('Start Rotation');
    };
    
    Js_rotate_shape.prototype.rotateShape = function () {
        rotateDrawable();
    };

    return Js_rotate_shape;
})();

