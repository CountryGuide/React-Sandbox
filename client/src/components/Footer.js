import React from 'react';


class Footer extends React.Component {
    render () {
        return (
            <footer className="footer uk-padding-small">
                <a href="https://github.com/CountryGuide" target="_blank" rel="noopener noreferrer">
                    <span data-uk-icon="github" className="uk-margin-small-right uk-margin-small-left"></span>
                    <span>Github profile</span>
                </a>
            </footer>
        );
    }
}

export default Footer;
