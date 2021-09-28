import React from 'react';
import styles from '../css/skills.module.css'
import SkillCard from './SkillCard';
import logo from '../assets/images/mongodb-icon.svg'

const projectList = [
	{imgSrc: logo, name: 'mongodb'},
	{imgSrc: logo, name: 'mongodb'},
	{imgSrc: logo, name: 'mongodb'},
	{imgSrc: logo, name: 'mongodb'},
	{imgSrc: logo, name: 'mongodb'},
	{imgSrc: logo, name: 'mongodb'},
	{imgSrc: logo, name: 'mongodb'},
	{imgSrc: logo, name: 'mongodb'},
	{imgSrc: logo, name: 'mongodb'},
]

const Skills: React.FC = () => {
	return (
		<div className={styles.skills}>
			<h2 className={styles.skillsTitle}>SKILLS</h2>
			<div className={styles.skillIconList}>
				{projectList.map((d)=>(
					<SkillCard imgSrc={d.imgSrc} name={d.name} />
				))}
			</div>
		</div>
	)
}

export default Skills