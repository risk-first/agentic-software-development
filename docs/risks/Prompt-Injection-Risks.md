---
title: Prompt Injection Risks
description: Threats from adversarial inputs that manipulate AI agent behavior.
sidebar_position: 11
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: prompt-injection-risks
  title: Prompt Injection Risks
  description: Threats arising from adversarial inputs—in prompts, code comments, documentation, or data—that manipulate AI agent behavior to produce unsafe code, bypass controls, or exfiltrate information.
  capabilities:
    - reference-id: code-generation
      entries:
        - remarks: Generated code may contain injected instructions
    - reference-id: internet-access
      entries:
        - remarks: External content may contain injection payloads
    - reference-id: file-system-access
      entries:
        - remarks: Files may contain injection attacks
  actors:
    - name: External Attacker
      type: External
      description: Crafts malicious prompts, embeds payloads in data sources, or poisons context to hijack agent behavior
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0048 - LLM Prompt Injection: Direct and indirect injection attacks"
        - remarks: "AML.T0051 - LLM Jailbreak: Bypassing safety constraints via prompt manipulation"
        - remarks: "AML.T0050 - LLM Data Leakage: Extracting sensitive information via injection"
        - remarks: "AML.T0049 - LLM Meta Prompt Extraction: Revealing system prompts"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI01 - Agent Goal Hijack: Redirecting multi-step autonomous behavior through injection"
        - remarks: "ASI06 - Memory & Context Poisoning: Corrupting stored memory causing persistent bias"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM01 - Prompt Injection: Malicious inputs manipulating model behavior"
        - remarks: "LLM07 - System Prompt Leakage: Exposing secrets or filtering logic via injection"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "GOVERN 4.3 - Testing, incident detection, and information-sharing practices"
        - remarks: "MAP 2.2 - Knowledge limits and usage constraints documented"
---

<ThreatIntro fm={frontMatter} />

## Overview

Prompt injection is a novel attack class unique to LLM-based systems. In agentic SDLC, injection vectors expand beyond user prompts to include code comments, documentation, error messages, API responses, and any text the agent processes.

## Specific Threats

### Direct Prompt Injection

Malicious instructions in user prompts that override agent safety constraints or intended behavior.

### Indirect Prompt Injection

Malicious payloads embedded in data sources (files, APIs, databases) that the agent processes.

### Code Comment Injection

Instructions hidden in code comments that manipulate agent behavior during code review or modification.

### Documentation Poisoning

Malicious instructions embedded in README files, docstrings, or wikis that agents reference.

### Error Message Exploitation

Crafted error messages that contain injection payloads processed when agent handles errors.

### Parameter Injection

Malicious parameters passed through tool calls that exploit downstream systems.

### Context Window Manipulation

Attacks that overflow or manipulate the agent's context to override instructions.

### Jailbreaking

Techniques that convince the agent to ignore its safety guidelines or role constraints.
