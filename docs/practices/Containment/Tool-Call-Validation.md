---
title: Validate Agent Tool Calls Against Typed Schemas and Allowlists
sidebar_label: Tool Call Validation
sidebar_position: 4
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: tool-call-validation
  title: Tool Call Validation
  objective: Enforcing strict validation of all agent tool calls against typed schemas and allowlists before execution, preventing parameter injection and unauthorized tool use.
  threat-mappings:
    - reference-id: prompt-injection-risks
      entries:
        - remarks: Blocks injection payloads in tool call parameters
    - reference-id: code-security-risks
      entries:
        - remarks: Prevents malformed or dangerous parameters reaching tools
    - reference-id: containment-isolation-risks
      entries:
        - remarks: Restricts tool chain exploitation via allowlisted actions
---

<ControlIntro fm={frontMatter} />
