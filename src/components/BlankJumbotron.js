import React from 'react';

class BlankJumbotron extends React.Component {
    render() {
        const styleCss = {
            "min-height": "100%",
            "height": "100%"
        }

        return (
            <div className="jumbotron" style={styleCss}>

            </div>
        );
    }
}

export default BlankJumbotron;