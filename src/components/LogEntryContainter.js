import React from 'react';

import Entry from './Entry'
import LogData from '../data/logs2.json';

class LogEntryContainer extends React.Component {
    getEntries() {
        return LogData.map(e => <Entry item={e} />);
    }

    render() {
        const containerStyle = {
            "border-radius": "0px",
            "margin": "0px",
            "text-align": "left",
            "padding": "50px 15%"
        }

        const containerLastStyle = {
            "border-radius": "0px",
            "margin": "0px",
            "background": "#DDD"
        }

        const headerStyle = {
            "font-weight": "bold",
            "text-align": "center"
        }

        const entries = this.getEntries();
        const lastEntry = entries.shift();

        return (
            <div>
                <div className="jumbotron" style={containerLastStyle}>
                    <h3 style={headerStyle}>Posledná zápisnica</h3>
                    {lastEntry}
                </div>
                <div className="jumbotron" style={containerStyle}>
                    <h3 style={headerStyle}>Zoznam zápisníc</h3>
                    {entries}
                </div>
            </div>
        );
    }
};

export default LogEntryContainer;