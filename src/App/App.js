import './App.css';
import Header from '../Header/Header.jsx';
import Input from '../Input/Input';
import TaskList from '../TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Input/>
      <TaskList/>
    </div>
  );
}

export default App;
