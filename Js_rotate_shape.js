class Js_rotate_shape {
    constructor(){}

    rotateShape(container){
        function rotateDrawable(container) {
            const  $drawBoard = $(container);
            const $btn = $('#rotateBtn');
            if($btn.text()==='Start Rotation'){
                $btn.text('Stop Rotation');
            }
            else{
                $btn.text('Start Rotation');
            }
            if(!rotatinig) {
                $drawBoard.children('div').each(function () {
                    if ($(this).hasClass('selected') || $(this).hasClass('tri-selected')) {
                        $(this).addClass('rotational');
                    }
                })
                rotatinig=true;
            }
            else {
                $drawBoard.children('div').each(function () {
                    if ($(this).hasClass('rotational')) {
                        $(this).removeClass('rotational');
                    }
                })
                rotatinig = false;
            }
        }
        rotateDrawable(container);
    }


}