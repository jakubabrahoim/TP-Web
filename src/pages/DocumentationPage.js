import React from 'react';
import '../App.css';

import NavigationBar from '../components/NavigationBar'
import IntroDocContainer from '../components/IntroDocContainer';
import FooterContainer from '../components/FooterContainer';
import MethodologyContainer from '../components/MethodologyContainer';
import DocumentationContainer from '../components/DocumentationContainer';

class DocumentationPage extends React.Component {
    render() {
        return (
            <div className="App">
                <NavigationBar />
                <IntroDocContainer />
                <MethodologyContainer />
                <DocumentationContainer />
                <FooterContainer />
            </div>
        );
    }
}

export default DocumentationPage;
