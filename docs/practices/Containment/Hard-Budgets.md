---
title: Enforce Hard Token, Time, and Cost Budgets on Every Agent Task
sidebar_label: Hard Budgets
sidebar_position: 1
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: hard-budgets
  title: Hard Budgets
  objective: Preventing runaway agent execution, denial-of-wallet attacks, and resource exhaustion by enforcing strict limits on tokens, time, API calls, and cost per task.
  threat-mappings:
    - reference-id: economic-pressure-risks
      entries:
        - remarks: Prevents unbounded spend and denial-of-wallet scenarios
    - reference-id: multi-agent-risks
      entries:
        - remarks: Limits resource contention between concurrent agents
    - reference-id: containment-isolation-risks
      entries:
        - remarks: Bounds blast radius of runaway loops or infinite recursion
---

<ControlIntro fm={frontMatter} />
