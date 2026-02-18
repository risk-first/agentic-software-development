import React from 'react';
import styles from './styles.module.css'
import { usePluginData } from '@docusaurus/useGlobalData'

const Capability = ({ id, remarks }) => {
	return (
		<li><a href={`/capabilities/${id}`}>{id}</a>{remarks ? `: ${remarks}` : ''}</li>
	)
}

const Control = ({ article, permalink, remarks }) => {
	return (
		<li><a href={permalink}>{article}</a>{remarks ? `: ${remarks}` : ''}</li>
	)
}

const ExternalMapping = ({ referenceId, entries, mappingRef }) => {
	const title = mappingRef?.title || referenceId;
	const url = mappingRef?.url;
	
	return (
		<li>
			<strong>{url ? <a href={url} target="_blank" rel="noopener noreferrer">{title}</a> : title}</strong>
			{mappingRef?.version && <span style={{color: '#888', fontSize: '0.85em'}}> v{mappingRef.version}</span>}
			{entries && entries.length > 0 && (
				<ul>
					{entries.map((e, idx) => (
						<li key={idx}>{e.remarks}</li>
					))}
				</ul>
			)}
		</li>
	)
}

export default ({ fm }) => {
	const gemara = fm.gemara || {}
	const gemaraMetadata = usePluginData('gemara-metadata') || {};
	const mappingReferences = gemaraMetadata?.mappingReferences || {};
	
	// Get controls that mitigate this threat
	const threatId = gemara.id
	const allTags = usePluginData('category-listing') || {};
	const relatedDocs = threatId ? (allTags[threatId] || []) : [];
	const relatedControls = relatedDocs.filter(doc => doc.isAgenticControl);

	const capabilities = gemara.capabilities || []
	const externalMappings = gemara['external-mappings'] || []
	const actors = gemara.actors || []

	return (
		<div className={styles.threatIntro}>
			<p className={styles.description}>{gemara.description || fm.description}</p>

			{relatedControls.length > 0 && (
				<>
					<h3>Mitigating Controls</h3>
					<ul>
						{relatedControls.map((control, idx) => (
							<Control 
								key={idx} 
								article={control.title} 
								permalink={control.permalink}
							/>
						))}
					</ul>
				</>
			)}

			{capabilities.length > 0 && (
				<>
					<h3>Exploits Capabilities</h3>
					<ul>
						{capabilities.map((cap, idx) => (
							<Capability 
								key={idx} 
								id={cap['reference-id']} 
								remarks={cap.entries?.[0]?.remarks} 
							/>
						))}
					</ul>
				</>
			)}

			{actors.length > 0 && (
				<>
					<h3>Actors</h3>
					<ul>
						{actors.map((actor, idx) => (
							<li key={idx}>
								<strong>{actor.name}</strong> ({actor.type}): {actor.description}
							</li>
						))}
					</ul>
				</>
			)}

			{externalMappings.length > 0 && (
				<>
					<h3>External Framework Mappings</h3>
					<ul>
						{externalMappings.map((mapping, idx) => (
							<ExternalMapping 
								key={idx} 
								referenceId={mapping['reference-id']} 
								entries={mapping.entries}
								mappingRef={mappingReferences[mapping['reference-id']]}
							/>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
