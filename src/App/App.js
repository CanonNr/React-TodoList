import './App.css';
import Header from '../Header/Header.jsx';
import Input from '../Input/Input';
import TaskList from '../TaskList/TaskList';

let taskList = [
  {
    "status":true,
    "content":"吃饭"
  },
  {
    "status":true,
    "content":"睡觉"
  },
  {
    "status":false,
    "content":"打豆豆"
  }
]
function App() {
  return (
    <div className="App">
      <Header/>
      <Input/>
      <TaskList list={taskList}/>
    </div>
  );
}

export default App;
