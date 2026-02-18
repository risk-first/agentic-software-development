---
title: Sandbox Agent Code Execution with Syscall and Network Restrictions
sidebar_label: Sandbox Execution
sidebar_position: 3
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: sandbox-execution
  title: Sandbox Execution
  objective: Running all agent-generated or agent-executed code within isolated sandboxes that restrict syscalls, filesystem access, and network egress.
  threat-mappings:
    - reference-id: containment-isolation-risks
      entries:
        - remarks: Prevents container escape, privilege escalation, and host compromise
    - reference-id: code-security-risks
      entries:
        - remarks: Limits damage from insecure or malicious generated code
---

<ControlIntro fm={frontMatter} />
