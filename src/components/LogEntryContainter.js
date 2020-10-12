import React from 'react';

import Entry from './Entry'

class LogEntryContainer extends React.Component {
    getEntries() {
        const entries = [
            {
                date: "01-01-1999",
                title: "Testovaci zaznam1",
                doc: "/",
                subtitle: "Sprint 1"
            },
            {
                date: "01-01-1999",
                title: "Testovaci zaznam2",
                doc: "/",
                subtitle: "Sprint 1"
            },
            {
                date: "01-01-1999",
                title: "Testovaci zaznam3",
                doc: "/",
                subtitle: "Sprint 1"
            },
            {
                date: "01-01-1999",
                title: "Testovaci zaznam4",
                doc: "/",
                subtitle: "Sprint 1"
            },
        ]

        return entries.map(e => <Entry item={e} />);
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

        const lastEntry = this.getEntries()[0];
        const entries = this.getEntries();
        entries.shift();

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