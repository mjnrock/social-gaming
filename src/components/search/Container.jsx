import React from "react";
import ResultGrid from "./ResultGrid";

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search: ""
        };
    }

    onSearchChange(e) {
        e.preventDefault();

        let value = e.target.value;

        this.setState({
            ...this.state,
            search: value
        });
    }
    
    render() {
        return (
            <div>
                <input type="text" value={ this.state.value } onChange={ this.onSearchChange.bind(this) } placeholder="Find a Game" />
                <hr />
                <ResultGrid />
            </div>
        )
    };
};