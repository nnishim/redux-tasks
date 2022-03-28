import React from 'react'
import { TiBackspaceOutline } from "react-icons/ti";
import './Drawer.css'

function Drawer({children, active, close}) {
	return (
		<div className={active ? "trash active" : "trash"}>
			<button onClick={close} className="drawer_btn"><TiBackspaceOutline className='drawer_btn-icon'/></button>
			<h1 className='trash__title'>Удаленные задачи</h1>
			<div>
				{children}
			</div>
		</div>
	)
}

export default Drawer