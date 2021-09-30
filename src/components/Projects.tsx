import React from 'react'
import ProjectCards from './ProjectCards'
import styles from '../css/projects.module.css'
import pt from '../assets/images/pt.png'
import {appState} from '../App'


const projectList = [
	{ image: pt, title: 'Healthy Pursuits Personal Training', link: 'https://healthypursuitspt.com/' },
	{ image: pt, title: 'Healthy Pursuits Personal Training', link: 'https://healthypursuitspt.com/' },
	{ image: pt, title: 'Healthy Pursuits Personal Training', link: 'https://healthypursuitspt.com/' },
]

const Projects: React.FC<appState> = ({pageStatus}) => {
	return (
		<div className={pageStatus ? styles.projects_dark : styles.projects}>
			<h2 className={pageStatus ? styles.projectsTitle_dark : styles.projectsTitle}>PROJECTS</h2>
			<div className={styles.projectList}>
				{projectList.map((d) => (
					<ProjectCards imgSrc={d.image} title={d.title} link={d.link} pageStatus={pageStatus} />
				))}
			</div>
		</div>
	)
}

export default Projects