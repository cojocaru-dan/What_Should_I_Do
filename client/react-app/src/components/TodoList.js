export default function TodoList(props) {
    const retrievedData = props.todosdata;
    const setshowdata = props.setshowdata;
    const setshowbutton = props.setshowbutton;

    function handleHideData() {
        setshowdata(false);
        setshowbutton(true);
    }

    return (
        <ul>
            {retrievedData.map(todo => (
                <li>
                    <h2>{todo.title}</h2>
                    <h2>{todo.comment}</h2>
                    <h2>{todo.createdAt}</h2>
                </li> 
            ))}
            <button onClick={handleHideData}>Hide Todo's</button>
        </ul>
    )
}

