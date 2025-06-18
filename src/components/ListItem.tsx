import '../ListItem.css';

interface ToDoInterface {
    id: number;
    text: string;
    isComplete: boolean;
}

interface ListItemProps {
    todo: ToDoInterface;
    removeHandler: (arg: ToDoInterface) => void;
    completeHandler: (arg: ToDoInterface) => void;
    showButtons: boolean;
}

export default function ListItem({ todo, removeHandler, completeHandler, showButtons}: ListItemProps) {
    const triggerDelete  = () => {
        removeHandler(todo);
    };

    const triggerComplete = () => {
        completeHandler(todo);
    };

    const isComplete = () => {
        return todo.isComplete;
    }

    return (
        <div className={todo.isComplete ? 'active-box' : 'box'}>
            <div>{todo.text}</div>
            {showButtons ? 
                <div className="button-container">
                    <button disabled={isComplete()} onClick={triggerComplete}>Complete</button>
                    <button onClick={triggerDelete}>Remove</button>
                </div>
                : 
                null
            }
        </div>
    );
};
