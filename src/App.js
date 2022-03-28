import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Drawer from "./component/Drawer/Drawer";
import Header from "./component/Header/Header";
import TaskItem from "./component/TaskItem/TaskItem";
import Trash from "./component/Trash/Trash";
import { addTask, removeTask, tasksSlice, removeTrash } from "./store/reducers/task.reducer";

function App() {
  const [task, setTask] = useState("");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    return state.tasks.tasks
  })
  
  
  const submitHandler = (event) => {
    event.preventDefault();
    let obj = {
      name: task,
      id: Date.now(),
      complete: false,
    };
    dispatch(addTask(obj));
    setTask({name: ''})
  };

  const ToggleClass = () => {
    setActive(active => !active); 
  };
  
  return (
    <div className="App">
      <Header trashBtn={ToggleClass}  />
      <h1 className="title">Список задач</h1>
      <form className="form" onSubmit={submitHandler}>
        <input
          className="form-input"
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Название задачи"
          value={task.name}
        />
        <button className="btn">Добавить</button>
      </form>
      <ul className="todo-list">
        {tasks.map((task, index) => {
          return (
            <TaskItem key={task.id} value={task.name} remove={() => dispatch(removeTask(index))} />
          );
        })}
      </ul>
      <Drawer active={active} close={() => setActive(false)}>
          <Trash />
      </Drawer>
    </div>
  );
}

export default App;
