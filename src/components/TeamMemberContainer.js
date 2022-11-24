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
            "height": "540px",
            "min-width": "350px",
            "max-width": "450px",
            "display": "inline-block",
            "border-radius": "2%",
            "margin": "10px",
            "box-shadow": "10px 10px 28px -3px rgba(0,0,0,0.26)",
            "vertical-align": "top",
            "transition": "ease all .5s"
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

        const tasks = this.props.member.tasks.map((p) => (<h6 style={teamPositionStyle}>{p}</h6>));

        return (
            <div className="jumbotron user-container" style={memberCardStyle}>
                <img src={this.props.member.img} style={imgStyle} alt="Člen tímu"></img>
                <h2 style={lastNameStyle}>{`${this.props.member.lastName},`}</h2>
                <h3 style={firstNameStyle}>{this.props.member.firstName}</h3>
                <hr />
                {tasks}
            </div>
        );
    }
}

export default TeamMemberContainer;