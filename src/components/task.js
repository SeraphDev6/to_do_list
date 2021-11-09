import react,{useState} from "react";
import styles from './task.module.css'

const Task = (props) =>{
    const [title,setTitle] = useState(props.title);
    const [finished,setFinished] = useState(props.finished);

    const handleCheck = (e) =>{
        props.finish();
        setFinished(!finished);
    }

    return(
        <div className={styles.taskDiv}>
            {finished?
            <div>
            <p className={styles.strike} >{title}</p>
            <input type="checkbox" onChange={handleCheck} checked={true} />
            </div>:
            <div>
            <p className={styles.unfinished}>{title}</p>
            <input type="checkbox" onChange={handleCheck} checked={false} />
            </div>
            }
            <button className={styles.delete} onClick={props.delete}>Delete</button>
        </div>
    )
}

export default Task;