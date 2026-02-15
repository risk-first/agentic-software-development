---
title: Tool Calling
description: The ability for an AI agent to invoke external tools, APIs, or system commands.
sidebar_position: 2
tags:
  - Capability
gemara:
  id: tool-calling
  title: Tool Calling
  description: The ability for an AI agent to invoke external tools, APIs, or system commands as part of its reasoning or action chain.
---

# Tool Calling

The ability for an AI agent to invoke external tools, APIs, or system commands.

## Description

Tool calling extends agent capabilities beyond text generation, allowing interaction with external systems. This includes invoking build tools, package managers, databases, APIs, and custom integrations.

## Threat Surface

This capability is exploited by threats including:
- Privilege Escalation
- Secrets Leakage
- Unintended Side Effects
- Tool Misuse

## Related Controls

- Capability Scoping
- Tool Allowlists
- Action Audit Logging
