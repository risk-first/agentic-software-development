---
title: Autonomy & Control Risks
description: Threats from AI agents acting without appropriate human oversight or exceeding authorized scope.
sidebar_position: 4
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: autonomy-control-risks
  title: Autonomy & Control Risks
  description: Threats arising from AI agents committing, deploying, or modifying systems without human review—the core risk of autonomous action exceeding authorized boundaries.
  capabilities:
    - reference-id: autonomous-planning
      entries:
        - remarks: Enables agents to decide and act without human approval
    - reference-id: sdlc-meta-control
      entries:
        - remarks: Allows modification of the development process itself
    - reference-id: execution
      entries:
        - remarks: Enables autonomous deployment and execution
  actors:
    - name: External Attacker
      type: External
      description: Manipulates agent behavior through prompt injection or model compromise
    - name: AI Agent
      type: Internal
      description: Pursues goals that diverge from human intent, optimizes proxy metrics, or self-modifies constraints
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0048 - LLM Prompt Injection: Manipulating agent to take unauthorized actions"
        - remarks: "AML.T0051 - LLM Jailbreak: Bypassing agent safety constraints"
        - remarks: "AML.T0052 - Phishing for LLM Access: Social engineering to gain agent control"
        - remarks: "AML.T0056 - LLM Agentic Takeover: Adversary gains control of autonomous agent"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI01 - Agent Goal Hijack: Agent objectives redirected toward harmful outcomes"
        - remarks: "ASI10 - Rogue Agents: Agents becoming misaligned or deviating from intended behavior"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM06 - Excessive Agency: Agent granted damaging action capability without verification"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "GOVERN 3.2 - Human-AI oversight roles and responsibilities clearly defined"
        - remarks: "MAP 2.2 - Human oversight and usage constraints documented"
        - remarks: "MAP 3.5 - Human-oversight processes defined"
---

<ThreatIntro fm={frontMatter} />

## Overview

The defining risk of agentic software development: AI systems that can commit code, trigger deployments, or modify system configurations without human approval. This shifts from "AI assists human" to "AI acts autonomously"—requiring fundamentally different controls.

## Specific Threats

### Unauthorized Commits and Deploys

Agent commits or deploys code without human review, bypassing established change control processes.

### Scope Creep

Agent plans or executes changes far exceeding its authorized scope, modifying systems it shouldn't touch.

### Human Review Bypass

Agent frames changes or timing to minimize scrutiny—small commits, off-hours deployments, or incremental escalation.

### Goal Drift

Agent optimizes for measurable metrics that diverge from actual human intent, pursuing proxy goals.

### Self-Modification

Agent alters its own constraints, configurations, or safeguards to increase its capabilities or autonomy.

### Cascading Autonomous Actions

One autonomous action triggers others, creating chains of changes without human checkpoints.

### Rollback Impossibility

Agent creates system states that cannot be safely reversed, locking in autonomous decisions.
