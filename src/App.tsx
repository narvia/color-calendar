import React from "react";

import {Calendar} from "."
import './css/theme-basic.css';

export default class App extends React.Component {
	componentDidMount() {
        console.log(typeof Calendar);
        console.log(Calendar);
        new Calendar({id: "#color-calendar"});
    }
    render() {
        return (
            <div className="App">
                <div id="color-calendar"></div>
            </div>
        );
    }
  
}