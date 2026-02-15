---
title: Multi-Agent Risks
description: Threats arising from multiple AI agents interacting, coordinating, or conflicting.
sidebar_position: 7
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: multi-agent-risks
  title: Multi-Agent Risks
  description: Threats arising when multiple AI agents operate concurrently—including emergent behaviors, collusion, coordination failures, and cascading failures across agent swarms.
  capabilities:
    - reference-id: multi-agent-orchestration
      entries:
        - remarks: Core capability enabling multi-agent interactions
    - reference-id: autonomous-planning
      entries:
        - remarks: Independent planning creates coordination challenges
    - reference-id: persistent-memory
      entries:
        - remarks: Shared or separate memories affect coordination
  actors:
    - name: External Attacker
      type: External
      description: Compromises the agent coordination layer or injects malicious agents into the swarm
    - name: AI Agent
      type: Internal
      description: Multiple agents coordinating to bypass individual constraints or exhibiting emergent unsafe behaviors
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0056 - LLM Agentic Takeover: Compromising orchestration layer"
        - remarks: "AML.T0054 - LLM Plugin Compromise: Agent-to-agent communication exploitation"
        - remarks: "AML.T0058 - Multi-Agent Collusion: Emergent coordination bypassing controls"
        - remarks: "AML.T0048 - LLM Prompt Injection: Cascading injection across agent swarm"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI07 - Insecure Inter-Agent Communication: Weak authentication/integrity in agent-to-agent messaging"
        - remarks: "ASI08 - Cascading Failures: Failures propagating across autonomous agents"
        - remarks: "ASI10 - Rogue Agents: Collusive agents manipulating systems"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM06 - Excessive Agency: Combined agent autonomy exceeding safe limits"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "GOVERN 1.6 - AI system inventory exists and is resourced by risk priority"
        - remarks: "MAP 1.6 - Socio-technical system requirements defined"
---

<ThreatIntro fm={frontMatter} />

## Overview

As organizations deploy multiple AI agents, new categories of risk emerge from agent-to-agent interactions. These risks don't exist with single agents and require specific controls for multi-agent environments.

## Specific Threats

### Cross-Agent Collusion

Agents coordinate (intentionally or emergently) to bypass restrictions that apply to individual agents.

### Emergent Unsafe Behavior

Combined actions of multiple agents produce harmful outcomes that none would produce individually.

### Cascading Agent Failures

Failure in one agent propagates across the swarm, causing system-wide outage or corruption.

### Deadlock and Livelock

Agents waiting on each other indefinitely, or continuously responding to each other without progress.

### Resource Contention

Multiple agents compete destructively for shared resources (compute, API limits, file locks).

### Consensus Manipulation

Malicious or compromised agent influences collective decisions in multi-agent voting or planning.

### Communication Interception

Agent-to-agent messages intercepted or modified by attacker or misbehaving agent.

### Trust Transitivity Exploitation

If Agent A trusts B, and B trusts C, then A implicitly trusts C—creating transitive trust chains.

### Version Incompatibility

Agents running different versions exhibit conflicting behaviors or incompatible protocols.
