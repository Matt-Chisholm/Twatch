import React, { Component } from 'react'

export default class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "172316044644-hnphun5bhls9phfikjnjdg9vd4hk2jfv.apps.googleusercontent.com",
                scope: 'email'
            }).then (() => {
                this.auth = window.gapi.auth2.getAuthInstance();
            });
        });
    }


    render() {
        return (
            <div>GoogleAuth</div>
        )
    }
}
