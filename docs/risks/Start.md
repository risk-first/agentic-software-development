---
title: Agentic Software Development Risks
description: Threats and risks specific to AI agents participating in software development
sidebar_position: 1
slug: /risks
list_image: /img/icons/threat.svg 
tags:
  - Category
---

# Agentic Risks

The threats that emerge when AI agents autonomously write, modify, and deploy code. These risks are distinct from traditional AI risks (bias, hallucination) because they concern **AI as a producer of software**, not AI as a decision-making component.

## Actor Taxonomy

Risks in this framework involve five types of actors:

| Actor | Type | Description |
|-------|------|-------------|
| **External Attacker** | External | Adversaries who exploit, compromise, or manipulate the system |
| **Tool Supplier** | External | LLM vendors, model providers, or tool maintainers whose updates cause behavior drift or breaking changes |
| **AI Agent** | Internal | The agent itself exhibiting unsafe, misaligned, or careless behaviors |
| **Human Operator** | Internal | The human user/developer making configuration or approval decisions |
| **Organisational Culture** | Systemic | Organizational pressures and incentive structures that enable risk |

## Risk Inventory

<TagList tag="Threat" filter="risks" />
