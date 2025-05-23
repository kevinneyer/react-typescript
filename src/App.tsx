import { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem'
interface ToDoInterface {
    id: number;
    text: string;
    isComplete: boolean;
}

function App() {
    const [inputValue, setInputValue] = useState<string>("");
    const [todoList, setTodoList] = useState<Array<ToDoInterface>>([]);
    
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setInputValue("");
        let value: ToDoInterface = {
            id: todoList.length + 1,
            text: inputValue,
            isComplete: false,
        }
        setTodoList([...todoList, value]);
    };

    const removeHandler = (arg: ToDoInterface): void => {
        setTodoList([...todoList].filter(todo => todo.id !== arg.id));
    };

    const completeHandler = (arg: ToDoInterface): void => {
        let completedItem = todoList.filter(todo => todo.id == arg.id)[0]
        completedItem.isComplete = true;
        setTodoList([...todoList].splice(arg.id-1, 1, completedItem));
    };

    // const toDos = todoList.map((todo: string) => <ListItem title={todo} removeHandler={removeHandler}/>);
    
    return (
        <>
            <div className="container">
                <h1 className="header">ToDo List</h1>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        className="input"
                        placeholder='Enter To Do...'
                        value={inputValue} 
                        onChange={inputHandler}
                    />
                    <input 
                        type="submit"
                        disabled={inputValue.length > 0 ? false : true}
                    />
                </form>
                <div className="todo-container">
                    {todoList.map((todo: ToDoInterface) => {
                        return <ListItem todo={todo} completeHandler={completeHandler} removeHandler={removeHandler}/>;
                    })}
                </div>
            </div>
        </>
    );
}

export default App
