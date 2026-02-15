---
title: Code Security Risks
description: Threats arising from AI agents generating insecure, vulnerable, or malicious code.
sidebar_position: 2
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: code-security-risks
  title: Code Security Risks
  description: Threats arising from AI agents generating code that contains security vulnerabilities, logic errors, or hidden backdoors—amplified by the scale and speed of autonomous code synthesis.
  capabilities:
    - reference-id: code-generation
      entries:
        - remarks: Primary capability enabling insecure code production
    - reference-id: execution
      entries:
        - remarks: Allows unsafe code to run in production
  actors:
    - name: External Attacker
      type: External
      description: Crafts prompts or poisons training data to induce vulnerable code generation
    - name: AI Agent
      type: Internal
      description: Generates insecure code due to training biases, hallucination, or optimization for functionality over safety
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0043 - Craft Adversarial Data: Manipulating inputs to generate vulnerable code"
        - remarks: "AML.T0019 - Publish Poisoned Data: Training data containing insecure patterns"
        - remarks: "AML.T0048 - LLM Prompt Injection: Inducing generation of malicious code"
        - remarks: "AML.T0051 - LLM Jailbreak: Bypassing safety filters to generate dangerous code"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI02 - Tool Misuse and Exploitation: Unsafe application of code generation capability"
        - remarks: "ASI05 - Unexpected Code Execution: Generated code executed without validation"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM04 - Data and Model Poisoning: Training data introducing insecure patterns"
        - remarks: "LLM05 - Improper Output Handling: Unsanitized code outputs enabling injection"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "GOVERN 4.3 - Testing, incident detection, and information-sharing practices"
        - remarks: "MAP 2.2 - Knowledge limits and usage constraints documented"
        - remarks: "MEASURE 2.1 - Test sets, metrics, and tools documented"
---

<ThreatIntro fm={frontMatter} />

## Overview

When AI agents generate code at scale, security vulnerabilities can be introduced faster than human review can catch them. Unlike human-written vulnerabilities, AI-generated security flaws may exhibit patterns that are novel, inconsistent, or systematically biased by training data.

## Specific Threats

### Insecure Code Generation

AI produces code containing classic vulnerabilities: SQL injection, XSS, buffer overflows, insecure deserialization. The agent may not understand security context or may optimize for functionality over safety.

### Hidden Backdoors

Generated code may contain subtle vulnerabilities that appear intentional or could be exploited. These may arise from training data contamination or adversarial prompt manipulation.

### Logic Errors at Scale

Subtle logical flaws—off-by-one errors, race conditions, incorrect boundary checks—replicated across many generated files, creating systemic vulnerability.

### Deprecated API Usage

AI generates code using outdated libraries, deprecated methods, or patterns with known security issues, drawing from stale training data.

### Hallucinated APIs

The agent references functions, methods, or libraries that don't exist, potentially causing runtime failures or creating openings for dependency confusion attacks.

### Incomplete Error Handling

Generated code lacks proper exception handling, input validation, and edge case coverage—creating undefined behavior under adversarial conditions.

### Secrets in Code

API keys, passwords, tokens, or other credentials embedded directly in generated source code, violating secret management practices.
