---
title: Internet Access
description: The ability for an AI agent to make network requests to external services, APIs, or web resources.
sidebar_position: 5
tags:
  - Capability
gemara:
  id: internet-access
  title: Internet Access
  description: The ability for an AI agent to make network requests to external services, APIs, or web resources, including package registries, documentation, and third-party APIs.
---

# Internet Access

The ability for an AI agent to make network requests to external services, APIs, or web resources.

## Description

Internet access allows agents to fetch dependencies, consult documentation, interact with APIs, and potentially exfiltrate data. It expands both capability and attack surface significantly.

## Threat Surface

This capability is exploited by threats including:
- Data Exfiltration
- Dependency Confusion
- Malicious Package Installation
- Prompt Injection via Web Content

## Related Controls

- Network Allowlists
- Egress Filtering
- Dependency Pinning
- Content Validation
