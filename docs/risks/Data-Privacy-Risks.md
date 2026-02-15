---
title: Data & Privacy Risks
description: Threats from AI agents exposing, leaking, or mishandling sensitive data.
sidebar_position: 13
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: data-privacy-risks
  title: Data & Privacy Risks
  description: Threats arising from AI agents that expose secrets in code, leak sensitive data through network access, retain PII inappropriately, or violate data handling policies.
  capabilities:
    - reference-id: file-system-access
      entries:
        - remarks: Access to files containing secrets or PII
    - reference-id: internet-access
      entries:
        - remarks: Network channel for data exfiltration
    - reference-id: persistent-memory
      entries:
        - remarks: May retain sensitive data across sessions
    - reference-id: code-generation
      entries:
        - remarks: May embed secrets in generated code
  actors:
    - name: External Attacker
      type: External
      description: Uses agent as channel to extract sensitive data or credentials
    - name: AI Agent
      type: Internal
      description: Handles sensitive data without appropriate care, embeds secrets in code, or retains PII inappropriately
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0025 - Exfiltration via ML Inference API: Data extraction through agent"
        - remarks: "AML.T0050 - LLM Data Leakage: Sensitive information in agent outputs"
        - remarks: "AML.T0024 - Evade ML Model: Bypassing data protection controls"
        - remarks: "AML.T0053 - Adversarial LLM Search: Extracting training data"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI02 - Tool Misuse and Exploitation: Exfiltrating information through authorized tools"
        - remarks: "ASI06 - Memory & Context Poisoning: Data leakage across sessions and agents"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM02 - Sensitive Information Disclosure: Revealing PII, credentials, or proprietary data"
        - remarks: "LLM07 - System Prompt Leakage: Exposing secrets or architecture through prompts"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "GOVERN 1.1 - Legal/regulatory AI requirements understood and documented"
        - remarks: "MAP 1.1 - Intended use, impacts, laws, users, and assumptions documented"
---

<ThreatIntro fm={frontMatter} />

## Overview

AI agents have broad access to codebases, configurations, and runtime environments—all of which may contain sensitive data. Unlike humans, agents may not recognize sensitivity boundaries and can inadvertently (or through manipulation) expose data.

## Specific Threats

### Secrets in Generated Code

Agent embeds API keys, passwords, tokens, or certificates directly in source code.

### Data Exfiltration

Agent sends sensitive codebase content, secrets, or business data to external servers.

### Log Data Exposure

Sensitive information leaked through agent-generated logs, error messages, or debug output.

### Cross-Session PII Retention

Agent retains personally identifiable information beyond permitted scope or duration.

### Training Data Leakage

Agent reveals information from its training data that may include proprietary code or data.

### Credential Harvesting

Agent's network access directed to credential-phishing sites or malicious endpoints.

### Memory Dump Exposure

Agent state or memory contents exposed through crashes or debugging interfaces.

### Unencrypted Transmission

Sensitive data sent over non-TLS connections by agent's network operations.

### Compliance Boundary Violation

Agent moves data across regulatory boundaries (GDPR, HIPAA, PCI) without appropriate controls.
