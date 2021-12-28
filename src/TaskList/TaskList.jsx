import React from "react";
import Item from "./Item";
import axios from 'axios';

export default class TaskList extends React.Component {
    constructor(list,parent) {
        super(list,parent);
        console.log(this.props.list)
        this.state = {
            taskList : this.props.list,
            parent : this.props.parent
        }
    }
    getBomList(){
        // 只有获取成功才会填充任务项目组件
        let result = []
            this.state.taskList.map((item,index)=>{
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