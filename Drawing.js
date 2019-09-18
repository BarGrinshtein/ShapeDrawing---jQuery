
$(document).ready(function () {
    const $triangleBoard = $('#triangleBoard');
    const $rectBoard = $('#rectBoard');
    const $circleBoard = $('#circleBoard');
    const containers = [$triangleBoard,$rectBoard,$circleBoard];
    const _jsCreateShape = new JS_create_shape($triangleBoard,$circleBoard,$rectBoard);
    const _jsRotateShape = new Js_rotate_shape(containers);
    const _jsDeleteShape = new Js_delete_shape(containers,$('#rotateBtn'),$('#deleteBtn'));
    _jsDeleteShape.addObserver(_jsRotateShape);
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






