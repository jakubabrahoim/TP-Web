import React from 'react';

class TeamMemberContainer extends React.Component {
    render() {
        const imgStyle = {
            "border-radius": "50%",
            "width": "200px",
            "height": "200px",
            "object-fit": "cover",
            "margin": "20px",
            "border": "2px solid lightgrey"
        };

        const memberCardStyle = {
            "width": "25%",
            "min-width": "350px",
            "max-width": "450px",
            "display": "inline-block",
            "border-radius": "2%",
            "margin": "10px",
            "-webkit-box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "-moz-box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)"
        };

        const lastNameStyle = {
            "text-transform": "uppercase",
            "font-weight": "bolder",
            "color": "#333"
        }

        const firstNameStyle = {
            "font-weight": "thin",
            "color": "#555",
            "font-size": "20px"
        }

        const teamPositionStyle = {
            "font-size": "15px",
            "font-family": "Arial Narrow, Arial, sans-serif"
        }

        return (
            <div className="jumbotron user-container" style={memberCardStyle}>
                <img src={this.props.member.img} style={imgStyle} alt="Člen tímu"></img>
                <h2 style={lastNameStyle}>{`${this.props.member.lastName},`}</h2>
                <h3 style={firstNameStyle}>{this.props.member.firstName}</h3>
                <h6 style={teamPositionStyle}>{this.props.member.position}</h6>
            </div>
        );
    }
}

export default TeamMemberContainer;