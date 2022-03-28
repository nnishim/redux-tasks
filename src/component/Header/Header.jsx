import React from 'react'
import { FaBattleNet, FaTrash } from "react-icons/fa";
import './Header.css'

function Header({trashBtn}) {
	return (
		<header className="header">
			<div className="logo"><FaBattleNet className='logo-icon'/></div>
			<div className="trash-block">
				<button className='header__trash-btn' onClick={trashBtn}><FaTrash className='btn-icon'/></button>
			</div>
		</header>
	)
}

export default Header