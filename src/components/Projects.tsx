import React from 'react'
import ProjectCards from './ProjectCards'
import styles from '../css/projects.module.css'

const Projects: React.FC = () => {
	return (
		<div className={styles.projects}>
			<h2 className={styles.projectsTitle}>PROJECTS</h2>
			<ProjectCards />
		</div>
	)
}

export default Projects