import react, {useState, useEffect} from "react";
import styles from './list.module.css'
import Task from "./task";
const List = ()=>{
    const [title,setTitle]=useState("");
    const [tasks,setTasks]=useState(localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title===""){
            return;
        }
        setTasks(tasks.concat([{title:title,finished:false}]));
        setTitle("");
    }
    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks));
    })
    const titleInput = (e) =>{
        setTitle(e.target.value);
    }
    const updateTasks=(key)=>{
        let newTasks = [...tasks];
        newTasks[key].finished=!newTasks[key].finished;
        setTasks(newTasks);
    }
    const deleteTask = (key)=>{
        let newTasks = [...tasks];
        newTasks.splice(key,1);
        setTasks(newTasks);
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title' className={styles.mx2}>Title : <input type='text' value={title} id='title' name='title' onChange={titleInput} />
                </label>
                {
                title===""?
                <input type='submit' value="Add Task" disabled/>:
                <input type='submit' value="Add Task" />
                }
            </form>
            {tasks.map((task,i)=>
                <Task key={i} title={task.title} finished={task.finished} finish={()=>updateTasks(i)} delete={()=>deleteTask(i)} />
            )}
        </div>
        )
}

export default List