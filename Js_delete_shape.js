class Js_delete_shape {
    constructor(_container,_rotateBtn,_deleteBtn){
        this.container = _container;
        this.rotateBtn = _rotateBtn;
        this.deleteBtn = _deleteBtn;
    }

    deleteShape(){
        function deleteDrawable(container,rotateBtn,deleteBtn) {
            const  $drawBoard = $(container);
            const $rBtn = $(rotateBtn);
            const $dBtn = $(deleteBtn);
            $drawBoard.children('div').each(function () {
                if($(this).hasClass('selected') ||$(this).hasClass('tri-selected')) {
                    $(this).remove();
                    hasSelected = false;
                    $dBtn.prop('disabled',true);
                    $rBtn.prop('disabled',true);
                }
            })
        }
        deleteDrawable(this.container,this.deleteBtn,this.rotateBtn);
    }
}