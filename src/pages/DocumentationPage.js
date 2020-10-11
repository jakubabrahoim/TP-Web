import React from 'react';
import '../App.css';

import NavigationBar from '../components/NavigationBar'
import IntroDocContainer from '../components/IntroDocContainer';
import FooterContainer from '../components/FooterContainer';

class DocumentationPage extends React.Component {
    render() {
        return (
            <div className="App">
                <NavigationBar />
                <IntroDocContainer />
                <FooterContainer />
            </div>
        );
    }
}

export default DocumentationPage;
