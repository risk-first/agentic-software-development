---
title: Assign Unique Machine Identities to Each Agent
sidebar_label: Agent Identities
sidebar_position: 1
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: agent-identities
  title: Agent Identities
  objective: Assigning distinct, non-shared machine identities to each agent instance, enabling clear attribution of actions and proper access control.
  threat-mappings:
    - reference-id: identity-accountability-risks
      entries:
        - remarks: Enables attribution of actions to specific agent instances
    - reference-id: multi-agent-risks
      entries:
        - remarks: Allows enforcement of per-agent access policies and prevents identity confusion
---

<ControlIntro fm={frontMatter} />
