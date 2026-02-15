---
title: Execution
description: The ability for an AI agent to execute code, scripts, or commands in a runtime environment.
sidebar_position: 3
list_image: /img/icons/capability.svg
tags:
  - Capability
gemara:
  id: execution
  title: Execution
  description: The ability for an AI agent to execute code, scripts, or commands in a runtime environment, including sandboxed, local, or production contexts.
---

<CapabilityIntro fm={frontMatter} />

## Description

Execution capability allows agents to run the code they generate or invoke, observe outputs, and iterate based on results. This enables autonomous debugging, testing, and deployment workflows.

## Privileged Execution

A critical aspect of agent execution is that it typically occurs **on behalf of the user**, inheriting their credentials, permissions, and access rights. This means:

- **Ambient Authority**: Agents execute with whatever permissions the user has granted to the development environment — often broad access to filesystems, networks, cloud resources, and secrets.
- **Credential Inheritance**: API keys, SSH keys, cloud credentials, and other secrets accessible to the user become accessible to the agent.
- **Impersonation**: Actions taken by the agent may be indistinguishable from actions taken by the user in audit logs and access control systems.

This creates an amplification effect: a compromised or misdirected agent can cause harm proportional to the user's privilege level, not the agent's intended scope.
