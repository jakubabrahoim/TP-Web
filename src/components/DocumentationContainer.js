import React from 'react';

class DocumentationContainer extends React.Component {
    render() {
        const containerStyle = {
            "border-radius": "0px",
            "margin": "0px"
        }

        const headerStyle = {
            "font-weight": "bold"
        }

        return (
            <div className="jumbotron" id="doc" style={containerStyle}>
                <h3 style={headerStyle}>Dokumentácia</h3>
                <p>Na dokumentácií sa pracuje :-D</p>
            </div>
        );
    }
}

export default DocumentationContainer;