import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 输入框内容,默认为空
            value: ""
        }
    }

    // 输入框BOM
    textInput = null;

    // 组件渲染后调用
    componentDidMount() {
        // 默认设置默认光标选择输入框
        this.textInput.focus()
    }

    /**
     * 实时的将输入框内容存在State中
     * @param {*} event 输入改变时间
     */
    inputChange(event) {
        this.setState({ value: event.target.value })
    }

    /**
     * 输入完成回车提交消息
     * @param {*} event 
     */
    inputEnterEvent(event) {
        if (event.keyCode == 13) {
            this.submit()
        }
    }

    /**
     * 提交操作
     * @param {*} event 
     */
    submit() {
        if (this.state.value != null && this.state.value != "") {
            // 提交操作
            this.props.parent.getChildrenContent(this, this.state.value)
            // 置空Value
            this.setState({ value: "" })
        } else {
            alert("提交的任务内容不能为空")
        }
    }

    /**
     * 通过ref回调方式设置输入框BOM
     * @param {*} e Ref回调方法获取的BOM
     */
    setInputRef(e) {
        this.textInput = e
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.value}
                    onKeyUp={e => this.inputEnterEvent(e)}
                    onChange={e => this.inputChange(e)}
                    ref={e => this.setInputRef(e)}
                    placeholder="请输入待办项" />
                <button onClick={e => this.submit()}>提交</button>
            </div>
        );
    }
}

export default Input;