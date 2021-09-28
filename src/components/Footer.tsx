import React from 'react'
import styles from '../css/footer.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerSocial}>
				<a href="https://github.com/qinjiabo1990/" target="_blank"><FaGithub className={styles.footerIcon} /></a>
				<a href="https://www.linkedin.com/in/jiaboqin/" target="_blank"><FaLinkedin className={styles.footerIcon} /></a>
			</div>
			<p>Copyright © Bob Qin</p>
		</div>
	)
}

export default Footer