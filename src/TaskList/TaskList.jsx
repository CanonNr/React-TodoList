import React from "react";
import Item from "./Item";
export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
         );
    }
}