---
title: Require Human Approval for Merges, Deploys, and Sensitive Actions
sidebar_label: Human Approval Gates
sidebar_position: 2
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: human-approval-gates
  title: Human Approval Gates
  objective: Requiring explicit human review and approval before agents can execute high-impact actions such as merging code, deploying to production, or modifying infrastructure.
  threat-mappings:
    - reference-id: autonomy-control-risks
      entries:
        - remarks: Prevents unauthorized commits and deploys without human oversight
    - reference-id: deployment-rollback-risks
      entries:
        - remarks: Ensures human verification before production changes
    - reference-id: human-factors-risks
      entries:
        - remarks: Creates deliberate decision points that resist manipulation
---

<ControlIntro fm={frontMatter} />
