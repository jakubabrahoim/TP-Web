import React from 'react';

import TeamMemberContainer from './TeamMemberContainer'

class PeopleContainer extends React.Component {
    getPeopleList() {
        const people = [
            {
                firstName: "Adam",
                lastName: "Chmara",
                position: "Dodať FOTO",
                img: "assets/chmara.jpg"
            },
            {
                firstName: "Dominik",
                lastName: "Dancs",
                position: "TODO",
                img: "assets/DominikDancs.png"
            },
            {
                firstName: "Gergely",
                lastName: "Lengyel",
                position: "Dodať FOTO",
                img: "assets/lengyel.jpg"
            },
            {
                firstName: "Tadeáš",
                lastName: "Drahovský",
                position: "TODO",
                img: "assets/TadeasDrahovsky.png"
            },
            {
                firstName: "Kamil",
                lastName: "Lihan",
                position: "TODO",
                img: "assets/KamilLihan.png"
            },
            {
                firstName: "Karolína",
                lastName: "Trnovcová",
                position: "Dodať FOTO",
                img: "assets/363640-200.png"
            },
            {
                firstName: "Lukáš",
                lastName: "Mišaga",
                position: "TODO",
                img: "assets/LukasMisaga.png"
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