import { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home';
class RouteConfig extends Component {

    render() {
        return <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    }
}

export default RouteConfig;