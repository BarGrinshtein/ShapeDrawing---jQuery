import React,{Component} from 'react'

class Rectangle extends Component{

    state = {
        classes: this.props.listOfClasses,
        isPressed: false
    };

    styles = {
        top: this.props.topY,
        left: this.props.leftX
    };

    handleClick = () =>{
        if(!this.state.isPressed) {
            if(!this.props.isOtherSelected()) {
                this.setState({classes: this.props.listOfClasses + ' selected', isPressed: true});
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
            <div className={this.state.classes} style={this.styles} onClick={this.handleClick}/>
        );
    }
}

export default Rectangle