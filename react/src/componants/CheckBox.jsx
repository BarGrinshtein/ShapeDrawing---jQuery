import React,{Component} from  'react';

class CheckBox extends Component{

    render() {
        return(
            <React.Fragment>
                <label htmlFor={this.props.elemsID} className='mx-2' >{this.props.lableText}</label>
                <input type='checkBox' id={this.props.elemsID}/>
            </React.Fragment>
        );
    }
}

export default CheckBox;