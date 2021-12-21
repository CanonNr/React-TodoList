import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="headerBox">
                <h1>Todo List</h1>
            </div>
         );
    }
}