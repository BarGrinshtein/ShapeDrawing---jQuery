import React,{Component} from 'react';
import CheckBox from "./CheckBox";
import MyButton from "./myButton";

class Header extends Component{

    render() {
        return(

            <div className={this.props.mainName}>

                <MyButton btnID = "createBtn" classesName = "btn btn-danger" onClickMethod = {this.props.onClickCreate} btnText = "Create Shape"/>
                <MyButton btnID = "deleteBtn" classesName = "btn btn-danger mx-2" onClickMethod = {this.props.onClickDelete} btnText = "Delete Shape"/>
                <MyButton btnID = "rotateBtn" classesName = "btn btn-danger" onClickMethod = {this.props.onClickRotate} btnText = "Start Rotation"/>

                <fieldset style={{display: "inline-block"}} className="ml-4">
                    <CheckBox elemsID ="tri-checkbox" lableText = "Triangle" />
                    <CheckBox elemsID ="circle-checkbox" lableText = "Circle"/>
                    <CheckBox elemsID ="rect-checkbox" lableText = "Rectangle"/>
                </fieldset>

            </div>


        );
    }
}

export default Header;