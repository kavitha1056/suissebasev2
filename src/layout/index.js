import { Layout } from 'antd';
import { Component } from 'react'
import AppContent from './content';
import AppFooter from './footer';
import AppHeader from './header';
class AppLayout extends Component {
    render() {
        return <Layout>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </Layout>
    }
}

export default AppLayout;