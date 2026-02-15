---
title: Identity & Accountability Risks
description: Threats from inability to attribute actions, audit agent behavior, or establish clear responsibility.
sidebar_position: 6
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: identity-accountability-risks
  title: Identity & Accountability Risks
  description: Threats arising from inability to attribute actions to specific agents, maintain audit trails, or establish clear chains of responsibility in multi-agent or human-AI collaborative environments.
  capabilities:
    - reference-id: multi-agent-orchestration
      entries:
        - remarks: Multiple agents make attribution complex
    - reference-id: sdlc-meta-control
      entries:
        - remarks: Agents may modify audit and logging infrastructure
    - reference-id: autonomous-planning
      entries:
        - remarks: Autonomous decisions lack human decision points
  actors:
    - name: External Attacker
      type: External
      description: Exploits attribution gaps to hide malicious activity behind agent actions
    - name: AI Agent
      type: Internal
      description: Obscures its actions or operates without clear audit trails
    - name: Organisational Culture
      type: Systemic
      description: Uses agents as shields for responsibility, avoiding accountability for AI-assisted decisions
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0025 - Exfiltration via ML Inference API: Hidden data extraction"
        - remarks: "AML.T0047 - ML Model Inference API Access: Unauthorized model interactions"
        - remarks: "AML.T0057 - Evade Agent Monitoring: Bypassing observability controls"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI03 - Identity and Privilege Abuse: Dynamic delegation and cross-agent trust bypassing IAM controls"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM07 - System Prompt Leakage: Exposing permissions or architecture enabling privilege abuse"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "GOVERN 2.1 - Roles, responsibilities, and reporting lines for AI risk documented"
        - remarks: "GOVERN 2.3 - Executive leadership accountable for AI risk decisions"
---

<ThreatIntro fm={frontMatter} />

## Overview

When autonomous agents make decisions and take actions, traditional accountability models break down. Who is responsible when an agent introduces a bug: the developer who approved the prompt, the agent, the vendor, or the organization? Clear attribution and audit trails become critical.

## Specific Threats

### Attribution Impossibility

Unable to determine which agent (or human) made a specific change when multiple actors operate on the same codebase.

### Audit Trail Gaps

Agent actions not properly logged, making forensic analysis impossible after incidents.

### Responsibility Diffusion

No clear accountability when multiple agents collaborate—responsibility becomes distributed and deniable.

### Audit Log Manipulation

Agent with SDLC access modifies or deletes logs that record its actions.

### Identity Spoofing

Agent impersonates human developer or another agent to bypass controls.

### Temporal Attribution Failure

Unable to reconstruct timeline of who did what when—especially across asynchronous agent operations.

### Approval Chain Obscuration

Unclear whether human actually reviewed and approved agent actions, or approval was automated/bypassed.
