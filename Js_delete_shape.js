class Js_delete_shape {
    constructor(){}

    deleteShape(container){
        function deleteDrawable(container) {
            const  $drawBoard = $(container);
            $drawBoard.children('div').each(function () {
                if($(this).hasClass('selected') ||$(this).hasClass('tri-selected')) {
                    $(this).remove();
                    hasSelected = false;
                    $('#deleteBtn').prop('disabled',true);
                    $('#rotateBtn').prop('disabled',true);
                }
            })
        }
        deleteDrawable(container);
    }
}