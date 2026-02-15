import React from 'react';
import styles from './styles.module.css'
import { usePluginData } from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';

const Threat = ({ title, permalink }) => {
	return (
		<li><Link to={permalink}>{title}</Link></li>
	)
}

export default ({ fm }) => {
	const gemara = fm.gemara || {}
	const capabilityId = gemara.id

	// Get all docs tagged with this capability's id
	const allTags = usePluginData('category-listing') || {};
	const relatedDocs = allTags[capabilityId] || [];
	
	// Filter to only threats
	const relatedThreats = relatedDocs.filter(doc => doc.isAgenticThreat);

	const scope = gemara.scope
	const riskLevel = gemara['risk-level']

	return (
		<div className={styles.capabilityIntro}>
			<div className={styles.header}>
				<div className={styles.badges}>
					{scope && <span className={styles.scope}>{scope}</span>}
					{riskLevel && <span className={styles.riskLevel}>Risk: {riskLevel}</span>}
				</div>
				<p className={styles.description}>{gemara.description || fm.description}</p>
			</div>

			{relatedThreats.length > 0 && (
				<>
					<h3>Related Threats</h3>
					<ul>
						{relatedThreats.map((threat, idx) => (
							<Threat key={idx} title={threat.title} permalink={threat.permalink} />
						))}
					</ul>
				</>
			)}
		</div>
	)
}
