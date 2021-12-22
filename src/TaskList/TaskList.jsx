import React from "react";
import Item from "./Item";
export default class TaskList extends React.Component {
    constructor(list,parent) {
        super(list,parent);
        this.state = {
            taskList : this.props.list,
            parent : this.props.parent
        }
    }
    getBomList(){
        let result = []
        this.props.list.map((item,index)=>{
            result[index] = <Item item={item} index={index} key={index} parent={this} />
        })
        return result
    }
    delItem(index){
        this.state.parent.delItem(index)
    }
    render() {
        return (
            <div>
                {this.getBomList()}
            </div>
        );
    }
}