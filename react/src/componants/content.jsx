import React,{Component} from 'react';
import Board from "./board";


class Content extends Component{
    render() {
        return(
            <div className="container boardContainer col-lg-12">
                <div className="row my-row ">
                    <Board
                        boardID = "triangleBoard"
                        shapes = {this.props.triangles}
                        type = "Triangle"
                        isOtherSelected = {this.props.isOtherSelected}
                        notifySelected = {this.props.notifySelected}
                    />
                    <Board
                        boardID = "circleBoard"
                        shapes = {this.props.circles}
                        type = "Circle"
                        isOtherSelected = {this.props.isOtherSelected}
                        notifySelected = {this.props.notifySelected}
                    />
                    <Board
                        boardID = "rectBoard"
                        shapes = {this.props.rectangles}
                        type = "Rectangle"
                        isOtherSelected = {this.props.isOtherSelected}
                        notifySelected = {this.props.notifySelected}
                    />
                </div>
            </div>
        );
    }
}

export default Content;