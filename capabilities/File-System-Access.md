---
title: File System Access
description: The ability for an AI agent to read, write, and modify files on the local or remote file system.
sidebar_position: 4
tags:
  - Capability
gemara:
  id: file-system-access
  title: File System Access
  description: The ability for an AI agent to read, write, and modify files on the local or remote file system, including source code, configuration, and data files.
---

# File System Access

The ability for an AI agent to read, write, and modify files on the local or remote file system.

## Description

File system access enables agents to read existing code, modify files, create new artifacts, and manage project structure. This is essential for code generation but creates significant risk surface.

## Threat Surface

This capability is exploited by threats including:
- Unexpected File Modifications
- Secrets Exposure
- Configuration Tampering
- Data Exfiltration

## Related Controls

- Path Allowlists
- Change Locality Constraints
- File Access Audit Logging
- Gitignore Enforcement
