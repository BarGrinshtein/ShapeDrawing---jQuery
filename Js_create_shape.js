const ColorsEnum = ["red","green","yellow","blue","brown","white","pink"];
const SizeEnum = ["bigShape","regularShape","smallShape"];
let hasSelected = false;

class Js_create_shape {
    constructor() {}

    createRandomShape(container) {
        function createShape(container) {
            const $board = $(container);
            const that = this;

            let method = Math.floor(Math.random() * (+4 - +1)) + +1;
            let size = Math.floor(Math.random() * (+3 - +0)) + +0;

            let height;
            let triClass;

            if(size === 0) {
                height = 80;
                triClass = "tri-selected-big";
            }
            else if(size ===1) {
                height = 60;
                triClass = "tri-selected-medium";
            }
            else if(size === 2) {
                height = 40;
                triClass = "tri-selected-small";
            }


            let color = Math.floor(Math.random() * (+7 - +0)) + +0;

            let $shape;


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
                    $shape.css('border-bottom', height + "px solid " + ColorsEnum[color]);
                    $shape.attr('height', height);
                    $shape.attr("size",triClass);
                    break;
                default:
                    break;
            }
            $shape.attr('myColor', ColorsEnum[color]);

            console.log(method);

            let x, y;

                if (size === 0) {
                    x = getRandomLeft(110);
                    y = getRandomTop(110);
                } else if (size === 1) {
                    x = getRandomLeft(80);
                    y = getRandomTop(80);
                } else if (size === 2) {
                    x = getRandomLeft(70);
                    y = getRandomTop(60);
                }

            console.log("width = " + $shape.css('width') + "  height = " + $shape.css('height'));

            $shape.css('top', y);
            $shape.css('left', x);

            /** onClick event for each new shape */
            $shape.on('click', function () {
                if ($shape.hasClass('selected') || $shape.hasClass($shape.attr('size')) ) {
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
                            drawMiniTriangle($shape);
                        } else {
                            $shape.addClass('selected');
                        }
                        $('#deleteBtn').prop('disabled', false);
                        $('#rotateBtn').prop('disabled', false);
                        hasSelected = true;
                    }
                }
            })
            $board.append($shape);
            console.log($board);
        }

        function getRandomTop(height) {
            return Math.random() * (+(($drawBoard.position().top + $drawBoard.outerHeight(true)) - height) - +$drawBoard.position().top) + +$drawBoard.position().top;
        }

        function getRandomLeft(width) {
            return Math.random() * (+($drawBoard.width() - width) - +$drawBoard.position().left) + +$drawBoard.position().left;
        }

        createShape(container);
    }
}

