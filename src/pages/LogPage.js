import React from 'react';
import '../App.css';

import NavigationBar from '../components/NavigationBar'
import IntroLogContainer from '../components/IntroLogContainer'
import FooterContainer from '../components/FooterContainer';
import LogEntryContainer from '../components/LogEntryContainter';

class LogPage extends React.Component {
    render() {
        return (
            <div className="App">
                <NavigationBar />
                <IntroLogContainer />
                <LogEntryContainer />
                <FooterContainer />
            </div>
        );
    }
}

export default LogPage;
