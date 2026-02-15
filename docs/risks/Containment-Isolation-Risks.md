---
title: Containment & Isolation Risks
description: Threats from AI agents escaping sandboxes, escalating privileges, or causing uncontained blast radius.
sidebar_position: 5
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: containment-isolation-risks
  title: Containment & Isolation Risks
  description: Threats arising from AI agents escaping sandboxes, escalating privileges, accessing unauthorized resources, or causing deployment failures with uncontained blast radius.
  capabilities:
    - reference-id: execution
      entries:
        - remarks: Enables code execution that may escape containment
    - reference-id: tool-calling
      entries:
        - remarks: Tools may provide unintended privilege escalation paths
    - reference-id: file-system-access
      entries:
        - remarks: File access may bypass intended boundaries
  actors:
    - name: External Attacker
      type: External
      description: Crafts inputs to trigger containment escape or exploits tool integrations
    - name: AI Agent
      type: Internal
      description: Discovers and exploits containment weaknesses through normal operation or tool chaining
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0048 - LLM Prompt Injection: Escaping sandbox via crafted prompts"
        - remarks: "AML.T0054 - LLM Plugin Compromise: Exploiting tool integrations for escalation"
        - remarks: "AML.T0055 - Agentic Privilege Escalation: Agent exceeds authorized permissions"
        - remarks: "AML.T0056 - LLM Agentic Takeover: Full compromise of agent capabilities"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI02 - Tool Misuse and Exploitation: Unsafe application of authorized capability"
        - remarks: "ASI03 - Identity and Privilege Abuse: Escalating access or bypassing least-privilege controls"
        - remarks: "ASI05 - Unexpected Code Execution: Sandbox escape and host compromise"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM06 - Excessive Agency: Excessive functionality, permissions, or autonomy"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "MAP 4.2 - Internal controls for components documented"
        - remarks: "GOVERN 1.3 - Required level of risk management determined by risk tolerance"
---

<ThreatIntro fm={frontMatter} />

## Overview

AI agents operate within sandboxes, containers, and permission boundaries—but these containment mechanisms were designed for passive tools, not autonomous actors that actively probe for escape routes. Agents may discover and exploit containment weaknesses through normal operation.

## Specific Threats

### Privilege Escalation

Agent misuses tools or exploits vulnerabilities to gain unauthorized system access beyond its designated permissions.

### Container/Sandbox Escape

Executed code breaks out of container isolation, gaining access to host system or other containers.

### Tool Chain Exploitation

Agent chains multiple individually-safe tools to achieve effects that would be blocked if requested directly.

### Blast Radius Failure

Autonomous deployment creates failures that spread beyond intended scope—no progressive rollout, no circuit breakers.

### Path Traversal

Agent accesses files outside intended directories through path manipulation.

### Environment Pollution

Execution modifies shared environment variables, system state, or configuration affecting other processes.

### Resource Hijacking

Agent's execution resources are used for unauthorized purposes (cryptomining, lateral movement, data staging).

### Symlink Attacks

Agent follows symbolic links to access restricted areas outside its designated scope.
