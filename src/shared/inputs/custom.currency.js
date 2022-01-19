import { InputNumber, Select } from "antd";
import {Component } from "react";

class CustomCurrency extends Component{
    

    onChange(value) {
        console.log('changed', value);
      }
    render(){
        const { Option } = Select;

        const selectBefore = (
        <Select defaultValue="add" style={{ width: 60 }}>
            <Option value="add">+</Option>
            <Option value="minus">-</Option>
        </Select>
        );
        const selectAfter = (
        <Select defaultValue={this.props.defaultCountry} style={{ width: 60 }}>
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="CNY">¥</Option>
        </Select>
        );

        return<>        
            <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={this.props.defaultvalue} />
        </>

    }
}
export default CustomCurrency;