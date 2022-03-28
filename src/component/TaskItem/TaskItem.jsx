import React from 'react'
import './TaskItem.css'
import { FaTrash } from "react-icons/fa";

function TaskItem({value, remove}) {
	return (
		<li className='list-item'>
			<input type="checkbox" className='list-item__checkbox'/>
			<span className='list-item__item'>
				{value}
			</span>
			<span className='list-item__icon' onClick={remove}><FaTrash/></span>
		</li>
	)
}

export default TaskItem