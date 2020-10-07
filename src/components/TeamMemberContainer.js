import React from 'react';

class TeamMemberContainer extends React.Component {
    render() {
        const imgStyle = {
            "border-radius": "50%",
            "width": "100px",
            "height": "100px"
        };

        const memberCardStyle = {
            "width": "25%",
            "min-width": "350px",
            "max-width": "450px",
            "display": "inline-block",
            "margin": "10px",
            "-webkit-box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "-moz-box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)"
        };

        return (
            <div className="jumbotron user-container" style={memberCardStyle}>
                <img src={this.props.member.img} style={imgStyle}></img>
                <h2>{`${this.props.member.lastName},`}</h2>
                <h3>{this.props.member.firstName}</h3>
                <p>{this.props.member.position}</p>
            </div>
        );
    }
}

export default TeamMemberContainer;