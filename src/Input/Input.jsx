import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value : ""
         }
    }
    /**
     * 实时的将输入框内容存在State中
     * @param {*} event 输入改变时间
     */
    inputChange(event){
        this.setState({value:event.target.value})
    }
    inputEnterEvent(event){
        if(event.keyCode == 13){
            if(this.state.value != null && this.state.value != ""){
               // todo 提交操作

               // 置空Value
               this.setState({value:""})
                console.log("提交成功")
            }else{
                alert("提交的任务内容不能为空")
            }
        }
    }
    render() { 
        return ( 
            <div>
                <input type="text" value = {this.state.value} onKeyUp={e=>this.inputEnterEvent(e)} onChange={e=>this.inputChange(e)} placeholder="请输入待办项" />
                <button onClick={(e)=>{
                    console.log(e)
                }}>提交</button>
            </div>
         );
    }
}
 
export default Input;