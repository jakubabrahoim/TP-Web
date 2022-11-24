import React from 'react';
import ReactMarkdown from 'react-markdown';

class DocumentationContainer extends React.Component {
    constructor() {
        super();
        this.state = { markdown: '' };
        this.followLink = this.followLink.bind(this);
    }

    componentWillMount() {
        fetch(process.env.PUBLIC_URL + "/docs/markdown/README.md").then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    followLink(e) {
        const baseURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname.split("/")[1];
        // console.log(e);
        // console.log(baseURL);
        // console.log(e.currentTarget.href);
        // console.log(e.currentTarget.href.includes(baseURL));
    
        if (e.currentTarget.href.includes(baseURL)) {
            e.preventDefault();
            const targetURL = e.currentTarget.href.replace(baseURL, "").split("/")[1];
            const markdownFile = process.env.PUBLIC_URL + "/docs/markdown/" + targetURL;

            if (targetURL.startsWith('#')) {
                e.preventDefault();
                console.log('Relative URL: ' + targetURL);
            }
            else 
                fetch(markdownFile).then((res) => res.text()).then((text) => this.setState({ markdown: text }));
        }
    }
    
    linkRenderer(props) {
        const children = props.children || "";
        return (
          <a onClick={this.followLink} href={props.node.url} title={props.node.title}>{children}</a>
        );
    }

    imageRenderer(props) {
        console.log(props);
        return(
            <img style={{width: "100%", height: "auto"}} src={process.env.PUBLIC_URL + "/docs/markdown/" + props.src} alt={props.alt} />
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
                <h3 style={headerStyle}>Softvérová dokumentácia</h3>
                <div className="jumbotron" style={cardStyle}>
                    <ReactMarkdown renderers={{ link: (props) => this.linkRenderer(props), image: (props) => this.imageRenderer(props) }}>{this.state.markdown}</ReactMarkdown>
                </div>
            </div>
        );
    }
}

export default DocumentationContainer;