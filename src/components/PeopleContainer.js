import React from 'react';

import TeamMemberContainer from './TeamMemberContainer'

class PeopleContainer extends React.Component {
    getPeopleList() {
        const people = [
            {
                firstName: "Adam",
                lastName: "Chmara",
                position: "TODO",
                img: "assets/363640-200.png"
            },
            {
                firstName: "Dominik",
                lastName: "Dancs",
                position: "TODO",
                img: "assets/363640-200.png"
            },
            {
                firstName: "Gergely",
                lastName: "Lengyel",
                position: "TODO",
                img: "assets/363640-200.png"
            },
            {
                firstName: "Tadeas",
                lastName: "Drahovsky",
                position: "TODO",
                img: "assets/363640-200.png"
            },
            {
                firstName: "Kamil",
                lastName: "Lihan",
                position: "TODO",
                img: "assets/363640-200.png"
            },
            {
                firstName: "Karolina",
                lastName: "Trnavcova",
                position: "TODO",
                img: "assets/363640-200.png"
            },
            {
                firstName: "Lukas",
                lastName: "Misaga",
                position: "TODO",
                img: "assets/363640-200.png"
            },
        ];

        return people.map(x => (
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