import React from 'react';

class Entry extends React.Component {
    render() {
        const memberCardStyle = {
            "width": "45%",
            "min-width": "250px",
            "max-width": "650px",
            "display": "inline-block",
            "border-radius": "2%",
            "margin": "10px",
            "-webkit-box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "-moz-box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "text-align": "center"
        };

        const titleStyle = {
            "text-transform": "uppercase",
            "font-weight": "bolder",
            "color": "#333",
            "text-align": "left"
        }

        const subTitleStyle = {
            "font-weight": "thin",
            "color": "#555",
            "font-size": "20px",
            "text-align": "left"
        }

        const dateStyle = {
            "font-size": "15px",
            "font-family": "Arial Narrow, Arial, sans-serif",
            "text-align": "left"
        }

        return (
            <a href={this.props.item.doc} className="jumbotron user-container" style={memberCardStyle}>
                    <h6 style={dateStyle}>{this.props.item.date}</h6>
                    <h2 style={titleStyle}>{this.props.item.title}</h2>
                    <h3 style={subTitleStyle}>{this.props.item.subtitle}</h3>
                    <p>Stiahnuť</p>
            </a>
        );
    }
}

export default Entry;