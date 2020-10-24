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
            <div className="jumbotron" id="team" style={containerStyle}>
                <h3 style={headerStyle}>O tíme</h3>
                <p style={pwidth}>
                    Náš tím prináša zmes rôznych znalostí, zručností a praxe v rôznych oblastiach, nadobudnutých nielen v rámci, ale aj mimo našej univerzity. Tento široký obzor znalostí dokážeme uplatniť v programovaní, manažmente projektov, tvorbe architektúry softvéru a vlastných hardvérových riešení, databázových a webových technológiách, informačnej bezpečnosti, sieťovej architektúre a tiež vo svete IoT zariadení. S prácou v tíme máme všetci skúsenosti, vieme sa ako tím zorganizovať, vieme sa dohodnúť a dokážeme využívať dostupný softvér na manažment úloh ako aj časové rozvrhnutie projektu. K tomuto prispievajú aj skúsenosti s kolaboratívnymi nástrojmi, či už ide o zabezpečenie efektívnej komunikácie, návrh a architektúru projektu, správu verzií kódu, alebo zdieľanie dokumentácie a podkladov k projektu. (Git, Trello / Jira, Slack / Mattermost, Google docs, Google meet, TFS...).
                </p>
                <p style={pwidth}>
                    Väčšina z nás má roky praxe v konkrétnych oblastiach IT, iní sa zase venujú moderným technológiám a stále objavujú lepšiu, rýchlejšiu alebo bezpečnejšiu technológiu, ktorá bude novým trendom. Práve tieto rôzne záujmy, skúsenosti a roky praxe v rôznych odvetviach IT považujeme za silnú stránku nášho tímu. Faktom je, že sa venujeme rôznym technológiám, ktoré dokážeme medzi sebou prepojiť a tým spoločne vytvoriť výsledný fungujúci produkt. Samozrejme, niektoré naše znalosti a skúsenosti sa aj prekrývajú, vďaka čomu si môžeme navzájom pomáhať, učiť sa, spoločne riešiť zložité úlohy a vynájsť sa aj v nečakaných situáciách. Viacerí členovia nášho tímu majú dlhoročné skúsenosti s prácou s rôznymi webovými technológiami, ako PHP, JavaScript, NodeJS, TypeScript, REST, GraphQL a tiež s prácou v rozličných webových frameworkoch, ako VueJS, React alebo Laravel. Okrem toho máme všetci skúsenosti s databázami (MySQL, PostgreSQL, Redis, MongoDB), niektorí s nimi pracovali v rámci školských projektov, iní s nimi zase pracujú už niekoľko rokov.
                </p>
                <p style={pwidth}>
                    Niektorí z nás sa okrem vývoju softvéru na bežné počítače (high-level programming) zaoberali aj tvorením a programovaním vlastných hardvérových zariadení, či už na platforme Arduino alebo úplne vlastnej. To znamená, že máme skúsenosti aj s prácou priamo s hardvérom, ako aj tvorbou softvéru v jazyku C pre mikrokontroléry.
                </p>
                <p style={pwidth}>
                    Adam vyvíja webové aplikácie, tvorí mikroslužby a taktiež prispieva do open-source projektov. Dominik sa zameriava skôr na tvorbu back-endov, administráciu Linuxových systémov, bezpečnosť, a vo voľnom čase vývoj vlastného hardvéru (PCB design, mikrokontroléry, ...). Gergely zatiaľ nenazbieral skúsenosti z praxe, avšak je veľmi šikovný v programovaní ako aj v hľadaní riešení na zložité problémy. Kamil sa tiež venuje webom, ale aj tvorbe mobilných aplikácií či správe databáz. Karolína má mnohé skúsenosti s rôznymi programovacími jazykmi, pričom využíva najviac Python, C# a C++. Lukáš sa venuje hlavne vývoju back-endov a databázam, ako aj vývoju softvéru pre IoT. Tadeáš sa zameriava hlavne na machine learning a active learning, kde pracuje s jazykom Python, ale vyvíjal aj weby v PHP. Okrem toho máme všetci skúsenosti s prácou v Linuxe, databázami a tvorbou aj využívaním REST API.
                </p>
                <p style={pwidth}>
                    Pre naše vybrané témy sú prínosné aj získané informácie a skúsenosti z predmetov: Operačné systémy, Databázové systémy, Mobilné technológie a aplikácie a Princípy softvérového inžinierstva, ktoré sme nabrali už počas bakalárskeho štúdia. Tiež nám budú nápomocné ďalšie predmety, ktorým sa budeme venovať počas inžinierskeho štúdia: Bezpečnosť v internete, Testovanie softvéru a Základy kryptografie.
                </p>

            </div>
        );
    }
}

export default AboutTeam;