---
slug: /
sidebar_position: 1
title: Agentic SDLC Risk Framework
---

<p align="center">
  <img src="/static/img/R1_logo_round_white.svg" alt="Risk First Logo" width="120" />
</p>

# Agentic Software Development Risk Framework

**[agentic-software-development.riskfirst.org](https://agentic-software-development.riskfirst.org)**

A risk framework for **agentic AI software development** — addressing the unique threats that emerge when AI systems autonomously write, modify, and deploy code.

## Why This Exists

Existing AI governance frameworks like **NIST AI RMF** and **ISO/IEC 42001** focus on:

- AI as a decision-making component
- Model lifecycle governance
- Organizational accountability

But AI is no longer just making decisions inside software — it is becoming the **primary producer and modifier** of software itself. This shifts risk from *"bad AI decision"* to *"unsafe evolving codebase"* — a completely different class of risk that current frameworks don't address.

## Part of Risk-First

This framework is part of [Risk-First Software Development](https://riskfirst.org) and builds on Risk-First principles. Navigate the framework at [agentic-software-development.riskfirst.org](https://agentic-software-development.riskfirst.org) for a more joined-up experience.

See also: [Societal AI Risk Framework](https://societal-ai-risk.riskfirst.org) — addressing civilisation-scale risks from advanced AI systems.

## What This Framework Covers

### Capabilities

The capabilities of generative coding systems that create attack surface — Code Generation, Tool Calling, Execution, Autonomous Planning, Multi-Agent Orchestration, and more.

### Risks

Threats unique to or amplified by agentic software development — Code Security, Supply Chain, Autonomy & Control, Prompt Injection, Human Factors, and more.

### Controls

Practices and safeguards to address agentic risk.

## External Framework Mappings

Threats in this framework are mapped to established security and AI governance standards:

| Framework | Description |
|-----------|-------------|
| [MITRE ATLAS](https://atlas.mitre.org/) | Adversarial Threat Landscape for AI Systems |
| [OWASP Top 10 for Agentic Applications](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) | Critical security risks for autonomous AI (2026) |
| [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) | Security risks for LLM applications (2025) |
| [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) | AI Risk Management Framework |
| [NIST SSDF](https://csrc.nist.gov/Projects/ssdf) | Secure Software Development Framework |
| [SLSA](https://slsa.dev/) | Supply-chain Levels for Software Artifacts |
| [ISO/IEC 42001](https://www.iso.org/standard/81230.html) | AI Management System standard |

## Schema & Validation

This framework uses schemas based on the [OpenSSF Gemara](https://gemara.openssf.org) project — a GRC Engineering Model for Automated Risk Assessment. Gemara provides a logical model for compliance activities and standardized schemas (in CUE format) for automated validation and interoperability.

## Contributing

This is an emerging area with significant open problems:

- Provable correctness of agent-generated code
- Runtime monitoring of autonomous planning
- Standardized agent audit logs
- Cross-agent trust and identity

## License

This work is licensed under [Creative Commons Attribution 4.0 International (CC-BY 4.0)](LICENSE).
