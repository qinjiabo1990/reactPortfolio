import React from 'react'
import styles from '../css/projectCard.module.css'
import pt from '../assets/images/pt.png'

const ProjectCards: React.FC = () => {
	return (
		<div className={styles.card}>
			<img className={styles.cardImg} src={pt} alt="PT" />
			<h3 className={styles.cardTitle}>{`Healthy Pursuits Personal Training`}</h3>
			<p className={styles.seeLive}><a href={``}>SEE IT LIVE →</a></p>
		</div>
	)
}

export default ProjectCards