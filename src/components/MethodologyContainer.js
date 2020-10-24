import React from 'react';

import Entry from './Entry';
import MethodologyData from '../data/methodology.json';

class MethodologyContainer extends React.Component {
    getEntries() {
        return MethodologyData.map(e => <Entry item={e} width="20%" height="320px" methodology/>);
    }

    render() {
        const styles = {
            "background-color": "#1ABC9C",
            "margin-top": "0px",
            "margin-bottom": "0px",
            "border-radius": "0px"
        };

        const headerStyle = {
            "color": "whitesmoke",
            "font-weight": "bold"
        };

        const entries = this.getEntries();

        return (
            <div className="jumbotron" style={styles} id="methodology">
                <h3 style={headerStyle}>Metodiky</h3>
                {entries}
            </div>
        );
    }
}

export default MethodologyContainer;