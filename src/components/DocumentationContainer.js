import React from 'react';
import ReactMarkdown from 'react-markdown';

class DocumentationContainer extends React.Component {
    constructor() {
        super();
        this.state = { markdown: '' };
        this.followLink = this.followLink.bind(this);
    }

    componentWillMount() {
        fetch(process.env.PUBLIC_URL + "/documentation/README.md").then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    followLink(e) {
        const baseURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname.split("/")[1];
        // console.log(baseURL);
        // console.log(e.target.href);
        // console.log(e.target.href.includes(baseURL));
    
        if (e.target.href.includes(baseURL)) {
            e.preventDefault();
            const markdownFile = process.env.PUBLIC_URL + "/documentation/" + e.target.href.replace(baseURL, "").split("/")[1];
            fetch(markdownFile).then((res) => res.text()).then((text) => this.setState({ markdown: text }));
        }
    }
    
    linkRenderer(props) {
        const children = props.children || "";
        return (
          <a onClick={this.followLink} href={props.node.url} title={props.node.title}>{children}</a>
        );
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
                    <ReactMarkdown renderers={{ link: (props) => this.linkRenderer(props) }}>{this.state.markdown}</ReactMarkdown>
                </div>
            </div>
        );
    }
}

export default DocumentationContainer;