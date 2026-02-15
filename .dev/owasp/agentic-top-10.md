
# OWASP Top 10 for Agentic Applications — brief summaries

## ASI01 — Agent Goal Hijack

Attackers manipulate an agent’s **objectives, plans, or decision paths** through prompt injection, malicious artifacts, deceptive tool output, or poisoned data.
Unlike classic prompt injection that changes one response, this redirects **multi-step autonomous behavior** toward harmful outcomes. 

---

## ASI02 — Tool Misuse and Exploitation

Agents misuse **legitimate tools within their permissions**—for example deleting data, over-invoking APIs, or exfiltrating information—due to unsafe delegation, injection, or ambiguity.
The danger lies in **unsafe application of authorized capability**, not privilege escalation. 

---

## ASI03 — Identity and Privilege Abuse

Dynamic delegation, cached credentials, and cross-agent trust allow attackers to **escalate access or impersonate identities**, bypassing least-privilege controls and executing unauthorized actions.
This reflects an architectural gap between **human-centric IAM and autonomous agents**. 

---

## ASI04 — Agentic Supply-Chain Vulnerabilities

Third-party models, tools, prompts, agents, registries, or datasets may be **malicious, compromised, or tampered with**, especially because agentic systems load components **dynamically at runtime**, expanding the attack surface. 

---

## ASI05 — Unexpected Code Execution (RCE)

Generated or injected code can be **executed by the agent**, leading to remote code execution, sandbox escape, persistence, or host compromise—often bypassing traditional controls because execution is **agent-driven and real-time**. 

---

## ASI06 — Memory & Context Poisoning

Attackers corrupt stored **memory, embeddings, summaries, or RAG context**, causing persistent bias, unsafe reasoning, or data leakage across sessions and agents.
This is **long-term contamination**, not a one-time prompt attack. 

---

## ASI07 — Insecure Inter-Agent Communication

Weak authentication, integrity, or confidentiality in **agent-to-agent messaging** enables interception, spoofing, replay, or semantic manipulation, compromising coordination across distributed agent systems. 

---

## ASI08 — Cascading Failures

A single hallucination, poisoned input, or compromised component can **propagate across autonomous agents**, amplifying into system-wide failure because agents plan, persist, and delegate without human checkpoints. 

---

## ASI09 — Human-Agent Trust Exploitation

Attackers exploit **human trust, authority bias, or anthropomorphism** to manipulate users into approving harmful actions, disclosing secrets, or making unsafe decisions—while the agent’s role remains hard to trace. 

---

## ASI10 — Rogue Agents

Agents that become **malicious, misaligned, collusive, or self-propagating** deviate from intended behavior and sabotage workflows, leak data, or manipulate systems—even if individual actions appear legitimate. 
