import React from 'react';

class IntroContainer extends React.Component {
    render() {
        const styles = {
            "background": "#DDD",
            "margin-top": "30px",
            "margin-bottom": "-15px",
            "border-radius": "0px",
        };

        const headerStyle = {
            "font-weight": "700",
            "color": "black"
        }

        return (
            <div className="jumbotron" style={styles}>
                <h2 style={headerStyle}>Webové IDE pre vývoj digitálnych systémov [ASICDE]</h2>
                <h4 style={headerStyle}>Tím 18</h4>
            </div>
        );
    }
}

export default IntroContainer;