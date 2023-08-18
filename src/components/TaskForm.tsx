import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

//CSS
import styles from "./TaskForm.module.css"

// interface
import {ITask} from "../interfaces/Task";

interface Props {
    btnText: string 
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null; 
    handleUpdate?(id: number, title: string, content: string): void;
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {


  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {

    if(task) {
      setId(task.id);
      setTitle(task.title);
      setContent(task.content);
    }

  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) =>  {
    e.preventDefault();
    if(taskList) {
      if(handleUpdate){
        handleUpdate(id, title,content)
      } else {
        const id = Math.floor(Math.random() * 1000);
        const newTask: ITask = {id, title, content};
    
        setTaskList!([...taskList, newTask]);
    
        setTitle("");
        setContent("");
      }
    } 
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
    
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título</label>
            <input type="text" name='title' placeholder='De um Título a sua nota...' onChange={handleChange}  value={title}/>
        </div>

        <div className={styles.input_container}>
            <label htmlFor="content">Conteúdo</label>
            <input type="text" name='content' placeholder='Coloque sua nota...' onChange={handleChange} value={content}/>
        </div>

        <input type="submit" value={btnText} />

    </form>
  )
}

export default TaskForm