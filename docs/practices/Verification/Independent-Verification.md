---
title: Use Independent Verifiers for Agent-Generated Code and Tests
sidebar_label: Independent Verification
sidebar_position: 4
list_image: /img/icons/control.svg
tags:
  - Control
gemara:
  id: independent-verification
  title: Independent Verification
  objective: Ensuring that verification of agent-generated code comes from sources independent of the code-generating agent, breaking the verification illusion.
  threat-mappings:
    - reference-id: verification-testing-risks
      entries:
        - remarks: Breaks test-code coupling and prevents verification illusion
    - reference-id: code-security-risks
      entries:
        - remarks: Catches security flaws the generating agent may share blind spots with
---

<ControlIntro fm={frontMatter} />
