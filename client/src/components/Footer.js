import React from 'react';


class FooterComponent extends React.Component {
    render () {
        return (
            <footer className="footer uk-padding-small">
                <a href="https://github.com/CountryGuide"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="uk-flex uk-flex-middle">
                    <span data-uk-icon="github" className="uk-margin-small-right uk-margin-small-left"></span>
                    <span>Github</span>
                </a>
            </footer>
        );
    }
}

export const Footer = FooterComponent;
