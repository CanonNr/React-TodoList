import './App.css';
import React from 'react';
import Header from '../Header/Header.jsx';
import Input from '../Input/Input';
import TaskList from '../TaskList/TaskList';
import Nine from '../Nine/Nine';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      isLoaded:false
    }
  }
  componentDidMount(){
    const _this = this
    axios.get('http://127.0.0.1:9000/item/get')
        .then(function (response) {
          console.log(response.data)
          _this.setState({
            taskList:response.data,
            isLoaded:true
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            isLoaded:false,
            error:error
          })
        })
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
    if (this.state.isLoaded){
      return (
          <div className="App">
            <Header />
            <Input parent={this} />
            <TaskList list={this.state.taskList} parent={this}/>
          </div>
      )
    }else{
      return (
          <div className="App">

          </div>
      )
    }
  }
}


export default App;
