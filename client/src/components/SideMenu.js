import React from 'react';

export class SideMenu extends React.Component {
    render() {
        return (
            <aside className="side-menu">
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <span data-uk-icon="user"></span>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <span data-uk-icon="cloud-upload"></span>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <span data-uk-icon="github-alt"></span>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <span data-uk-icon="database"></span>
                </div>
            </aside>
        );
    }
}
