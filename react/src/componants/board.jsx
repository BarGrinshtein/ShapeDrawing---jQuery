import React,{Component} from 'react';
import Triangle from "./Triangle";
import Circle from "./circle";
import Rectangle from "./rectangle";

class Board extends Component{

    render() {
        return(
            <div id={this.props.boardID} className ="board col-lg-4 col-md-4 col-sm-4 col-xs-12" >
                {this.props.shapes.map(shape => (
                    this.getType(shape)
                ))}
            </div>
        );
    }

    getType(shape){
        const type = this.props.type;
        if(type === "Triangle"){
            return (<Triangle
                key = {shape.id}
                id = {shape.id}
                heighSize = {shape.height}
                shapeColor = {shape.color}
                topY = {shape.top}
                leftX = {shape.left}
                listOfClasses = {shape.classes}
                innerTriangle = {shape.innerTriangle}
                isOtherSelected = {this.props.isOtherSelected}
                notifySelected = {this.props.notifySelected}
            />);
        }
        else if(type === "Circle"){
            return (<Circle
                key = {shape.id}
                id = {shape.id}
                listOfClasses = {shape.classes}
                topY = {shape.top}
                leftX = {shape.left}
                isOtherSelected = {this.props.isOtherSelected}
                notifySelected = {this.props.notifySelected}
            />)
        }
        else if(type ==="Rectangle"){
            return (<Rectangle
                key = {shape.id}
                id = {shape.id}
                listOfClasses = {shape.classes}
                topY = {shape.top}
                leftX = {shape.left}
                isOtherSelected = {this.props.isOtherSelected}
                notifySelected = {this.props.notifySelected}
            />)
        }
    }
}

export default Board;