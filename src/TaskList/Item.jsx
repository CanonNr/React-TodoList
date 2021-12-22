import React from "react";
import "./Item.css";
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.contentObject = null
        this.state = { 
            iscomplete : false
        }
    }
    
    setContentObject(e){
        this.contentObject = e
    }

    completeFlag(e){
        if(e.target.checked){
            // 完成
            this.setState({iscomplete:true})    // 修改为未完成状态,用于渲染复选框
            this.contentObject.style.textDecoration="line-through"  // 设置删除线
        }else{
            // 取消完成
            this.setState({iscomplete:false})   // 设置完成状态,用于渲染复选框
            this.contentObject.style.textDecoration="auto"          // 曲线删除线
        }
    }
    render() { 
        return ( 
            <div className="item">
                <div>
                    <input type="checkbox" onChange={e=>this.completeFlag(e)}/>
                    <span className="content" ref={e=>this.setContentObject(e)}>
                        一个代办的任务
                    </span>
                </div>
            </div>
         );
    }
}
 
export default Item;