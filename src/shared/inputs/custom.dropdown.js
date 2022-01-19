import { Select } from "antd";
import { Component } from "react";

class CustomDropdown extends Component{
    onChange(value) {
        console.log(`selected ${value}`);
    }
    
    onSearch(val) {
        console.log('search:', val);
    }
    render() {
        const items = this.props.items; 
        return <>
             <Select showSearch placeholder="Select a person" >
                {items.map(item => (
                    <Select.Option key={item.name}>{item.name}</Select.Option>
                    ))}
            </Select>
            </>
        
    }
}
export default CustomDropdown;