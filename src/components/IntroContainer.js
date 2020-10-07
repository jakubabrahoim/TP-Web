import React from 'react';

class IntroContainer extends React.Component {
    render() {
        const styles = {
            "background-color": "#1b1b1b",
            "margin-top": "0px",
            "margin-bottom": "0px",
            "border-radius": "0px"
        };

        const headerStyle = {
            "font-weight": "900",
            "color": "whitesmoke"
        }

        return (
            <div className="jumbotron" style={styles}>
                <h1 style={headerStyle}>Tímový projekt</h1>
                <h2 style={headerStyle}>Webové IDE pre ASIC [ASICDE]</h2>
            </div>
        );
    }
}

export default IntroContainer;