import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css'

const DocItem = ({ title, description, href }) => {
	return (
		<article className={styles.docItem}>
			<Link to={href}>
				<h3>{title}</h3>
			</Link>
			<p className={styles.description}>{description}</p>
		</article>
	);
}

export default function DocList({ items }) {
	if (!items || items.length === 0) {
		return <p><em>No documents</em></p>;
	}

	return (
		<div className={styles.docList}>
			{items.map((item, idx) => (
				<DocItem 
					key={idx} 
					title={item.title} 
					description={item.description} 
					href={item.href} 
				/>
			))}
		</div>
	);
}
