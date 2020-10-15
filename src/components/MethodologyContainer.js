import React from 'react';

import Entry from './Entry';

class MethodologyContainer extends React.Component {
    getEntries() {
        const entries = [
            {
                date: "10.10.2020",
                title: "Metodika formátovania kódu",
                doc: "../docs/code-format.docx",
                subtitle: "Bc. Adam Chmara"
            },
            {
                date: "03.10.2020",
                title: "Metodika komunikácie a správy dát",
                doc: "../docs/communication.docx",
                subtitle: "Bc. Lukáš Mišaga"
            },
            {
                date: "12.10.2020",
                title: "Metodika správy úloh",
                doc: "../docs/task-management.docx",
                subtitle: "Bc. Adam Chmara"
            },
            {
                date: "10.10.2020",
                title: "Metodika verziovania kódu",
                doc: "../docs/code-version.docx",
                subtitle: "Bc. Lukáš Mišaga"
            },
        ];

        return entries.map(e => <Entry item={e} width="20%" height="320px" methodology/>);
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