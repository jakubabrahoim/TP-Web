import React from 'react';

import TeamMemberContainer from './TeamMemberContainer';
import TeamMemberData from '../data/team_members.json';

class PeopleContainer extends React.Component {
    getPeopleList() {
        return TeamMemberData.map(x => (
            <TeamMemberContainer member={x} />
        ));
    }

    render() {
        const containerStyle = {
            "border-radius": "0px",
            "margin": "0px"
        }

        const headerStyle = {
            "font-weight": "bold"
        }

        const people = this.getPeopleList();

        return (
            <div className="jumbotron" id="team" style={containerStyle}>
                <h3 style={headerStyle}>ČLENOVIA TÍMU</h3>
                {people}
            </div>
        );
    }
}

export default PeopleContainer;