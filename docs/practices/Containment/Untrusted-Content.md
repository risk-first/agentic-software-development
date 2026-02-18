---
title: Treat All Agent-Retrieved Content as Untrusted Input
sidebar_label: Untrusted Content
sidebar_position: 5
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: untrusted-content
  title: Untrusted Content
  objective: Treating all content retrieved by agents—from files, APIs, documentation, or user input—as potentially malicious and applying appropriate input validation.
  threat-mappings:
    - reference-id: prompt-injection-risks
      entries:
        - remarks: Defends against indirect injection via retrieved content
    - reference-id: world-model-risks
      entries:
        - remarks: Prevents poisoned data sources from corrupting agent understanding
---

<ControlIntro fm={frontMatter} />
