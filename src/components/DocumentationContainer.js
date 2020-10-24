import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReadmeMarkdown from '../documentation/README.md';
// import DevEnvironmentMarkdown from '../documentation/dev-environment-setup.md';
// import DevStackMarkdown from '../documentation/dev-stack-installation.md';

class DocumentationContainer extends React.Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentWillMount() {
        fetch(ReadmeMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        const containerStyle = {
            "border-radius": "0px",
            "margin": "0px"
        }

        const headerStyle = {
            "font-weight": "bold",
            "text-align": "center"
        }

        const cardStyle = {
            "width": "75%",
            "height": "auto",
            "display": "block",
            "margin": "10px auto",
            "background-color": "white",
            "-webkit-box-shadow": "10px 10px 30px -22px rgba(0,0,0,0.75)",
            "-moz-box-shadow": "10px 10px 30px -22px rgba(0,0,0,0.75)",
            "box-shadow": "10px 10px 30px -22px rgba(0,0,0,0.75)",
            "text-align": "left",
            "padding": "60px 30px"
        };

        return (
            <div className="jumbotron" id="doc" style={containerStyle}>
                <h3 style={headerStyle}>Dokumentácia</h3>
                <div className="jumbotron" style={cardStyle}>
                    <ReactMarkdown>{this.state.markdown}</ReactMarkdown>
                </div>
            </div>
        );
    }
}

export default DocumentationContainer;