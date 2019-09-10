
const ColorsEnum = ["red","green","yellow","blue","brown","white","pink"];
const SizeEnum = ["bigShape","regularShape","smallShape"];
let hasSelected = false;
let rotatinig = false;
let root;

$(document).ready(function () {
    $drawBoard = $('#drawBoard');
    root = document.documentElement;
});


/** this function creates a random shape with random size and adds it to the view */
function createShape() {

    let method = Math.floor(Math.random()*(+4- +1)) + +1;
    let size = Math.floor(Math.random()*(+3- +0)) + +0;

    let width = Math.random()*(+120 - +30) + +30;
    let height = Math.random()*(+120 - +30) + +30;

    let color = Math.floor(Math.random()*(+7- +0)) + +0;


    let $shape;

    root.style.setProperty('--background-color',ColorsEnum[color]);

    switch (method) {
        case 1:
            $shape = $('<div>');
            $shape.addClass('circle');
            $shape.addClass(SizeEnum[size]);
            $shape.addClass(ColorsEnum[color]);
            break;
        case 2:
            $shape = $('<div>');
            $shape.addClass('rect');
            $shape.addClass(SizeEnum[size]);
            $shape.addClass(ColorsEnum[color]);
            break;
        case 3:
            $shape = $('<div>');
            $shape.addClass('triangle');
            $shape.css('border-bottom',height + "px solid " + ColorsEnum[color]);
            $shape.attr('height',height);
            break;
        default:
            break;
    }
    $shape.attr('myColor',ColorsEnum[color]);

    console.log(method);

    let x,y;

    if($shape.hasClass('triangle')){
        x = getRandomLeft(100);
        y = getRandomTop(height);
    }
    else{
        if(size === 0){
            x = getRandomLeft(90);
            y = getRandomTop(110);
        }
        else if(size === 1){
            x = getRandomLeft(60);
            y = getRandomTop(80);
        }
        else if (size === 2){
            x = getRandomLeft(50);
            y = getRandomTop(60);
        }
    }

    console.log("width = "+$shape.css('width') + "  height = " + $shape.css('height'));

    $shape.css('top',y);
    $shape.css('left',x);

    /** onClick event for each new shape */
    $shape.on('click',function () {
        if($shape.hasClass('selected') || $shape.hasClass('tri-selected')) {
            $shape.removeClass('selected');
            if($shape.hasClass('triangle')){
                $shape.children('div').each(function () {
                    $(this).remove();
                });
            }
            $shape.removeClass('tri-selected');
            $('#deleteBtn').prop('disabled',true);
            $('#rotateBtn').prop('disabled',true);
            $shape.css('border-bottom',($shape.attr('height'))+'px solid ' + $shape.attr('myColor'));
            hasSelected =false;
        }
        else {
            if(!hasSelected){
                if($shape.hasClass('triangle')){
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
    $drawBoard.append($shape);
}

function getRandomTop(height) {
  return  Math.random() * (+(($drawBoard.position().top + $drawBoard.outerHeight(true)) - height) - +$drawBoard.position().top)+ +$drawBoard.position().top;
}

function getRandomLeft(width) {
   return  Math.random() * (+($drawBoard.width()-width)- +$drawBoard.position().left) + +$drawBoard.position().left;
}

/** function that draw a mini triangle into the picked triangle for the border illusion*/
function drawMiniTriangle(selector) {
    root.style.setProperty('--border-bottom',(selector.attr('height')-5)+'px '+ 'solid '+ selector.attr('myColor'));
    selector.css('border-bottom',(selector.attr('height'))+'px solid black');
}

function deleteDrawable() {
    $drawBoard.children('div').each(function () {
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


