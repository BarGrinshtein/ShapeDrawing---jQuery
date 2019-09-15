$(document).ready(function () {
    const _jsCreateShape = new Js_create_shape();
    const _jsRotateShape = new Js_rotate_shape();
    const _jsDeleteShape = new Js_delete_shape();
    $('#createBtn').on('click',function () {
        _jsCreateShape.createRandomShape('#drawBoard');
    });
    $('#deleteBtn').on('click',function () {
        _jsDeleteShape.deleteShape('#drawBoard');
    });
    $('#rotateBtn').on('click',function () {
        _jsRotateShape.rotateShape('#drawBoard');
    });
});






