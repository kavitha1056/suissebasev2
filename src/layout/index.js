import { Layout } from 'antd';
import { Component } from 'react'
import CustomCurrency from '../shared/inputs/custom.currency';
import CustomDatepicker from '../shared/inputs/custom.datepicker';
import CustomDropdown from '../shared/inputs/custom.dropdown';
import CustomEmail from '../shared/inputs/custom.email';
import CustomInput from '../shared/inputs/custom.input';
import CustomPhoneNumber from '../shared/inputs/custom.phonenumber';
class AppLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {dropdown: [{name:"keshav", id:"1"}, {name:"kavi", id:"2"}]};
      }

    render() {
        return <Layout>
            Welcome to Suissebasev2
            <div>
                <CustomCurrency defaultCountry="USD" defaultvalue="100"/> <br/><br/>               
                <CustomDropdown items={this.state.dropdown}/><br/><br/>
                <CustomDatepicker defaultvalue={moment('2015-01-01', 'YYYY-MM-DD')}/><br/><br/>
                <CustomInput/><br/><br/>
                <CustomEmail/><br/><br/>
                <CustomPhoneNumber/>
            </div>
           
        </Layout>
    }
}

export default AppLayout;