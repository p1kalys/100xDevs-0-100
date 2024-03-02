import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {
  
  return (
    <>
      <Todo id={3} />
    </>
  )
}

function Todo({id}){
  const [todo, setTodo] = useState({});

  const getTodos = async () => {
    const res = await axios.get("https://sum-server.100xdevs.com/todo?id="+id);
    console.log(res.data.todo);
    setTodo(res.data.todo);
  };

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id="+id).then((res)=>{
      setTodo(res.data.todo);
    })
  },[])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App
