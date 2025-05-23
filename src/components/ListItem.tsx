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
}

export default function ListItem({ todo, removeHandler, completeHandler}: ListItemProps) {
    const triggerDelete  = () => {
        removeHandler(todo);
    };

    const triggerComplete = () => {
        completeHandler(todo);
    };

    return (
        <div className={todo.isComplete ? 'active-box' : 'box'}>
            <div>{todo.text}</div>
            <div className="button-container">
                <button onClick={triggerComplete}>Complete</button>
                <button onClick={triggerDelete}>Remove</button>
            </div>
        </div>
    );
};
