import React from 'react';

import Entry from './Entry';
import DocumentationData from '../data/documentation.json';

class IntroDocContainer extends React.Component {
    getEntries() {
        return DocumentationData.map(e => <Entry item={e} width="20%" height="320px" methodology/>);
    }

    render() {
        const styles = {
            "background": "#2C3E50",
            "margin-top": "48px",
            "margin-bottom": "0px",
            "border-radius": "0px",
        };

        const headerStyle = {
            "font-weight": "900",
            "color": "whitesmoke"
        }

        const entries = this.getEntries();

        return (
            <div className="jumbotron" style={styles}>
                <h1 style={headerStyle}>Dokumentácia k projektu</h1>
                {entries}
            </div>
        );
    }
}

export default IntroDocContainer;