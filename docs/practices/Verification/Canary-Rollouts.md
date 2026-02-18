---
title: Deploy Agent Changes via Canary Rollout with Automatic Rollback
sidebar_label: Canary Rollouts
sidebar_position: 1
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: canary-rollouts
  title: Canary Rollouts
  objective: Deploying agent-generated changes progressively to a small subset of traffic first, with automated rollback if health metrics degrade.
  threat-mappings:
    - reference-id: deployment-rollback-risks
      entries:
        - remarks: Limits blast radius and ensures rollback capability for agent changes
    - reference-id: containment-isolation-risks
      entries:
        - remarks: Contains deployment failures to canary population before full rollout
---

<ControlIntro fm={frontMatter} />
