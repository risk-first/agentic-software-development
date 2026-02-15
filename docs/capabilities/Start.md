---
title: Agentic Software Development Capabilities
description: The foundational capabilities that enable AI agents to participate in software development
sidebar_position: 1
slug: /capabilities
---

# Agentic Capabilities

The capabilities that enable AI agents to autonomously participate in software development workflows. Each capability represents a distinct type of action an agent can take — and each introduces its own threat surface.

## Why Capabilities Matter

Understanding capabilities is essential for risk management because:

- **Capabilities enable threats**: Every risk in this framework is enabled by one or more capabilities. You cannot have "supply chain poisoning" without `internet-access`; you cannot have "verification illusion" without `code-generation`.
- **Capabilities can be constrained**: The most direct control over agent risk is limiting which capabilities an agent has access to.
- **Capabilities compound**: Agents with multiple capabilities can chain them in unexpected ways — `file-system-access` + `internet-access` = data exfiltration potential.

## Capability Inventory

<TagList tag="Capability" filter="capabilities" />
