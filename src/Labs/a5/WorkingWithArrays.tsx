import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'

const API_BASE = process.env.REACT_APP_API_BASE;

const WorkingWithArrays = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const API = `${API_BASE}/a5/todos`;
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    interface Todo {
        id: number,
        title: string,
        description: string,
        due: string,
        completed: boolean,
    }

    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodos = async() => {
        const response = await axios.get(API);
        setTodos(response.data);
    };

    const removeTodo = async(todo: Todo) => {
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    }

    const createTodo = async() => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    }

    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const updateTitle =  async() => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };

    const postTodo = async() => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
 
    const deleteTodo = async(todo: Todo) => {
        try {
            const response =  await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const updateTodo = async(todo: Todo) => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

  return (
    
    <div>
        {errorMessage && (
            <div className="alert alert-danger mb-2 mt-2">
            {errorMessage}
            </div>
        )}
        <h3>Working with Arrays</h3>
        <br />
        {/* <h2>Working with Arrays</h2> */}
        {/* <input type="number" value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: Number(e.target.value) })}/>
            <br />
        <input type="text" value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}/>
            <br />
        <button className='btn btn-primary' onClick={() => createTodo()}>
            Create Todo
         </button>
         <br />
         <button className='btn btn-warning' onClick={() => updateTitle()}>
            Update Title
         </button> */}
         <textarea value={todo.description} typeof="text"
            onChange={(e) => setTodo({ ...todo,
            description: e.target.value })} />
            <br />
            <input value={todo.due} type="date"
            onChange={(e) => setTodo({
            ...todo, due: e.target.value })} />
            <br />
            <label>
            <input value={String(todo.completed)} type="checkbox"
            onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })} />
            Completed
            </label>
            <br />
            <button onClick={postTodo}> Post Todo </button>
            <button onClick={() => updateTodo(todo)}> Update Todo </button>

         <br />
        <ul>
        {todos.map((todo) => (
        <li key={todo.id} className='list-group-item'>
            <input checked={todo.completed}
            type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            {/* <p>{todo.due.toString()}</p> */}
            <button className='btn btn-danger' onClick={() => deleteTodo(todo)}>
                Delete
            </button>

            <button className='btn btn-warning' onClick={() => fetchTodoById(todo.id)}>
                Edit
            </button>
        </li>
        ))}
        </ul>
        <h4>Retrieving Arrays</h4>
        <a className='btn btn-primary' href={API}>
            Get Todos
        </a>

        <h4>Retrieving an Item from an Array by ID</h4>
        <input value={todo.id}
        onChange={(e) => setTodo({...todo,
            id: Number(e.target.value)
        })}
        />
        <a className='btn btn-primary' href={`${API}/${todo.id}`}>
            Get Todo by Id
        </a>
        <br />
        <h3>Filtering Array Items</h3>
        <a className='btn btn-primary' href={`${API}?completed=true`}>
            Get Completed Tasks
        </a>

        <h3>Creating new Items in an Array</h3>
        <a className='btn btn-primary' href={`${API}/create`}>
            Create todo
        </a>

        <h3>Deleting from an Array</h3>
        <a className='btn btn-primary' href={`${API}/${todo.id}/delete`}>
            Delete Todo with ID = {todo.id}
        </a>
        <br />
        {/* <h2>Working with Arrays</h2> */}
        <input type="number" value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: Number(e.target.value) })}/>
            <br />
        <input type="text" value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}/>
            <br />
        <h3>Updating an Item in an Array</h3>
        <a className='btn btn-primary' href={`${API}/${todo.id}/title/${todo.title}`} >
            Update Title to {todo.title}
        </a>
        <br /> <br />
        <input type="number" value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: Number(e.target.value) })}/>
            <br />
        <input type="text" value={todo.description}
            onChange={(e) => setTodo({
            ...todo, description: e.target.value })}/>
            <br />
        <h3>Updating an Item in an Array - description</h3>
        <a className='btn btn-primary' href={`${API}/${todo.id}/description/${todo.description}`} >
            Update description to {todo.description}
        </a>

        <br />
        <label>Updating an Item in an Array - Completed</label>
        <br />
        <input type="number" value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: Number(e.target.value) })}/>
            <br />
        <label >Completed </label>
        <input type="checkbox" id="comp" 
        onChange={(e) => setTodo({ ...todo,
            completed: e.target.checked })}
            checked={todo.completed}
        />
        
        <a className='btn btn-primary' href={`${API}/${todo.id}/completed/${todo.completed}`} >
            Update Copmleted to {String(todo.completed)}
        </a>
        <br/>
    </div>
  )
}

export default WorkingWithArrays