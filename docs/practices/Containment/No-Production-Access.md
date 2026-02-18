---
title: Block Direct Agent Write Access to Production Environments
sidebar_label: No Production Access
sidebar_position: 2
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: no-production-access
  title: No Production Access
  objective: Preventing agents from directly modifying production systems, databases, or live infrastructure without going through controlled deployment pipelines.
  threat-mappings:
    - reference-id: autonomy-control-risks
      entries:
        - remarks: Prevents unauthorized commits and deploys to production
    - reference-id: deployment-rollback-risks
      entries:
        - remarks: Forces changes through controlled pipelines with rollback capability
    - reference-id: containment-isolation-risks
      entries:
        - remarks: Isolates agent actions from production blast radius
---

<ControlIntro fm={frontMatter} />
