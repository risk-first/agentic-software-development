---
title: Run Secrets Scanning on All Agent-Generated Code and Logs
sidebar_label: Secrets Scanning
sidebar_position: 6
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: secrets-scanning
  title: Secrets Scanning
  objective: Automatically scanning all agent-generated code, logs, and outputs for accidentally embedded credentials, API keys, or sensitive data.
  threat-mappings:
    - reference-id: data-privacy-risks
      entries:
        - remarks: Prevents credentials and secrets from being committed or logged
    - reference-id: code-security-risks
      entries:
        - remarks: Catches hardcoded secrets that agents may embed in generated code
---

<ControlIntro fm={frontMatter} />
