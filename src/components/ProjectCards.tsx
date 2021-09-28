import React from 'react'
import styles from '../css/projectCard.module.css'

interface projectCardProps {
	imgSrc: string,
	title: string,
	link: string,
}

const ProjectCards: React.FC<projectCardProps> = ({imgSrc, title, link }) => {
	return (
		<div className={styles.card}>
			<img className={styles.cardImg} src={imgSrc} alt={title} />
			<h3 className={styles.cardTitle}>{title}</h3>
			<p className={styles.seeLive}><a href={link}>SEE IT LIVE →</a></p>
		</div>
	)
}

export default ProjectCards