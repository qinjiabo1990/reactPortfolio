import React from 'react';
import styles from '../css/skills.module.css'
import SkillCard from './SkillCard';
import logo from '../assets/images/mongodb-icon.svg'
import {appState} from '../App'

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

const Skills: React.FC<appState> = ({pageStatus}) => {
	return (
		<div className={pageStatus ? styles.skills_dark : styles.skills}>
			<h2 className={pageStatus ? styles.skillsTitle_dark : styles.skillsTitle}>SKILLS</h2>
			<div className={styles.skillIconList}>
				{projectList.map((d)=>(
					<SkillCard imgSrc={d.imgSrc} name={d.name} />
				))}
			</div>
		</div>
	)
}

export default Skills