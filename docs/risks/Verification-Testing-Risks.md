---
title: Verification & Testing Risks
description: Threats from AI-generated tests creating false confidence or lacking independent verification.
sidebar_position: 10
list_image: /img/icons/threat.svg
tags:
  - Threat
gemara:
  id: verification-testing-risks
  title: Verification & Testing Risks
  description: Threats arising from AI agents that generate tests which pass but don't validate actual behavior, or systems that lack independent verification separate from the code-generating agent.
  capabilities:
    - reference-id: code-generation
      entries:
        - remarks: Same agent generates code and tests
    - reference-id: autonomous-planning
      entries:
        - remarks: Agent may plan to minimize testing effort
    - reference-id: world-model-construction
      entries:
        - remarks: Flawed world model leads to flawed test design
  actors:
    - name: AI Agent
      type: Internal
      description: Generates minimal tests to pass coverage thresholds, or shares blind spots between code generation and verification
    - name: Human Operator
      type: Internal
      description: Over-trusts AI-generated tests, fails to require or perform independent verification
    - name: Organisational Culture
      type: Systemic
      description: Over-relies on AI-generated tests without independent verification requirements
  external-mappings:
    - reference-id: mitre-atlas
      entries:
        - remarks: "AML.T0024 - Evade ML Model: Tests designed to pass rather than verify"
        - remarks: "AML.T0043 - Craft Adversarial Data: Test inputs that mask failures"
        - remarks: "AML.T0015 - Evade ML Model: Verification evasion through coupled generation"
    - reference-id: owasp-agentic
      entries:
        - remarks: "ASI01 - Agent Goal Hijack: Self-generated tests verify agent goals, not human intent"
        - remarks: "ASI08 - Cascading Failures: Undetected defects propagating through autonomous systems"
    - reference-id: owasp-llm
      entries:
        - remarks: "LLM09 - Misinformation: Tests based on incorrect or fabricated information"
    - reference-id: nist-ai-rmf
      entries:
        - remarks: "MEASURE 1.1 - Metrics selected for highest-priority risks"
        - remarks: "MEASURE 1.3 - Independent experts participate in assessment"
        - remarks: "MEASURE 2.1 - Test sets, metrics, and tools documented"
---

<ThreatIntro fm={frontMatter} />

## Overview

When AI generates both code and tests, the traditional assumption that tests independently verify code breaks down. The same model biases, training data gaps, and reasoning errors can be present in both—creating an illusion of verification.

## Specific Threats

### Verification Illusion

AI-generated tests that pass but don't actually validate intended behavior—testing what the code does, not what it should do.

### Lack of Independent Verification

No verifier separate from the code-generating agent; same blind spots in both.

### Test-Code Coupling

Tests that are semantically coupled to implementation rather than specification.

### Coverage Gaming

Tests designed to achieve coverage metrics without meaningful assertions.

### Edge Case Blindness

Tests that exercise happy paths but miss boundary conditions and error cases.

### Non-Deterministic Test Results

Same code producing different test results across runs due to AI generation variability.

### Regression Test Erosion

Agent modifies tests to pass rather than fixing code that causes test failures.

### Oracle Problem Amplification

AI cannot determine correct expected output, so generates tests that assert current behavior.
