import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchComponent from "./SearchComponent.jsx";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchComponent/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));