import React from 'react';

class AssignmentContainer extends React.Component {
    render() {
        const styles = {
            "background-color": "#f2f2f2",
            "margin-top": "0px",
            "margin-bottom": "0px",
            "border-radius": "0px"
        };

        const pwidth = {
            "text-align": "justify",
            "padding-left": "15%",
            "padding-right": "15%",
            "color": "black"
        };

        const headerStyle = {
            "color": "black",
            "font-weight": "bold"
        };

        return (
            <div className="jumbotron" style={styles} id="about">
                <h3 style={headerStyle}>NÁŠ PROJEKT</h3>
                <p style={pwidth}>
                    V našom projekte chceme vylepšiť existujúce webovú aplikáciu. Táto aplikácia slúži ako integrované vývojové prostredie (IDE) pre vývoj číslicových integrovaných systémov (ASIC) a jej úlohou je komplexne pokryť podporu vývoja číslicových integrovaných systémov. Ponúka nám rôzne funkcionality ako napríklad návrh a opis ASIC pomocou jazyka SystemVerilog, použitie existujúceho simulátora alebo aj kreslenie rôznych diagramov. Okrem tohto nám pomáha aj pri spolupráci a komunikácii s ostatnými vývojarmi a takisto pracujeme aj s GIT repozitármi. Našim cieľom je vylepšiť aktuálnu funkcionalitu, opraviť chyby z predošlých projektov a najmä zvýšiť kvalitu existujúcej aplikácie, keďže táto aplikácia má byť použiteľná v praxi.
                </p>
            </div>
        );
    }
}

export default AssignmentContainer;