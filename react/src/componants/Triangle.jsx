import React,{Component} from 'react';

class Triangle extends Component{

    state = {
        innerTriangle: this.props.innerTriangle,
        classes: this.props.listOfClasses,
        isPressed:false
    };

    styles = {
        top:this.props.topY,
        left:this.props.leftX,
        borderBottom:this.props.heighSize + 'px solid ' + this.props.shapeColor
    };

    handleClick = () =>{
        if(!this.state.isPressed) {
            if(!this.props.isOtherSelected()) {
                this.setState({classes: this.props.listOfClasses + ' tri-selected ' + this.state.innerTriangle , isPressed: true});
                this.props.notifySelected(this.props.id);
            }
        }
        else {
            this.setState({classes: this.props.listOfClasses, isPressed: false});
            this.props.notifySelected(null);
        }
    };

    render() {
        return(
            <div className={this.state.classes} style={this.styles} onClick={this.handleClick} />
        );
    }
}

export default Triangle;