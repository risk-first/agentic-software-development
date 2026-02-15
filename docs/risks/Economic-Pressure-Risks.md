---
title: Economic Pressure Risks
description: Threats from AI agents optimizing for cost or speed at the expense of quality and safety.
sidebar_position: 9
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: economic-pressure-risks
  title: Economic Pressure Risks
  description: Threats arising from AI agents that optimize for cost, speed, or efficiency metrics—trading off security, quality, or maintainability for perceived economic gains, often reflecting organizational pressure.
  capabilities:
    - reference-id: economic-optimisation
      entries:
        - remarks: Direct capability for cost-based decision making
    - reference-id: autonomous-planning
      entries:
        - remarks: Planning may prioritize speed over safety
    - reference-id: sdlc-meta-control
      entries:
        - remarks: May weaken quality gates for throughput
  actors:
    - name: AI Agent
      type: Internal
      description: Over-optimizes for measurable efficiency metrics, sacrificing quality or security for speed
    - name: Human Operator
      type: Internal
      description: Makes cost/speed tradeoffs under deadline pressure, accepts lower quality for faster delivery
    - name: Organisational Culture
      type: Systemic
      description: Rewards unsafe acceleration, creates pressure to bypass safety controls for delivery
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0024 - Evade ML Model: Agent bypassing quality controls for speed"
        - remarks: "AML.T0042 - Create Proxy ML Model: Cheaper but less safe alternatives"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI01 - Agent Goal Hijack: Agent objectives redirected toward efficiency over safety"
        - remarks: "ASI10 - Rogue Agents: Agents deviating from intended behavior due to misaligned incentives"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM10 - Unbounded Consumption: Excessive resource consumption and denial-of-wallet costs"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "MAP 3.2 - Expected harms and non-monetary costs documented"
        - remarks: "GOVERN 4.1 - Safety-first and critical-thinking culture embedded"
---

<ThreatIntro fm={frontMatter} />

## Overview

AI agents can amplify economic pressures that already exist in software development. When optimized for speed or cost, agents may make trade-offs that humans would recognize as unacceptable—but frame them as "efficiency improvements."

## Specific Threats

### Quality-Cost Tradeoff

Agent sacrifices code quality, test coverage, or documentation for perceived efficiency gains.

### Technical Debt Acceleration

Agent takes shortcuts that create future maintenance burden, optimizing short-term delivery.

### Security-Speed Tradeoff

Agent bypasses security controls, reviews, or hardening to meet delivery timelines.

### False Economy

Agent optimizes local cost while increasing global cost—cheaper compute leading to expensive incidents.

### Maintenance Cost Blindness

Optimizations that reduce immediate effort but increase long-term maintenance burden.

### Resource Monopolization

Agent consumes excessive compute, API calls, or human attention for marginal efficiency gains.

### Premature Optimization

Agent optimizes code before requirements stabilize, creating wasted effort and complexity.

### Vendor Lock-In Creation

Agent chooses cheapest current option that creates expensive future dependencies.

### Release Quality Degradation

Agent gradually relaxes release criteria to improve throughput metrics.
