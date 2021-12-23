import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, addTodo, deleteTask, editTask } from "./actions";
import { TTask, inputState, Tinput } from "./Interfaces";
import { RootState } from "./store";

const TodoList: FC = () => {
  // const [task, setTask] = useState<string>('');
  // const [day, setDay] = useState<number>(0);
  const [input, setInput] = useState<Tinput>({
    task: "",
    day: 0
  });
  const [id, setId] = useState<number>();
  const [show, setShow] = useState<boolean>(true);
  // const [list, setList] = useState<TTask[]>([])
  const dispatch = useDispatch();
  let task: TTask[] = useSelector((state: RootState) => {
    return state.TodoRed["task"];
  });

  const onChangeHanlder = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value }: inputState = e.currentTarget;
    setInput({
      ...input,
      [name]: value
    });
    dispatch(getData(input));
    // setTask()
  };

  const onSubmitAddHanlder = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    if (input.task !== "" && input.day !== 0) {
      const newTask: TTask = {
        task: input.task,
        day: input.day,
        id: task.length + 1
      };
      dispatch(addTodo(newTask));
      // setList([...list, newTask]);
      // setTask("");
      // setDay(0);
      setInput({
        task: "",
        day: 0
      });
      // const newTask: inputState = {
      //     task: input.task,
      //     day: input.day
      // }
      // setList({
      //     ...list,
      //     newTask
      // })
    }
  };

  const onSubmitEditHanlder = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    if (input.task !== "" && input.day !== 0) {
      const newEditedTask: TTask = {
        task: input.task,
        day: input.day,
        id: Number(id)
      };
      // const editedList = list.map((task) => {
      //     if (task.id === Number(id)) {
      //         task = newEditedTask;
      //     }
      //     return task;
      // });
      dispatch(editTask(newEditedTask));
      // console.log(editedList)
      // setList(editedList);
      setInput({
        task: "",
        day: 0
      });
      setShow(true);
    }
  };

  const delete_Task = (task_id: number) => {
    // setList(
    //     list.filter((task) => {
    //         return task.task !== taskname
    //     })
    // )
    dispatch(deleteTask(task_id));
  };
  const edit_Task = (taskID: number) => {
    const index: number = task.findIndex((task) => task.id === taskID);
    setId(taskID);
    setInput({
      task: task[index].task,
      day: task[index].day
    });
    setShow(false);
    setShow(false);
  };
  return (
    <div>
      <br />
      <div>
        <form>
          <input
            type="text"
            name="task"
            placeholder="Task"
            value={input.task}
            onChange={onChangeHanlder}
            // value={task}
            // onChange={(e: ChangeEvent<HTMLInputElement>): void => setTask(e.target.value)}
          />
          <br />
          <br />
          <input
            type="number"
            name="day"
            placeholder="Number"
            value={input.day}
            onChange={onChangeHanlder}
            // value={day}
            // onChange={(e: ChangeEvent<HTMLInputElement>): void => setDay(Number(e.target.value))}
          />
          <br />
          <br />
          {show ? (
            <input type="submit" onClick={onSubmitAddHanlder} value="Add" />
          ) : (
            <input type="submit" onClick={onSubmitEditHanlder} value="Edit" />
          )}
        </form>
      </div>
      <br />
      <br />
      <div className="todoList">
        {task.map((task: TTask, key: number) => {
          return (
            <div className="task" key={key}>
              <div className="content">
                <span>{task.task}</span>
                <span>{task.day}</span>
                <button
                  onClick={() => {
                    delete_Task(task.id);
                  }}
                >
                  Delete
                </button>
                <button onClick={() => edit_Task(task.id)}>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
