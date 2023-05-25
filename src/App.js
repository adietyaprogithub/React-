import React , {useState} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { addTodo } from './components/todoslice'


export default function App() {

const [inputvalue , setinputvalue] = useState("")
const todos = useSelector((state) => state.todos);
const dispatch = useDispatch();


const handlerchange =(e) =>{

  setinputvalue(e.target.value)
}

const handleradd = () => {
  if(inputvalue.trim() !== ''){
    dispatch(addTodo(inputvalue));
    setinputvalue('')
  }
}





  return (
    <div>
      <h1>TODO LIST</h1>
      <input type="text"  value={inputvalue}  onChange={handlerchange}/>
      <button onClick={handleradd}>+</button>

      <ul>
        {todos.map ((todo) => (
          <li key={todo.id}>{todo.title} </li>
        ))}
      </ul>
    </div>
  )
}
