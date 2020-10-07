import React from 'react';

class AssignmentContainer extends React.Component {
    render() {
        const styles = {
            "background-color": "#6d6d6d",
            "margin-top": "0px",
            "margin-bottom": "0px",
            "border-radius": "0px"
        };

        const pwidth = {
            "text-align": "justify",
            "padding-left": "15%",
            "padding-right": "15%",
            "color": "whitesmoke"
        };

        const headerStyle = {
            "color": "whitesmoke",
            "font-weight": "1500"
        };

        return (
            <div className="jumbotron" style={styles}>
                <h3 style={headerStyle}>Ciel projektu</h3>
                <p style={pwidth} id="about">
                Cieľom projektu je vylepšiť existujúcu webovú aplikáciu, ktorá má slúžiť ako integrované vývojové prostredie (IDE) pre vývoj číslicových integrovaných systémov (ASIC). Táto aplikácia má za úlohu komplexne pokrývať podporu vývoja číslicových integrovaných systémov, ako napríklad návrh a opis ASIC pomocou jazyka SystemVerilog alebo pomocou kreslenia rôznych diagramov, dokumentácia navrhnutého ASIC, použitie existujúceho simulátora alebo syntetizátora, kolaborácia a komunikácia s ostatnými inžiniermi, práca s Git repozitármi, použitie IP jadier a iné. Cieľom je rozšíriť súčasnú funkcionalitu o novú, ale aj zvýšiť kvalitu existujúcej funkcionality. Dôraz je kladený viac na kvalitu, ako kvantitu, nakoľko táto aplikácia má byť reálne použiteľná v praxi.
                </p>
            </div>
        );
    }
}

export default AssignmentContainer;