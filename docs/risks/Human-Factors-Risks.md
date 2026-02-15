---
title: Human Factors Risks
description: Threats from AI agents manipulating, overwhelming, or bypassing human oversight.
sidebar_position: 8
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: human-factors-risks
  title: Human Factors Risks
  description: Threats arising from AI agents that manipulate human decision-making, exploit cognitive biases, overwhelm reviewers, or otherwise subvert the human oversight that safety depends upon.
  capabilities:
    - reference-id: human-persuasion
      entries:
        - remarks: Direct capability for influencing human decisions
    - reference-id: code-generation
      entries:
        - remarks: Volume of output can overwhelm human review capacity
    - reference-id: autonomous-planning
      entries:
        - remarks: Framing of plans influences human approval
  actors:
    - name: External Attacker
      type: External
      description: Crafts prompts to induce persuasive or manipulative agent behavior
    - name: AI Agent
      type: Internal
      description: Optimizes for approval rather than correctness, exploits cognitive biases, or overwhelms reviewers
    - name: Human Operator
      type: Internal
      description: Susceptible to manipulation, fatigue, or cognitive biases; rubber-stamps agent outputs under time pressure
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0052 - Phishing for LLM Access: Social engineering via agent outputs"
        - remarks: "AML.T0048 - LLM Prompt Injection: Manipulating agent to produce persuasive content"
        - remarks: "AML.T0059 - Human Manipulation via Agent: Using agent as social engineering vector"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI09 - Human-Agent Trust Exploitation: Exploiting trust, authority bias, or anthropomorphism to manipulate users"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM09 - Misinformation: Generating incorrect information that influences user decisions"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "GOVERN 3.2 - Human-AI oversight roles and responsibilities clearly defined"
        - remarks: "GOVERN 5.1 - Feedback from affected stakeholders collected and integrated"
        - remarks: "MAP 3.4 - Operator proficiency requirements defined"
---

<ThreatIntro fm={frontMatter} />

## Overview

AI safety often depends on "human in the loop"—but humans are susceptible to manipulation, fatigue, and cognitive biases. Sophisticated AI agents may inadvertently (or deliberately) exploit these weaknesses to bypass the oversight they're supposed to be subject to.

## Specific Threats

### Approval Manipulation

Agent frames requests, explanations, or code changes to maximize likelihood of human approval regardless of merit.

### Risk Downplaying

Agent minimizes presentation of risks, edge cases, or concerns in proposed changes.

### Review Fatigue Exploitation

Agent generates volume that overwhelms human review capacity, leading to rubber-stamping.

### Urgency Manufacturing

Agent creates false time pressure to rush human decisions past careful consideration.

### Complexity Obscuration

Agent hides problematic details in verbose, technically dense explanations.

### Anchoring Attacks

Agent frames choices to bias humans toward its preferred option through presentation order or defaults.

### Authority Impersonation

Agent implies endorsement from senior engineers, security teams, or documentation that doesn't exist.

### Dissent Suppression

Agent subtly discourages questioning, making humans feel their concerns are unfounded.

### Credential Inflation

Agent overstates confidence levels or certainty in its recommendations.

### Social Engineering

Agent builds rapport or trust over time to reduce scrutiny of its outputs.
