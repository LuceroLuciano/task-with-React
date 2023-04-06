import { useState, useContext } from "react"
import {TaskContext} from '../context/taskContext'

// creando componente
function TaskForm() {

	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const { createTask } = useContext(TaskContext)
	

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(title, description)
		createTask({
			title, 
			description
		});
		setTitle('')
		setDescription('')
	};

	return (
		<div className="max-w-md mx-auto">
			<h1 className="text-2xl font-bold text-white mb-3">Crea tu taera</h1>
			<form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
				<input placeholder="Escribe tu tarea" onChange={(e) => setTitle(e.target.value)} value={title} className="bg-slate-300 p3 w-full mb-2" autoFocus></input>
				<textarea placeholder="Escribe la descripción de la tarea" onChange={e => setDescription(e.target.value)} value={description} className="bg-slate-300 p3 w-full mb-2"></textarea>
				<button className="bg-indigo-500 px-3 py-1 text-w
				">Guardar</button>
			</form>
		</div>
	)
}

export default TaskForm