let hasSelected = false;

var JS_create_shape = (function () {
    var ColorEnum , SizeEnum , triangleBoard, circleBoard, rectBoard ;

    function JS_create_shape (_triangleBoard,_circleBoard,_rectBoard) {
        ColorEnum = ["red","green","yellow","blue","brown","white","pink"];
        SizeEnum = ["bigShape","regularShape","smallShape"];
        triangleBoard =_triangleBoard;
        circleBoard = _circleBoard;
        rectBoard = _rectBoard;
    }

    createShape = function() {

        const checkedShapes = checkBoxStatus();


        //creation loop for all the boards that were selected
        for(let i = 0; i<checkedShapes.length ;i++) {

            const $board = $(checkedShapes[i].getContainer());
            let $shape = $('<div>');


            let size = Math.floor(Math.random() * SizeEnum.length);
            let color = Math.floor(Math.random() * ColorEnum.length);

            let height;
            let triClass;

            if (size === 0) {
                height = 80;
                triClass = "tri-selected-big";
            } else if (size === 1) {
                height = 60;
                triClass = "tri-selected-medium";
            } else if (size === 2) {
                height = 40;
                triClass = "tri-selected-small";
            }


            if (checkedShapes[i].getType() === "circle" || checkedShapes[i].getType() === "rectangle") {
                $shape.addClass(SizeEnum[size]);
                $shape.addClass(ColorEnum[color]);
                if (checkedShapes[i].getType() === "circle")
                    $shape.addClass('circle');
                else
                    $shape.addClass('rect');
            }
            else if (checkedShapes[i].getType() === "triangle") {
                $shape.addClass('triangle');
                $shape.css('border-bottom', height + "px solid " + ColorEnum[color]);
                $shape.attr('height', height);
                $shape.attr("size", triClass);
            }

            $shape.attr('myColor', ColorEnum[color]);

            let x, y;

            if(checkedShapes[i].getType() === "triangle"){
                x = getRandomLeft(115,$board);
                y = getRandomTop(90,$board);
            }

            else {
                if (size === 0) {
                    x = getRandomLeft(70, $board);
                    y = getRandomTop(90, $board);
                } else if (size === 1) {
                    x = getRandomLeft(60, $board);
                    y = getRandomTop(70, $board);
                } else if (size === 2) {
                    x = getRandomLeft(40, $board);
                    y = getRandomTop(50, $board);
                }
            }

            $shape.css('top', y);
            $shape.css('left', x);

            /** onClick event for each new shape */
            $shape.on('click', function () {
                if ($shape.hasClass('selected') || $shape.hasClass($shape.attr('size'))) {
                    $shape.removeClass('selected');
                    if ($shape.hasClass('triangle')) {
                        $shape.children('div').each(function () {
                            $(this).remove();
                        });
                    }
                    $shape.removeClass($shape.attr('size'));
                    $shape.removeClass('tri-selected');
                    $('#deleteBtn').prop('disabled', true);
                    $('#rotateBtn').prop('disabled', true);
                    $shape.css('border-bottom', ($shape.attr('height')) + 'px solid ' + $shape.attr('myColor'));
                    hasSelected = false;
                } else {
                    if (!hasSelected) {
                        if ($shape.hasClass('triangle')) {
                            $shape.addClass($shape.attr('size'));
                            $shape.addClass('tri-selected');
                        } else {
                            $shape.addClass('selected');
                        }
                        $('#deleteBtn').prop('disabled', false);
                        $('#rotateBtn').prop('disabled', false);
                        hasSelected = true;
                    }
                }
            });
            $board.append($shape);
        }
    };

    checkBoxStatus = function() {
        let checked = [];
        const $triCheck = $('#tri-checkbox');
        const $circleCheck = $('#circle-checkbox');
        const $rectCheck = $('#rect-checkbox');

        if($triCheck.is(":checked") === true)
            checked.push(new ElementItem($('#triangleBoard'),'triangle'));
        if($circleCheck.is(":checked") === true)
            checked.push(new ElementItem($('#circleBoard'),'circle'));
        if($rectCheck.is(":checked") === true)
            checked.push(new ElementItem($('#rectBoard'),'rectangle'));

        console.log(checked);

        for(let i = 0 ; i<checked.length ; i++)
            console.log(checked[i].getType());
        return checked;
    };

    getRandomTop = function(height,board) {
        const $drawBoard = $(board);
        console.log($drawBoard.position().top + "  height =  " + height);
        return Math.random() * (+((0 + $drawBoard.outerHeight(true)) - height) - +0) + +0;
    };

    getRandomLeft = function(width,board) {
        const $drawBoard = $(board);
        let max = $drawBoard.position().left + $drawBoard.width() - width;
        console.log($drawBoard.position().left +  " board.width() = " + $drawBoard.width() + "   width = " + width + " max = " + max);
        return Math.random() * (+($drawBoard.width() - width) - +0) + +0;
    };

    JS_create_shape.prototype.createRandomShape = function () {
        createShape();
    };

    return JS_create_shape;
})();