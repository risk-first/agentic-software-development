---
title: World Model Risks
description: Threats from AI agents operating on incorrect or outdated understanding of the system.
sidebar_position: 12
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: world-model-risks
  title: World Model Risks
  description: Threats arising from AI agents that construct and act upon incorrect, incomplete, or outdated internal representations of the software system, its architecture, and its operational environment.
  capabilities:
    - reference-id: world-model-construction
      entries:
        - remarks: Core capability for building system understanding
    - reference-id: autonomous-planning
      entries:
        - remarks: Plans based on flawed world model
    - reference-id: code-generation
      entries:
        - remarks: Code generated based on incorrect assumptions
  actors:
    - name: External Attacker
      type: External
      description: Feeds false information to corrupt agent's world model or understanding
    - name: AI Agent
      type: Internal
      description: Operates on outdated, incomplete, or hallucinated system understanding
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0019 - Publish Poisoned Data: Corrupting agent's knowledge sources"
        - remarks: "AML.T0020 - Poison Training Data: Influencing world model construction"
        - remarks: "AML.T0048 - LLM Prompt Injection: Injecting false context into agent memory"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI06 - Memory & Context Poisoning: Corrupting embeddings, summaries, or RAG context"
        - remarks: "ASI08 - Cascading Failures: Incorrect world model causing system-wide failure"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM04 - Data and Model Poisoning: Manipulated data introducing bias or backdoors"
        - remarks: "LLM08 - Vector and Embedding Weaknesses: RAG pipeline corruption affecting model grounding"
        - remarks: "LLM09 - Misinformation: Generating incorrect or fabricated system information"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "MAP 2.3 - Scientific integrity and TEVV considerations documented"
        - remarks: "MEASURE 1.2 - Metric effectiveness and controls regularly reassessed"
---

<ThreatIntro fm={frontMatter} />

## Overview

AI agents build internal representations of the systems they work on. When these world models are incorrect—due to staleness, incomplete observation, or deliberate poisoning—agents make decisions based on false premises, leading to cascading failures.

## Specific Threats

### Model Hallucination

Agent's world model includes components, APIs, or behaviors that don't actually exist.

### Outdated Architecture View

Model doesn't reflect recent system changes—removed services, renamed APIs, refactored modules.

### Dependency Graph Errors

Incorrect understanding of component relationships leads to breaking changes or missed impacts.

### Security Boundary Blindness

Model doesn't recognize security perimeters, trust boundaries, or access control points.

### Scale Misestimation

Model misjudges system capacity, performance characteristics, or resource limits.

### Hidden State Ignorance

Model misses critical implicit state—caches, queues, locks, in-flight transactions.

### Interface Version Mismatch

Model assumes wrong API contracts, message formats, or protocol versions.

### Data Flow Misconception

Incorrect understanding of how data moves through the system.

### Environment Confusion

Model conflates development, staging, and production environments.

### Autonomous Refactoring Breakage

Agent refactors code based on flawed model, breaking hidden invariants or implicit contracts.
