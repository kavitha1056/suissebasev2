import { DatePicker } from "antd";
import { Component } from "react";

class CustomDatepicker extends Component{

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render(){
        return <DatePicker defaultValue={this.props.defaultvalue} onChange={this.onChange} />
    }
}
export default CustomDatepicker;