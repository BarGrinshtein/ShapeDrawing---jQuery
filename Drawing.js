
$(document).ready(function () {
    const $drawBoard = $('#drawBoard');
    const _jsCreateShape = new Js_create_shape($drawBoard);
    const _jsRotateShape = new Js_rotate_shape($drawBoard);
    const _jsDeleteShape = new Js_delete_shape($drawBoard,$('#rotateBtn'),$('#deleteBtn'));
    $('#createBtn').on('click',function () {
        _jsCreateShape.createRandomShape();
    });
    $('#deleteBtn').on('click',function () {
        _jsDeleteShape.deleteShape();
    });
    $('#rotateBtn').on('click',function () {
        _jsRotateShape.rotateShape();
    });
});






