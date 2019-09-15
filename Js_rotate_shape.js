
class Js_rotate_shape {
    constructor(){
        this.rotating = false;
    }

    rotateShape(container){
        const that = this;
        function rotateDrawable(container) {
            const  $drawBoard = $(container);
            const $btn = $('#rotateBtn');
            if($btn.text()==='Start Rotation'){
                $btn.text('Stop Rotation');
            }
            else{
                $btn.text('Start Rotation');
            }
            if(!that.rotatinig) {
                $drawBoard.children('div').each(function () {
                    if ($(this).hasClass('selected') || $(this).hasClass('tri-selected')) {
                        $(this).addClass('rotational');
                    }
                })
                that.rotatinig=true;
            }
            else {
                $drawBoard.children('div').each(function () {
                    if ($(this).hasClass('rotational')) {
                        $(this).removeClass('rotational');
                    }
                })
                that.rotatinig = false;
            }
        }
        rotateDrawable(container);
    }


}