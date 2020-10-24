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
            "text-align": "left",
            "padding": "60px 30px"
        };

        var titleTextStyle = "125px";
        if (!this.props.methodology)
            titleTextStyle = "75px";

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

        const iconStyle = {
            "width": "20%",
            "display": "inline-block",
            "font-size": "100px",
            "vertical-align": "bottom",
            "margin": "0px 30px",
            "padding-right": "50px"
        };

        const descriptionStyle = {
            "width": "auto",
            "display": "inline-block"
        };

        const downloadStyle = {
            "text-align": "right"
        };

        if (!this.props.methodology)

            return (
                <a href={this.props.item.doc} className="jumbotron user-container" style={memberCardStyle}>
                    <span style={iconStyle}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                            <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                    <span style={descriptionStyle}>
                        <h6 style={dateStyle}>{this.props.item.date}</h6>
                        <h4 style={titleStyle}>{this.props.item.title}</h4>
                        <span>
                            <h6>Autor: </h6>
                            <h5 style={subTitleStyle}>{this.props.item.subtitle}</h5>
                        </span>
                        <div style={downloadStyle}>Stiahnuť</div>
                    </span>
                </a>
            );
        else
            return (
                <a href={this.props.item.doc} className="jumbotron user-container" style={memberCardStyle}>
                    <h6 style={dateStyle}>{this.props.item.date}</h6>
                    <h4 style={titleStyle}>{this.props.item.title}</h4>
                    <h5 style={subTitleStyle}>{this.props.item.subtitle}</h5>
                    <div style={downloadStyle}>Stiahnuť</div>
                </a>
            );

    }
}

export default Entry;