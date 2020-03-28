import React from "react";

import Result from "./Result";

export default class ResultGrid extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            results: [
                {
                    id: 1,
                    title: "Game 1",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae laborum ad dolor sapiente voluptas fugiat enim architecto praesentium consequuntur eaque ducimus deserunt possimus sequi, quis at temporibus deleniti voluptates ab!"
                },
                {
                    id: 2,
                    title: "Game 2",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae laborum ad dolor sapiente voluptas fugiat enim architecto praesentium consequuntur eaque ducimus deserunt possimus sequi, quis at temporibus deleniti voluptates ab!"
                },
                {
                    id: 3,
                    title: "Game 3",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae laborum ad dolor sapiente voluptas fugiat enim architecto praesentium consequuntur eaque ducimus deserunt possimus sequi, quis at temporibus deleniti voluptates ab!"
                }
            ]
        };
    }
    
    render() {
        return (
            <div style={{
                margin: "5px",
                padding: "8px",
                border: "1px solid #000",
                borderRadius: "3px"
            }}>
                {
                    this.state.results.map((res, i) => (
                        <Result key={ res.id } title={ res.title } desc={ res.description } />
                    ))
                }
            </div>
        )
    };
};