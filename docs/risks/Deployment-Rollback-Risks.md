---
title: Deployment & Rollback Risks
description: Threats from autonomous deployments that cannot be safely reversed.
sidebar_position: 14
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: deployment-rollback-risks
  title: Deployment & Rollback Risks
  description: Threats arising from AI agents that deploy changes without containment controls, create irreversible states, or compromise the ability to rollback after incidents.
  capabilities:
    - reference-id: sdlc-meta-control
      entries:
        - remarks: Control over deployment pipelines
    - reference-id: execution
      entries:
        - remarks: Ability to trigger deployments
    - reference-id: autonomous-planning
      entries:
        - remarks: May plan deployments without human approval
  actors:
    - name: External Attacker
      type: External
      description: Compromises deployment infrastructure or injects malicious changes into pipelines
    - name: AI Agent
      type: Internal
      description: Prioritizes deployment speed over safety, creates irreversible states, or bypasses approval gates
    - name: Human Operator
      type: Internal
      description: Approves risky deployments without adequate review, sets weak approval gates, or skips rollback planning
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0010 - ML Supply Chain Compromise: Attacks on deployment pipeline"
        - remarks: "AML.T0054 - LLM Plugin Compromise: Compromising deployment tools"
        - remarks: "AML.T0056 - LLM Agentic Takeover: Unauthorized deployment actions"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI08 - Cascading Failures: Deployment failures amplifying into system-wide outage"
        - remarks: "ASI05 - Unexpected Code Execution: Agent-driven deployments bypassing controls"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM06 - Excessive Agency: Autonomous deployments without human approval"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "GOVERN 1.5 - Ongoing monitoring, review cadence, and responsibilities defined"
        - remarks: "GOVERN 1.7 - Safe decommissioning/phase-out procedures defined"
---

<ThreatIntro fm={frontMatter} />

## Overview

Autonomous deployment capabilities amplify both the benefits and risks of CI/CD. Agents can deploy faster than humans can review, and may create states that are difficult or impossible to reverse.

## Specific Threats

### Blast Radius Failure

Deployment failures spread beyond intended scope—no canary, no progressive rollout, no circuit breakers.

### Rollback Impossibility

Agent creates system states that cannot be safely reversed—schema migrations, data transformations, external API changes.

### Deployment Without Approval

Agent triggers production deployment without human review or approval gates.

### Blue-Green Corruption

Agent corrupts both blue and green environments, eliminating safe rollback target.

### State Migration Lock-In

Database or state migrations that prevent rollback without data loss.

### Cascading Deployment Failures

One deployment triggers others, creating chains of changes without human checkpoints.

### Insufficient Monitoring

Agent deploys without adequate observability, making issue detection difficult.

### Hotfix Bypass

Agent applies "emergency" fixes that bypass normal change control.
