import './App.css';
import React from 'react';
import Header from '../Header/Header.jsx';
import Input from '../Input/Input';
import TaskList from '../TaskList/TaskList';
import Nine from '../Nine/Nine';

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
    const arr = this.state.taskList.slice()
    arr.push({
      status:false,
      content:content
    })
    this.setState({"taskList":arr})
  }
  delItem(index){
    const arr = this.state.taskList.slice()
    delete arr[index]
    this.setState({"taskList":arr})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Input parent={this} />
        <TaskList list={this.state.taskList} parent={this}/>
      </div>
    );
  }
}


export default App;
