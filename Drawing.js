let canvas;
const ColorsEnum = ["red","green","yellow","blue","brown","white","pink"];
let hasSelected = false;
let rotatinig = false;


$(document).ready(function () {
    $canvas = $('#canvas');
})


/** this function creates a random shape with random size and adds it to the view */
function createShape() {

    let maxHeight = $canvas.position().top + $canvas.outerHeight(true);

    let method = Math.floor(Math.random()*(+4- +1)) + +1;

    let width = Math.random()*(+120 - +30) + +30;
    let height = Math.random()*(+120 - +30) + +30;

    let color = Math.floor(Math.random()*(+7- +0)) + +0;


    let $shape;

    switch (method) {
        case 1:
            $shape = $('<div>');
            $shape.width(width);
            $shape.height(height);
            $shape.css('border-radius','50%');
            $shape.css('background-color',ColorsEnum[color]);
            $shape.attr('type','circle');
            break;
        case 2:
            $shape = $('<div>');
            $shape.width(width);
            $shape.height(height);
            $shape.css('background-color',ColorsEnum[color]);
            $shape.attr('type','rect');
            break;
        case 3:
            $shape = $('<div>');
            $shape.width(0);
            $shape.height(0);
            $shape.css('border-bottom',width + "px solid " + ColorsEnum[color]);
            $shape.css('border-left','60px solid transparent');
            $shape.css('border-right','60px solid transparent');
            $shape.attr('type','triangle').attr('width',width);
            break;
        default:
            break;
    }
    $shape.css('position','absolute');

    console.log(method);
    let x = Math.random() * (+($canvas.width()-width)- +$canvas.position().left) + +$canvas.position().left;
    let y = Math.random() * (+(maxHeight - height) - +$canvas.position().top)+ +$canvas.position().top;


    $shape.css('top',y);
    $shape.css('left',x);

    /** onClick event for each new shape */
    $shape.on('click',function () {
        if($shape.hasClass('selected') || $shape.hasClass('tri-selected')) {
            $shape.removeClass('selected');
            if($shape.attr('type') ==='triangle'){
                $shape.children('div').each(function () {
                    $(this).remove();
                });
            }
            $shape.removeClass('tri-selected');
            $('#deleteBtn').prop('disabled',true);
            $('#rotateBtn').prop('disabled',true);
            hasSelected =false;
        }
        else {
            if(!hasSelected){
                if($shape.attr('type') ==='triangle'){
                    $shape.addClass('tri-selected');
                    drawMiniTriangle($shape);
                }
                else {
                    $shape.addClass('selected');
                }
                $('#deleteBtn').prop('disabled',false);
                $('#rotateBtn').prop('disabled',false);
                hasSelected = true;
            }
        }
    })
    $canvas.append($shape);
}

/** function that draw a mini triangle into the picked triangle for the border illusion*/
function drawMiniTriangle(selector) {
    const $miniTri = $('<div>');
    $miniTri.css('border-bottom',(selector.attr('width')-10)+'px solid black');
    $miniTri.css('border-left','55px solid transparent');
    $miniTri.css('border-right','55px solid transparent');
    $miniTri.css('position','absolute');
    $miniTri.css('left',-55);
    $miniTri.css('top',5);
    $miniTri.width(0);
    $miniTri.height(0);
    selector.append($miniTri);
}

function deleteDrawable() {
    $canvas.children('div').each(function () {
        if($(this).hasClass('selected') ||$(this).hasClass('tri-selected')) {
            $(this).remove();
            hasSelected = false;
            $('#deleteBtn').prop('disabled',true);
            $('#rotateBtn').prop('disabled',true);
        }
    })
}

/** rotates the picked shape on the first button click, and stops on the second button click */
function rotateDrawable() {
    const $btn = $('#rotateBtn');
    if($btn.text()==='Start Rotation'){
        $btn.text('Stop Rotation');
    }
    else{
        $btn.text('Start Rotation');
    }
    if(!rotatinig) {
        $canvas.children('div').each(function () {
            if ($(this).hasClass('selected') || $(this).hasClass('tri-selected')) {
                $(this).addClass('rotational');
            }
        })
        rotatinig=true;
    }
    else {
        $canvas.children('div').each(function () {
            if ($(this).hasClass('rotational')) {
                $(this).removeClass('rotational');
            }
        })
        rotatinig = false;
    }
}

