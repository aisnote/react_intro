import React, { Component, ReactNode } from 'react';

import '../assets/styles/application.css';


class Footer extends Component {

    public render(): ReactNode {

        return (
            <footer className="app-footer">
                Copyright &copy;The Caribbean Coffee Company. All rights reserved.
            </footer>
        );
    }
}



export default Footer;