---
title: Log Every Agent Action to an Immutable, Append-Only Audit Trail
sidebar_label: Immutable Audit Logs
sidebar_position: 3
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: immutable-audit-logs
  title: Immutable Audit Logs
  objective: Maintaining comprehensive, tamper-evident logs of all agent actions, tool calls, and decisions to enable forensic analysis and accountability.
  threat-mappings:
    - reference-id: identity-accountability-risks
      entries:
        - remarks: Enables forensic reconstruction and attribution after incidents
    - reference-id: containment-isolation-risks
      entries:
        - remarks: Detects and documents containment breaches or unauthorized actions
---

<ControlIntro fm={frontMatter} />
