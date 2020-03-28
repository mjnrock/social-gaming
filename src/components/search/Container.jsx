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
                <input
                    style={{
                        width: "calc(100% - 19px)",
                        height: "40px",
                        fontSize: "14pt",
                        padding: "4px",
                        paddingLeft: "10px",
                        color: "#00f",
                        border: "1px solid #00f",
                        borderRadius: "3px"
                    }}
                    type="text"
                    value={ this.state.value }
                    onChange={ this.onSearchChange.bind(this) }
                    placeholder="Find a Game"
                />
                <hr />
                <ResultGrid />
            </div>
        )
    };
};