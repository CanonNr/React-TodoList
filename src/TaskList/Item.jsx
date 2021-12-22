import React from "react";
import "./Item.css";
class Item extends React.Component {
    constructor(item,index) {
        super(item,index)
        this.contentObject = null
        this.checkObject = null
        console.log(this.props.item)
        this.state = { 
            iscomplete : this.props.item.status,   // true 完成,false 未完成
            content: this.props.item.content 
        }
    }
    componentDidMount(){
        if(this.state.iscomplete){
            this.contentObject.style.textDecoration="line-through"  // 设置删除线
            this.checkObject.checked = true // 初始化时按照原状态渲染复选按钮
        }else{
            this.contentObject.style.textDecoration="auto"          // 取消删除线
        }
    }

    setContentObject(e){
        this.contentObject = e
    }
    
    setCheckObject(e){
        this.checkObject = e
    }

    completeFlag(e){
        if(e.target.checked){
            // 完成
            this.setState({iscomplete:true})    // 修改为未完成状态,用于渲染复选框
            this.contentObject.style.textDecoration="line-through"  // 设置删除线
        }else{
            // 取消完成
            this.setState({iscomplete:false})   // 设置完成状态,用于渲染复选框
            this.contentObject.style.textDecoration="auto"          // 取消删除线
        }
    }
    render() { 
        return ( 
            <div className="item">
                <div>
                    <input type="checkbox" 
                        onChange={e=>this.completeFlag(e)} 
                        ref={e=>{this.setCheckObject(e)}}/>
                    <span className="content" ref={e=>this.setContentObject(e)}>
                        {this.state.content}
                    </span>
                </div>
            </div>
         );
    }
}
 
export default Item;