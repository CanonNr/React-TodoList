import React from "react";
import Item from "./Item";
export default class TaskList extends React.Component {
    constructor(list) {
        super(list);
        this.state = {
            taskList : list.list
        }
    }
    getBomList(){
        let result = []
        console.log(this.state.taskList)
        this.state.taskList.map((item,index)=>{
            result[index] = <Item item={item} index={index} key={index}/>
        })
        return result
    }
    render() {
        return (
            <div>
                {this.getBomList()}
            </div>
        );
    }
}