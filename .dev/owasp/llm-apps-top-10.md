# OWASP Top 10 for LLM Applications 2025 — brief summaries

## LLM01 — Prompt Injection

Malicious or unintended inputs manipulate model behavior, bypass safeguards, expose data, trigger tool use, or alter decisions—even when hidden in external content or multimodal inputs.
Mitigation relies on constrained behavior, strict validation, filtering, least-privilege access, and human approval for high-risk actions. 

---

## LLM02 — Sensitive Information Disclosure

LLMs may reveal **PII, credentials, proprietary data, or training information** through outputs or model behavior, causing privacy or IP breaches.
Defenses include sanitization, strict access control, privacy-preserving learning, transparency, and secure configuration. 

---

## LLM03 — Supply Chain

Risks arise from **third-party models, datasets, libraries, fine-tuning adapters, or cloud infrastructure**, which may be vulnerable, poisoned, tampered, or malicious.
Mitigation centers on provenance, red-teaming, SBOMs, patching, licensing governance, and integrity verification. 

---

## LLM04 — Data and Model Poisoning

Attackers manipulate **training, fine-tuning, or embedding data** to introduce bias, backdoors, or degraded behavior—potentially creating sleeper-agent-style triggers.
Controls include dataset provenance tracking, validation, sandboxing, anomaly detection, versioning, and adversarial testing. 

---

## LLM05 — Improper Output Handling

Unsanitized LLM outputs passed into downstream systems can enable **XSS, SQL injection, SSRF, privilege escalation, or remote code execution**.
Secure design treats model output as untrusted input, enforcing validation, encoding, parameterization, monitoring, and zero-trust handling. 

---

## LLM06 — Excessive Agency

Granting LLMs **too much autonomy, functionality, or permission** enables damaging real-world actions triggered by hallucination, injection, or ambiguity.
Mitigation focuses on minimizing extensions, permissions, and autonomy, enforcing authorization externally, and requiring human approval for critical actions. 

---

## LLM07 — System Prompt Leakage

System prompts may expose **secrets, permissions, architecture, or filtering logic**, enabling attackers to bypass controls or escalate privileges.
Security must not rely on hidden prompts; sensitive data and enforcement should reside outside the LLM. 

---

## LLM08 — Vector and Embedding Weaknesses

Weaknesses in **RAG pipelines, embeddings, or vector stores** can enable data leakage, poisoning, or retrieval manipulation that corrupts model grounding and outputs.
Securing retrieval infrastructure and validating embedded data are key defenses. 

---

## LLM09 — Misinformation

LLMs can generate **incorrect, biased, or fabricated information** that influences users or decisions, creating reputational, legal, or operational harm.
Mitigation requires validation, provenance, monitoring, and human oversight of high-impact outputs. 

---

## LLM10 — Unbounded Consumption

LLM usage may cause **excessive resource consumption, denial-of-wallet costs, or uncontrolled scaling**, expanding traditional DoS into economic and operational risk.
Controls include rate limiting, quotas, monitoring, and resource governance. 

---

# Structural insight (useful for your Risk-First framing)

Compared with the **Agentic Top 10**, this list focuses more on:

* **Model- and data-centric vulnerabilities**
* **Application-level security failures**
* **Resource and information risks**

— whereas agentic risks emphasize **autonomy, delegation, and systemic behavior**.

This distinction is useful for framing:

➡ **LLM risk = information & pipeline security**
➡ **Agentic risk = autonomous action & system control**
