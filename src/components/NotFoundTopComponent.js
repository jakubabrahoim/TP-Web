import React from 'react';

class NotFoundTopComponent extends React.Component {
    render() {
        const styles = {
            "background": "#DDD",
            "margin-top": "48px",
            "margin-bottom": "0px",
            "border-radius": "0px",
        };

        const headerStyle = {
            "font-weight": "700",
            "color": "black"
        }

        return (
            <div className="jumbotron" style={styles}>
                <h1 style={headerStyle}>404 NOT FOUND</h1>
            </div>
        );
    }
}

export default NotFoundTopComponent;