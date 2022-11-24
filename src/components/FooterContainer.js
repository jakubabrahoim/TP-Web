import React from 'react';

class FooterContainer extends React.Component {
    render() {
        const styles = {
            "background-color": "#1A252F",
            "margin-top": "0px",
            "margin-bottom": "0px",
            "border-radius": "0px",
            "text-align": "left",
            "display": "block",
            "padding-top": "10px",
            "padding-bottom": "10px"
        };

        const styles2 = {
            "background-color": "#2C3E50",
            "color": "lightgrey",
            "margin-top": "0px",
            "margin-bottom": "0px",
            "border-radius": "0px",
            "text-align": "left",
            "display": "block",
            "padding-top": "10px",
            "padding-bottom": "10px"
        };

        const copyrightStyle = {
            "color": "lightgrey",
            "font-size": "14px",
            "font-weight": "1500",
            "padding-top": "10px",
            "padding-left": "50px",
            "display": "inline-block"
        }

        return (
            <div>
                <footer>
                    <div className="jumbotron" style={styles2}>
                    </div>
                    <div className="jumbotron" style={styles}>
                        <h6 style={copyrightStyle}>© 2020 | TÍMOVÝ PROJEKT | FIIT STU</h6>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterContainer;