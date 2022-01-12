import { Layout } from 'antd';
import { Component } from 'react'
import CustomDropdown from '../shared/inputs/custom.dropsown';
import CustomIput from '../shared/inputs/custom.input';
class AppLayout extends Component {

    render() {
        return <Layout>
            Welcome to Suissebasev2
            <CustomIput placeholder="1" />
            <CustomIput placeholder="2" />
            <CustomIput placeholder="3" />
            <CustomIput placeholder="4" />
            <CustomDropdown placeholder="Please select" data={[{ name: "subbareddy", id: 1 }, { name: "Kavitha", id: 2 }]} valueField={"id"} textField={"name"} />
            <CustomDropdown data={[{ name: "subbareddy", id: 1 }, { name: "Kavitha", id: 2 }]} valueField={"id"} textField={"name"} />
            <CustomDropdown data={[{ name: "subbareddy", id: 1 }, { name: "Kavitha", id: 2 }]} valueField={"id"} textField={"name"} />
            <CustomDropdown data={[{ name: "subbareddy", id: 1 }, { name: "Kavitha", id: 2 }]} valueField={"id"} textField={"name"} />
        </Layout>
    }
}

export default AppLayout;