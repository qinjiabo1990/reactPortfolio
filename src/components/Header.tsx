import React from 'react'
import Logo from '../assets/images/logo.svg'
import styles from '../css/header.module.css'

const Header: React.FC = () => {
	return (
		<div className={styles.header}>
			<div>GIT</div>
			<div>
				<img className={styles.logo} src={Logo} alt="logo" />
				<h1>Bob Qin</h1>
				<h2>Front-end developer</h2>
			</div>
			<div>
				<p>switch</p>
			</div>
			<div>
				<p>English | 中文</p>
			</div>
		</div>
	)
}

export default Header