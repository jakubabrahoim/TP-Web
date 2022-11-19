import React from 'react';

class TeamMemberContainer extends React.Component {
    render() {
        const imgStyle = {
            "border-radius": "50%",
            "width": "200px",
            "height": "200px",
            "object-fit": "cover",
            "margin": "-15px",
            "margin-bottom": "10px"
        };

        const memberCardStyle = {
            "width": "20%",
            "height": "450px",
            "display": "inline-block",
            "border-radius": "2%",
            "margin": "10px",
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
            "font-size": "15px"
        }

        const tasks = this.props.member.tasks.map((p) => (<h6 style={teamPositionStyle}>{p}</h6>));

        return (
            <div className="jumbotron user-container" style={memberCardStyle}>
                <img src={this.props.member.img} style={imgStyle} alt="Člen tímu"></img>
                <h2 style={firstNameStyle}>{`${this.props.member.firstName}`}</h2>
                <h3 style={lastNameStyle}>{this.props.member.lastName}</h3>
                <hr />
                {tasks}
            </div>
        );
    }
}

export default TeamMemberContainer;