import '../ListItem.css';

interface ListItemProps {
    title: string;
    removeHandler: (todoString: string) => void;
}
export default function ListItem({ title, removeHandler}: ListItemProps) {
    const triggerDelete  = () => {
        removeHandler(title);
    };

    return (
        <div className="box">
            <div>{title}</div>
            <div className="delete" onClick={triggerDelete}>X</div>
        </div>
    );
};
