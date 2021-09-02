import React, { Component } from 'react';
import App from './App';
import { Firebase, FirebaseContext } from './firebase';



class IndexApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <FirebaseContext.Provider value={new Firebase()}>
                <App />
            </FirebaseContext.Provider>
        );
    }
}

export default IndexApp;