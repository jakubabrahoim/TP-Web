import React from 'react';

class AboutTeam extends React.Component {
    render() {
        const containerStyle = {
            "border-radius": "0px",
            "background-color": "#DDD",
            "margin": "0px"
        }

        const headerStyle = {
            "font-weight": "bold"
        }

        const pwidth = {
            "text-align": "justify",
            "padding-left": "15%",
            "padding-right": "15%",
            "color": "#222"
        };

        return (
            <div className="jumbotron" style={containerStyle}>
                <h3 style={headerStyle}>O tíme</h3>
                <p style={pwidth}>
                    Náš tím sa skladá zo 7 ľudí, ktorí spolu absolvovali viacero predmetov a v rôznych kombináciách kolaborovali na spoločných projektoch. Už pred začatím semestra väčšine z nás bolo jasné, že spolu budeme pracovať aj na tímovom projekte. Mnohí sme sa poznali ešte pred nastúpením na vysokú školu a trávime spolu aj voľný čas. Dokážeme preto spolu efektívne komunikovať a poznáme naše vzájomné silné ale aj slabé stránky.
                </p>
                <p style={pwidth}>
                    Nakoľko sme absolvovali rôzne študijné programy na bakalárskom štúdiu (informatika, internetové technológie a informačná bezpečnosť), máme vedomosti z mnohých oblastí, ktoré nám pomôžu pri práci na projekte. V našich bakalárskych prácach sme sa venovali rozmanitým témam a nadobudnuté skúsenosti nám pomôžu s prácou na projektoch z viacerých oblastí. Jakub a David pracovali na webovom IDE pre HDL jazyky, Anna s Tomášom zase pracovali s technológiou blockchain v rôznych využitiach. Adam tvoril edukačnú hru v oblasti kybernetickej bezpečnosti, Marek pracoval na refaktorizácii a modularizácii existujúceho softvérového riešenia a Andrej sa venoval priestorovej vizualizácii dát z IoT zariadení.
                </p>
                <p style={pwidth}>
                    Mnohí z nás majú skúsenosti s prácou v agilnom prostredí, nakoľko väčšina tímu popri štúdiu pracuje. Tieto skúsenosti by sme samozrejme aplikovali pri procese tvorby projektu a tým zefektívnili náš pracovný postup. Jakub, Adam a David pracujú ako vývojári webových technológií, Marek ako backend developer a Andrej pracuje v oblasti informačnej bezpečnosti.
                </p>
                <p style={pwidth}>
                    Záujmy členov tímu sú rôznorodé.  Od UX/UI dizajnu, ktorému sa venuje Anna, cez frontend u Jakuba a Adama až po backend, s ktorým má najviac skúseností Marek. Tomáš toho zase vie veľa o technológii blockchain, David o databázach a Andrej o IoT zariadeniach či informačnej bezpečnosti
                </p>
                <p style={pwidth}>
                    Kombinované znalosti:<br></br>
                    Frontend - JavaScript/TypeScript, React.js, Vue.js, Angular, Laravel, TailwindCSS, Material UI <br></br>
                    Backend - C# / .NET Core, Django, Node.js, Spring Boot<br></br>
                    Ostatné - Ethereum, Solidity, UI/UX, IoT, Mongo, PostgreSQL, Firebase, Docker<br></br>
                </p>

            </div>
        );
    }
}

export default AboutTeam;