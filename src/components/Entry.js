import React from 'react';

class Entry extends React.Component {
    render() {
        var width = this.props.width;
        if (!width)
            width = "45%";

        var height = this.props.height;
        if (!height)
            height = "auto";

        const memberCardStyle = {
            "width": width,
            "height": height,
            "min-width": "250px",
            "max-width": "650px",
            "display": "inline-block",
            "border-radius": "2%",
            "margin": "10px",
            "-webkit-box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "-moz-box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "text-align": "center",
            "padding": "60px 30px"
        };

        var titleTextStyle = "125px";
        if (!this.props.methodology)
            titleTextStyle = "40px";

        const titleStyle = {
            "text-transform": "uppercase",
            "font-weight": "bolder",
            "color": "#333",
            "height": titleTextStyle,
            "text-align": "left",
            "overflow": "hidden"
        }

        const subTitleStyle = {
            "font-weight": "thin",
            "color": "#555",
            "font-size": "20px",
            "text-align": "left",
            "margin-left": "10px"
        }

        const dateStyle = {
            "font-size": "15px",
            "font-family": "Arial Narrow, Arial, sans-serif",
            "text-align": "left"
        }

        return (
            <a href={this.props.item.doc} className="jumbotron user-container" style={memberCardStyle}>
                    <h6 style={dateStyle}>{this.props.item.date}</h6>
                    <h4 style={titleStyle}>{this.props.item.title}</h4>
                    <h5 style={subTitleStyle}>{this.props.item.subtitle}</h5>
                    <div>Stiahnuť</div>
            </a>
        );
    }
}

export default Entry;