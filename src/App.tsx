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
    const [incrementalId, setIncrementalId] = useState<number>(1);
    const [completedList, setCompletedList] = useState<Array<ToDoInterface>>([]);
    
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setInputValue("");
        setIncrementalId(incrementalId + 1);
        let value: ToDoInterface = {
            id: incrementalId,
            text: inputValue,
            isComplete: false,
        };
        setTodoList([...todoList, value]);
    };

    const removeHandler = (arg: ToDoInterface): void => {
        setTodoList([...todoList].filter(todo => todo.id !== arg.id));
    };

    const completeHandler = (arg: ToDoInterface): void => {
        let completedItem = todoList.filter(todo => todo.id == arg.id)[0]
        completedItem.isComplete = true;
        setTodoList([...todoList].filter(todo => todo.isComplete == false));
        setCompletedList([...completedList, completedItem])
    };
    
    return (
        <>
            <div className="container">
                <h1 className="header">My ToDos</h1>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        className="input"
                        placeholder='Enter To Do...'
                        value={inputValue} 
                        onChange={inputHandler}
                    />
                    <input 
                        className="button"
                        type="submit"
                        disabled={inputValue.length > 0 ? false : true}
                    />
                </form>
                <div className="todo-container">
                    <div className="to-complete">
                        <h3>To Complete</h3>
                        {
                            todoList.map((todo: ToDoInterface) => {
                                return <ListItem todo={todo} completeHandler={completeHandler} removeHandler={removeHandler} showButtons={true}/>;
                            })
                        }
                    </div>
                    <div className="todo-column">
                       <h3>Finished</h3> 
                        {
                            completedList.map((todo: ToDoInterface) => {
                                return <ListItem todo={todo} completeHandler={completeHandler} removeHandler={removeHandler} showButtons={false}/>;
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default App
