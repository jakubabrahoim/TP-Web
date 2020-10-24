import React from 'react';

import Entry from './Entry'

class LogEntryContainer extends React.Component {
    getEntries() {
        const entries = [
            {
                date: "19.10.2020 8:00",
                title: "Zápisnica 3. stretnutie",
                doc: "../docs/Zápisnica 3.docx",
                subtitle: "Bc. Tadeáš Drahovský"
            },
            {
                date: "12.10.2020 8:00",
                title: "Zápisnica 2. stretnutie",
                doc: "../docs/Zápisnica 2.docx",
                subtitle: "Bc. Tadeáš Drahovský"
            },
            {
                date: "03.10.2020 8:00",
                title: "Zápisnica 1. stretnutie",
                doc: "../docs/Zápisnica 1.docx",
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