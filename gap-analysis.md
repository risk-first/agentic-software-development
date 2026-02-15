# Agentic SDLC Risk Gap Analysis

Scoring legend:

* **Column 2 (AI‑Agent Specificity)**: 1 = generic software risk, 5 = unique to agentic AI SDLC
* **Column 3–4 Coverage**: 0 = not covered, 1 = partial/implicit, 2 = explicit coverage

| Concern / Risk                                                     | AI‑Agent Specificity (score + commentary)                   | NIST AI RMF Coverage (score + commentary)              | ISO/IEC 42001 Coverage (score + commentary)                        |
| ------------------------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------ |
| AI generates insecure or vulnerable code                           | **4** – Amplified by autonomous code synthesis and scale    | **1** – Mentions security risk broadly, not code‑level | **1** – Governance controls exist, but not secure coding specifics |
| Malicious or license‑contaminated dependencies introduced by agent | **4** – Unique supply‑chain expansion via generation        | **0** – No dependency governance detail                | **0** – No artifact‑level supply‑chain control                     |
| Agent commits or deploys code without human review                 | **5** – Core autonomy risk in agentic SDLC                  | **1** – Human oversight discussed abstractly           | **1** – Change management required, but not AI‑specific            |
| Autonomous refactoring breaks hidden system invariants             | **4** – Scale and opacity increase likelihood               | **0** – Not addressed at software behaviour level      | **0** – No SDLC behavioural integrity controls                     |
| False confidence from AI‑generated tests                           | **5** – Verification illusion unique to generative systems  | **0** – Testing reliability not covered                | **0** – No assurance independence requirement                      |
| Lack of independent verifier separate from coding agent            | **5** – Structural safety requirement unique to autonomy    | **0** – Evaluation discussed, independence absent      | **0** – Separation of duties not AI‑SDLC specific                  |
| Non‑deterministic builds or behaviour from AI changes              | **4** – Stochastic generation affects reproducibility       | **1** – Reliability mentioned conceptually             | **1** – Quality management implied but not technical               |
| Prompt injection leading to unsafe code changes                    | **5** – Novel attack surface from LLM tooling               | **1** – Adversarial robustness noted generally         | **0** – No prompt‑level threat modelling                           |
| Agent privilege escalation via tool misuse                         | **5** – Direct autonomy containment failure                 | **1** – Access control referenced broadly              | **1** – Security governance present but abstract                   |
| Lack of provenance for AI‑generated code or artifacts              | **5** – Central trust issue in agentic SDLC                 | **1** – Data provenance covered, not code              | **1** – Traceability required but nonspecific                      |
| Inability to attribute actions to a specific agent identity        | **5** – Accountability gap unique to autonomous actors      | **1** – Accountability principles present              | **1** – Responsibility assignment required conceptually            |
| Runtime execution of unsafe AI‑written logic in production         | **4** – Elevated by automation speed                        | **1** – Monitoring discussed generally                 | **1** – Operational control expectations exist                     |
| Failure to contain blast radius of autonomous deployment           | **5** – Core resilience risk of agentic CI/CD               | **0** – No deployment containment model                | **0** – No progressive rollout requirement                         |
| Agent goal drift optimising wrong metric                           | **5** – Alignment failure unique to autonomous optimisation | **1** – Harmful outcomes considered broadly            | **1** – Risk management processes apply abstractly                 |
| Economic pressure favouring unsafe AI acceleration                 | **4** – Socio‑technical but intensified by AI productivity  | **0** – Incentives not addressed                       | **0** – Organizational culture noted, not economics                |
| Secrets leakage via generated code or logs                         | **4** – Expanded exposure surface                           | **1** – Privacy/security addressed generally           | **1** – Information security integration expected                  |
| Training data influence introducing hidden vulnerabilities         | **3** – AI‑specific but upstream of SDLC                    | **2** – Strong data governance coverage                | **2** – Data lifecycle governance explicit                         |
| Self‑modifying agents altering their own safeguards                | **5** – Distinctive autonomy hazard                         | **0** – Not structurally addressed                     | **0** – No autonomous safeguard model                              |
| Absence of reliable rollback after AI‑driven deployment            | **4** – Automation increases recovery urgency               | **1** – Incident response mentioned                    | **1** – Continual improvement implied                              |
| Cross‑agent collusion or emergent unsafe coordination              | **5** – Multi‑agent phenomenon                              | **0** – Not covered                                    | **0** – Not covered                                                |

---

## High‑level insight

Across these risks:

* **Most agent‑specific SDLC risks score 0–1 coverage** in both frameworks.
* Existing standards focus on **AI governance and model lifecycle**, not **software‑creating autonomy**.
* The largest structural gaps cluster around:

  * **Autonomous change control**
  * **Independent verification**
  * **Software provenance**
  * **Deployment containment**

These gaps define the core surface for a future **Risk‑First Agentic SDLC framework**.
