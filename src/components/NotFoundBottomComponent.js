import React from 'react';

class NotFoundBottomComponent extends React.Component {
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

        return (
            <div className="jumbotron" style={styles} id="about">
                <h3 style={headerStyle}>Požadovaná stránka nebola nájdená</h3>
            </div>
        );
    }
}

export default NotFoundBottomComponent;