import React,{Component} from 'react';
import './App.scss';
import Header from "./components/header";
import Content from "./components/content";
import $ from 'jquery';
import ElementItem from './js/ElementItem';

class App extends Component{

    state = {
        ColorEnum : ["red","green","yellow","blue","brown","white","pink"],
        SizeEnum : ["bigShape","regularShape","smallShape"],
        //hasSelected : false,
        //rotating : false,
        containers:["#triangleBoard","#circleBoard","#rectBoard"],
        triangles:[],
        circles:[],
        rectangles:[],
        lastID: 0,
        //selectedShape:null
    };


    render() {
        return (
            <div className="App">
                <Header
                    mainName="pageHeader"
                    onClickCreate = {this.handleOnClickCreate}
                    onClickRotate = {this.handleOnClickRotate}
                    onClickDelete = {this.handleOnClickDelete}
                />
                <Content
                    triangles = {this.state.triangles}
                    circles = {this.state.circles}
                    rectangles = {this.state.rectangles}
                    isOtherSelected = {this.isOtherSelected}
                    notifySelected = {this.notifySelected}
                />
            </div>
        );
    }


    handleOnClickDelete=()=>{
        const $rBtn = $('#rotateBtn');
        const $dBtn = $('#deleteBtn');
        const that = this;


        for(let i of this.state.triangles){
            if(i.id === this.state.selectedShape) {
                const newTriangles = this.state.triangles.filter(t => t.id !== i.id);
                this.setState({triangles: newTriangles});
            }
        }

        for(let i of this.state.circles){
            if(i.id === this.state.selectedShape) {
                const newCircles = this.state.circles.filter(c => c.id !== i.id);
                this.setState({circles: newCircles});
            }
        }

        for(let i of this.state.rectangles){
            if(i.id === this.state.selectedShape) {
                const newRectangles = this.state.rectangles.filter(r => r.id !== i.id);
                this.setState({rectangles: newRectangles});
            }
        }


        $('#rotateBtn').text('Start Rotation');
        that.setState({hasSelected : false});
        that.setState({rotating : false});
        $dBtn.prop('disabled',true);
        $rBtn.prop('disabled',true);
    };


    handleOnClickRotate =()=>{
        const $btn = $('#rotateBtn');
        if($btn.text()==='Start Rotation'){
            $btn.text('Stop Rotation');
        }
        else{
            $btn.text('Start Rotation');
        }
        if(!(this.state.rotating)) {
            for (var i of this.state.containers) {
                $(i).children('div').each(function () {
                    if ($(this).hasClass('selected') || $(this).hasClass('tri-selected')) {
                        $(this).addClass('rotational');
                    }
                });
            }
            this.setState( {rotating:true});
        }
        else {
            for (var i of this.state.containers) {
                $(i).children('div').each(function () {
                    if ($(this).hasClass('rotational')) {
                        $(this).removeClass('rotational');
                    }
                });
            }
            this.setState( {rotating:false});
        }
    };


    handleOnClickCreate =()=>{
        const checkedShapes = this.checkBoxStatus();
        for (var i of checkedShapes){
            this.addNewShape(i);
        }
    };

    addNewShape(shapeItem){
        const $board = $(shapeItem.getContainer());

        let size = Math.floor(Math.random() * this.state.SizeEnum.length);
        let color = Math.floor(Math.random() * this.state.ColorEnum.length);

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

        let x, y;

        if(shapeItem.getType() === "triangle"){
            x = this.getRandomLeft(115,$board);
            y = this.getRandomTop(90,$board);
        }

        else {
            if (size === 0) {
                x = this.getRandomLeft(70, $board);
                y = this.getRandomTop(90, $board);
            } else if (size === 1) {
                x = this.getRandomLeft(60, $board);
                y = this.getRandomTop(70, $board);
            } else if (size === 2) {
                x = this.getRandomLeft(40, $board);
                y = this.getRandomTop(50, $board);
            }
        }


        if (shapeItem.getType() === "circle") {
            let circles = [...this.state.circles];
            circles.push({top: y, left: x , classes: 'circle '+ this.state.ColorEnum[color] + ' ' + this.state.SizeEnum[size], id: (this.state.lastID + 1)});
            this.setState({circles:circles});
        }
        else if (shapeItem.getType() === "rectangle"){
            let rectangles = [...this.state.rectangles];
            rectangles.push({top: y, left: x , classes: 'rect '+ this.state.ColorEnum[color] + ' ' + this.state.SizeEnum[size], id: (this.state.lastID + 1)});
            this.setState({rectangles:rectangles});
        }
        else if (shapeItem.getType() === "triangle") {
            let triangles = [...this.state.triangles];
            triangles.push({height:height , color: this.state.ColorEnum[color], top: y, left: x , classes: 'triangle',innerTriangle: triClass, id: (this.state.lastID + 1)});
            this.setState({triangles:triangles});
        }
        this.state.lastID ++;
    }

    getRandomTop(height,board) {
        const $drawBoard = $(board);
        return Math.random() * (+((0 + $drawBoard.outerHeight(true)) - height) - +0) + +0;
    };

    getRandomLeft(width,board) {
        const $drawBoard = $(board);
        return Math.random() * (+($drawBoard.width() - width) - +0) + +0;
    };

    checkBoxStatus(){
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

        return checked;
    };

    componentDidMount() {
        $('#deleteBtn').prop('disabled',true);
        $('#rotateBtn').prop('disabled',true);
    }

    isOtherSelected = () =>{
        return this.state.hasSelected;
    };

    notifySelected = shapeID =>{
        const selection = this.state.hasSelected;
        if(selection){
            $('#deleteBtn').prop('disabled', true);
            $('#rotateBtn').prop('disabled', true);
            this.setState({selectedShape:null});
        }
        else {
            $('#deleteBtn').prop('disabled', false);
            $('#rotateBtn').prop('disabled', false);
            this.setState({selectedShape:shapeID});
        }
        this.setState({hasSelected: !selection});
    }

}

export default App;
