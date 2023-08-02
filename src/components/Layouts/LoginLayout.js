import React from 'react';
import NavigationBar from '../../pages/Shared/NavigationBar/NavigationBar';
import {Outlet} from 'react-router-dom';
import Header from '../../pages/Shared/Header/Header';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;