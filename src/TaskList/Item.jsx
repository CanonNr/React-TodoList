import React from "react";
import "./Item.css";
class Item extends React.Component {
    constructor(item, index,parent) {
        super(item, index)
        this.contentObject = null
        this.checkObject = null
        this.delObject = null
        this.state = {
            index:this.props.index,
            iscomplete: this.props.item.status,   // true 完成,false 未完成
            content: this.props.item.content,
            parent: this.props.parent
        }
    }
    componentDidMount() {
        // 默认隐藏删除按钮
        this.delObject.style.display="none"

        if (this.state.iscomplete) {
            this.contentObject.style.textDecoration = "line-through"  // 设置删除线
            this.checkObject.checked = true // 初始化时按照原状态渲染复选按钮
        } else {
            this.contentObject.style.textDecoration = "auto"          // 取消删除线
        }
    }

    setContentObject(e) {
        this.contentObject = e
    }

    setCheckObject(e) {
        this.checkObject = e
    }
    setDelFlag(e) {
        this.delObject = e
    }

    completeFlag(e) {
        if (e.target.checked) {
            // 完成
            this.setState({ iscomplete: true })    // 修改为未完成状态,用于渲染复选框
            this.contentObject.style.textDecoration = "line-through"  // 设置删除线
        } else {
            // 取消完成
            this.setState({ iscomplete: false })   // 设置完成状态,用于渲染复选框
            this.contentObject.style.textDecoration = "auto"          // 取消删除线
        }
    }
    itemMouse(e,type){
        let action = type == "over" ? "" : "none"
        this.delObject.style.display=action
    }
    delItem(e){
        // 点击删除按钮
        this.state.parent.delItem(this.state.index)
    }
    render() {
        return (
            <div className="item" 
                onMouseOver={e=>this.itemMouse(e,"over")}
                onMouseOut={e=>this.itemMouse(e,"out")}
                >
                <input type="checkbox"
                    onChange={e => this.completeFlag(e)}
                    ref={e => { this.setCheckObject(e) }} />
                <span className="content" ref={e => this.setContentObject(e)}>
                    {this.state.content}
                </span>
                <span className="del" ref={e=>this.setDelFlag(e)} onClick={e=>this.delItem(e)}> ❎ </span>
            </div>
        );
    }
}

export default Item;