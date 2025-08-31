import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null)
  const handleAdd = () => {
    alert("Todo added")
    setTodos([...todos, { todo, isCompleted: false }])
    setTodo("")
  }
  
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const startEditing = (index) => {
    setIsEditing(true);
    setCurrentTodoIndex(index);
    setTodo(todos[index].todo); // preload the current todo text
  };
  const handleUpdate = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].todo = todo;
    setTodos(updatedTodos);
    setIsEditing(false);
    setCurrentTodoIndex(null);
    setTodo("");
  };
  const handleDelete = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };
  

  return (
    <>
      <Navbar onTaskClick={() => setShowSidebar(true)} />
      {showSidebar && (
  <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 z-50 overflow-y-auto">
    <h2 className="text-xl font-bold mb-4">All Tasks</h2>
    {todos.length === 0 ? (
      <p>No tasks yet</p>
    ) : (
      todos.map((task, i) => (
        <div key={i} className="mb-2 border-b pb-2">
          <p className="font-semibold">{i + 1}. {task.todo}</p>
        </div>
      ))
    )}
    <button
      onClick={() => setShowSidebar(false)}
      className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
    >
      Close
    </button>
  </div>
)}

      <div className=" flex items-center justify-center name font-bold text-3xl mt-6">
        E - Todo
      </div>
      <div className="container mx-auto px-4 py-6 max-w-screen-md">


        <div className="class flex  items-center justify-center ">
          <h1 className='font-semibold text-lg text-white mt-3'>Your Todos</h1>
        </div>
        <div>
          <div className="ml-4 sm:ml-16 mt-5 font-bold text-lg">Add Todo</div>
<div className='flex flex-col sm:flex-row items-center gap-4 ml-4 sm:ml-16'>
          <input
  onChange={handleChange}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  }}
  value={todo}
  type="text"
  placeholder="Add a todo"
  className="w-full sm:w-3/4  border-2 border-black rounded-lg h-10 mt-5 sm:ml-16 ml-2"
/>

          <button onClick={handleAdd} className= 'w-full sm:w-20 bg-blue-600 text-white rounded-lg h-10  ml-3 mt-5'>Add</button>
        </div>
        </div>
        <div className="todos ml-10 font-roboto font-bold mt-5">My Todos</div>
        <div className="overflow-y-auto max-h-[60vh] px-4">

        {todos.map((item, index) => (
  <div key={index} className="flex items-center justify-between ml-10 mt-5">
    {isEditing && currentTodoIndex === index ? (
      <input
        type="text"
        value={todo}
        onChange={handleChange}
        className="border-2 border-black rounded-lg w-3/4 h-10"
      />
    ) : (
      <span>{index + 1}. {item.todo}</span>
    )}
    <div>
      {isEditing && currentTodoIndex === index ? (
        <button
          onClick={() => handleUpdate(index)}
          className="bg-green-600 text-white rounded-lg h-10 w-20 ml-3"
        >
          Save
        </button>
      ) : (
        <>
          <button
            onClick={() => startEditing(index)}
            className="bg-blue-600 text-white rounded-lg h-10 w-20 ml-3"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(index)}
            className="bg-red-600 text-white rounded-lg h-10 w-20 ml-3"
          >
            Delete
          </button>
        
        </>
      )}
    </div>
  </div>
))}
</div>



       
       


      </div>

    </>
  )
}

export default App
