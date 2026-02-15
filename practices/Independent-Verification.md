---
title: Independent Verification
description: Requiring that code verification is performed by an entity separate from the code author, ensuring independent reasoning about correctness.
sidebar_position: 1
tags:
  - Verification
  - Control
gemara:
  id: independent-verification
  title: Independent Verification
  objective: Ensure that AI-generated code is verified by an entity independent from the authoring agent, preventing circular reasoning and shared blind spots.
  family: verification
  assessment-requirements:
    - id: iv-1
      text: Code authoring and code verification MUST be performed by separate entities (agents, models, or humans).
      applicability:
        - autonomous-code-generation
        - ai-assisted-development
    - id: iv-2
      text: The verifier MUST NOT have access to the prompts or reasoning that generated the code.
      applicability:
        - autonomous-code-generation
      recommendation: Use context separation to prevent prompt leakage between authoring and verification stages.
    - id: iv-3
      text: Disagreement between author and verifier MUST block deployment until resolved.
      applicability:
        - autonomous-deployment
        - ci-cd-integration
  threat-mappings:
    - reference-id: verification-illusion
      entries:
        - reference-id: verification-illusion
          strength: 8
          remarks: Primary control for preventing circular verification
---

# Independent Verification

Requiring that code verification is performed by an entity separate from the code author, ensuring independent reasoning about correctness.

## Description

> "Independence of verification" is a foundational principle from safety-critical engineering: the entity that checks a system must be separate from the entity that built it, to avoid shared blind spots and circular reasoning.

In agentic software development, this principle becomes essential because AI agents can rapidly produce both code and tests. Without structural separation, the same model biases, training data gaps, and prompt interpretations that cause bugs also cause those bugs to pass verification.

Independent verification means:
- The verifier has no knowledge of *how* the code was written
- The verifier reasons from *requirements*, not implementation
- Disagreement between author and verifier blocks deployment

## Variations

| **Verification Type**         | **Description**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Separate Agent Verification** | A distinct AI agent with different prompts, context, or model verifies the primary agent's output.  |
| **Human-in-the-Loop Review**   | Human reviewers verify AI-generated code before merge, focusing on intent and edge cases.           |
| **Deterministic Analysis**     | Static analyzers, type checkers, and formal methods provide verification independent of AI reasoning.|
| **Adversarial Testing**        | Red-team agents or fuzzers attempt to break the code, operating with adversarial rather than confirmatory intent. |
| **Cross-Model Consensus**      | Multiple different models must agree on correctness before code is accepted.                        |

## Mitigates

- **Verification Illusion** — Prevents circular reasoning where the same agent writes code and confirms it works.
- **Goal Drift** — An independent verifier can detect when code optimizes proxy metrics rather than actual requirements.
- **Prompt Injection Artifacts** — Separate verification context reduces the chance that injected instructions persist through the pipeline.

## Attendant Risks

- **Coordination Overhead** — Multiple verification stages add latency and complexity to the development pipeline.
- **Verifier Alignment** — The verifier agent must itself be trustworthy; a compromised verifier defeats the control.
- **False Disagreements** — Legitimate code may be blocked by overly conservative or misaligned verification.

## Implementation Patterns

### CI/CD Integration

```
Agent writes code
    ↓
Deterministic checks (lint, type check, static analysis)
    ↓
Independent AI verifier reviews against requirements
    ↓
Human approval gate for high-risk changes
    ↓
Staged deployment with rollback capability
```

### Separation Strategies

1. **Model Separation:** Use different LLMs for authoring vs. verification
2. **Context Separation:** Verifier sees only requirements and code, not the prompts that generated it
3. **Temporal Separation:** Delay verification to prevent prompt leakage between stages
4. **Organizational Separation:** Different teams own authoring vs. verification pipelines
