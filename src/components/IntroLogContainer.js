import React from 'react';

class IntroLogContainer extends React.Component {
    render() {
        const styles = {
            "background": "#2C3E50",
            "margin-top": "48px",
            "margin-bottom": "0px",
            "border-radius": "0px",
        };

        const styles2 = {
            "background-color": "#1ABC9C",
            "margin-top": "0px",
            "margin-bottom": "0px",
            "border-radius": "0px",
            "padding-top": "10px",
            "padding-bottom": "10px"
        };

        const headerStyle = {
            "font-weight": "900",
            "color": "whitesmoke"
        }

        return (
            <div>
                <div className="jumbotron" style={styles}>
                    <h1 style={headerStyle}>Zápisnice</h1>
                </div>
                <div className="jumbotron" style={styles2}>
                </div>
            </div>
        );
    }
}

export default IntroLogContainer;