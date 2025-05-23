import { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem'

function App() {
    const [inputValue, setInputValue] = useState<string>("");
    const [todoList, setTodoList] = useState<string[]>([]);
    
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setInputValue("");
        setTodoList([...todoList, inputValue]);
    };

    const removeHandler = (todoString: string): void => {
        setTodoList([...todoList].filter(todo => todo !== todoString));
    };

    const toDos = todoList.map((todo: string) => <ListItem title={todo} removeHandler={removeHandler}/>);
    
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
                    {toDos}
                </div>
            </div>
        </>
    );
}

export default App
