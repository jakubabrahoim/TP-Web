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
            "background-color": "#1b1b1b"
        }

        const people = this.getPeopleList();

        return (
            <div className="jumbotron">
                <h3>Clenovia timu</h3>
                {people}
            </div>
        );
    }
}

export default PeopleContainer;