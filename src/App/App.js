import './App.css';
import React from 'react';
import Header from '../Header/Header.jsx';
import Input from '../Input/Input';
import TaskList from '../TaskList/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        {
          "status": true,
          "content": "吃饭"
        },
        {
          "status": true,
          "content": "睡觉"
        },
        {
          "status": false,
          "content": "打豆豆"
        }
      ]
    }
  }

  getChildrenContent = (result,content) => {
    console.log(123)
    const arr = this.state.taskList.slice()
    arr.push({
      status:false,
      content:content
    })
    this.setState({"taskList":arr})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input parent={this} />
        <TaskList list={this.state.taskList} />
      </div>
    );
  }
}


export default App;
