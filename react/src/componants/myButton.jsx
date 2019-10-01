import React,{Component} from  'react';

class MyButton  extends Component{
    render() {
        return(
            <button id={this.props.btnID} className={this.props.classesName} onClick={this.props.onClickMethod}>{this.props.btnText}</button>
        );
    }
}

export default MyButton;