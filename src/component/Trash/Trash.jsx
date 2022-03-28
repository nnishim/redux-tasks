import React from 'react'
import { FaTrash } from "react-icons/fa";
import { IoReturnUpBack } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { backTask, removeAll, removeTrash } from '../../store/reducers/task.reducer';
import './Trash.css'

function Trash() {
	const value = useSelector((state) => {
		return state.tasks.trash
	})
	const tasks = useSelector((state) => {
    return state.tasks.tasks
  })
	const dispatch = useDispatch();

	return (
		<ul className="trash__list">
			{
				value.map((trash, index) => {
					return(
						<li key={trash.id} className='trash__list-item'>
							<button className='return-btn' onClick={() => dispatch(backTask(index))}>
								<IoReturnUpBack className='return-btn__icon'/>
							</button>
							{trash.name}
							<button className='remove-btn' onClick={() => dispatch(removeTrash())}><FaTrash className='remove-btn__icon'/></button>
						</li>
					)
				})
			}
			<div className="remove-all">
				<button className='remove-all__btn' onClick={() => dispatch(removeAll())}>Очистить все</button>
			</div>
		</ul>
	)
}

export default Trash