import React from 'react'
import ProjectCards from './ProjectCards'
import styles from '../css/projects.module.css'
import pt from '../assets/images/pt.png'

const projectList = [
	{ image: pt, title: 'Healthy Pursuits Personal Training', link: 'https://healthypursuitspt.com/' },
	{ image: pt, title: 'Healthy Pursuits Personal Training', link: 'https://healthypursuitspt.com/' },
	{ image: pt, title: 'Healthy Pursuits Personal Training', link: 'https://healthypursuitspt.com/' },
]

const Projects: React.FC = () => {
	return (
		<div className={styles.projects}>
			<h2 className={styles.projectsTitle}>PROJECTS</h2>
			<div className={styles.projectList}>
				{projectList.map((d) => (
					<ProjectCards imgSrc={d.image} title={d.title} link={d.link} />
				))}
			</div>
		</div>
	)
}

export default Projects