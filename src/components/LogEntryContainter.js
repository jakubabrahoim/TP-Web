import React from 'react';

import Entry from './Entry'

class LogEntryContainer extends React.Component {
    getEntries() {
        const entries = [
            {
                date: "12.10.2020 12:00",
                title: "Zápisnica 1. stretnutie",
                doc: "../docs/log-02.docx",
                subtitle: "Bc. Tadeáš Drahovský"
            },
            {
                date: "03.10.2020 12:00",
                title: "Zápisnica 1. stretnutie",
                doc: "../docs/log-01.docx",
                subtitle: "Bc. Tadeáš Drahovský"
            }
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