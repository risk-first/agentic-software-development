---
title: Supply Chain Risks
description: Threats from AI agents introducing compromised, malicious, or license-contaminated dependencies.
sidebar_position: 3
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: supply-chain-risks
  title: Supply Chain Risks
  description: Threats arising from AI agents introducing compromised dependencies, license-contaminated code, or artifacts lacking proper provenance—expanding the software supply chain attack surface.
  capabilities:
    - reference-id: code-generation
      entries:
        - remarks: Generates code that pulls in dependencies
    - reference-id: internet-access
      entries:
        - remarks: Enables fetching packages from external registries
    - reference-id: tool-calling
      entries:
        - remarks: Invokes package managers and build tools
  actors:
    - name: External Attacker
      type: External
      description: Compromises upstream packages, registries, or creates typosquatted malicious packages
    - name: AI Agent
      type: Internal
      description: Selects dependencies based on training data popularity rather than security posture
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0019 - Publish Poisoned Data: Compromised packages in registries"
        - remarks: "AML.T0010 - ML Supply Chain Compromise: Attacks on AI tooling dependencies"
        - remarks: "AML.T0018 - Backdoor ML Model: Embedding malicious behavior in dependencies"
    - reference-id: slsa
      entries:
        - remarks: "Build L1-L4: Provenance requirements for AI-generated artifacts"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI04 - Agentic Supply-Chain Vulnerabilities: Third-party models, tools, prompts, or datasets may be malicious or compromised"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM03 - Supply Chain: Vulnerable, poisoned, or malicious third-party components"
        - remarks: "LLM04 - Data and Model Poisoning: Manipulated training or fine-tuning data"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "GOVERN 6.1 - Policies address third-party IP, data, and AI risks"
        - remarks: "GOVERN 6.2 - Contingency plans for third-party failures/incidents"
        - remarks: "MAP 4.1 - Legal/technical risks of components and third-party assets mapped"
---

<ThreatIntro fm={frontMatter} />

## Overview

AI agents can dramatically expand supply chain risk by autonomously selecting and incorporating dependencies without human vetting. The agent may choose packages based on training data popularity rather than current security posture.

## Specific Threats

### License Contamination

Generated code inadvertently copies GPL, AGPL, or other copyleft-licensed code into proprietary codebases, creating legal liability and compliance violations.

### Malicious Dependency Introduction

Agent selects compromised packages from registries—either through typosquatting, dependency confusion, or packages that have been subsequently compromised.

### Lack of Provenance

AI-generated code and artifacts lack clear provenance chains, making it impossible to verify origin, authenticity, or chain of custody.

### Supply Chain Poisoning

Agent downloads from compromised package registries, mirrors, or CDNs that serve malicious versions of legitimate packages.

### Runtime Dependency Injection

Malicious dependencies loaded at execution time, bypassing static analysis and code review.

### Version Pinning Failures

Agent uses unpinned or loosely pinned dependencies, allowing malicious updates to flow into builds.
