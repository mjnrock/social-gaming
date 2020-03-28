import React from "react";

export default class Result extends React.Component {    
    render() {
        return (
            <div style={{
                margin: "5px",
                padding: "8px",
                border: "1px solid #000",
                borderRadius: "3px"
            }}>
                <div>
                    <h4>{ this.props.title }</h4>
                    <div>{ this.props.desc }</div>
                </div>
            </div>
        )
    };
};