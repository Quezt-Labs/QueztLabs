---
title: "AI in My Editor, Not in My Brain"
excerpt: "How we actually use Cursor/ChatGPT for work — prompts that help, tasks we refuse to outsource, and why 'AI wrote it' isn't an excuse."
author: Quezt Labs
authorRole: Quezt Labs
authorAvatar: /logo.png
date: 2026-05-20
readTime: 15 min read
category: "AI & Tools"
image: /analytics-dashboard-data-visualization-dark-theme.jpg
featured: false
tags:
  - AI
  - cursor
  - workflow
---

## The question we get every week

_"Bro, poora app AI se bana dete ho?"_

**Short answer:** nahi.  
**Long answer:** AI is in our editor all day — but judgment, architecture, and accountability stay human.

Think of it as a **very fast intern**: great at drafts, dangerous when unsupervised on production keys.

## How AI fits in our stack (not replacing it)

```mermaid
flowchart TB
  subgraph human["Human owns"]
    H1[Scope & promises]
    H2[Auth / payments / permissions]
    H3[Perf & production incidents]
    H4[Final merge decision]
  end
  subgraph ai["AI accelerates"]
    A1[Boilerplate & refactors]
    A2[Regex / SQL drafts]
    A3[Error explanation]
    A4[Test scaffolds]
  end
  human --> ai
  ai --> human
```

## Daily use matrix

| Task            | AI role            | Human role            |
| --------------- | ------------------ | --------------------- |
| Regex / parsing | Draft + explain    | Verify edge cases     |
| Drizzle / SQL   | Draft query        | Check indexes & N+1   |
| UI layout       | First pass         | Design tokens & a11y  |
| Error messages  | Decode stack trace | Reproduce locally     |
| Tests           | Scaffold cases     | Assert real behaviour |
| Commit messages | Polish             | Own the actual change |

## What we refuse to outsource

- **Who can access what** (RLS, roles, tenant boundaries)
- **Money movement** (checkout, webhooks, refunds)
- **Timeline promises to clients**
- **"Why is prod slow?"** — AI guesses; profiling answers
- **Deleting user data** — one wrong `DELETE` is a headline

```mermaid
sequenceDiagram
  participant Dev
  participant AI
  participant CI
  participant Prod
  Dev->>AI: Draft feature diff
  AI-->>Dev: Code + explanation
  Dev->>Dev: Read diff, run locally
  Dev->>CI: Push small PR
  CI-->>Dev: Lint, types, build
  Note over Dev,Prod: Human approves merge
  Dev->>Prod: Deploy
```

## Prompt template that actually works

**Weak prompt:**

> make login work

**Strong prompt:**

```text
Context:
- Next.js 15 App Router, TypeScript strict
- Drizzle + Postgres (Neon), existing users table
- No new npm packages without asking

Task:
- Magic link login, httpOnly session cookie
- Server Action for send-link + verify

Output:
- List files you will change first
- Then show patches only (no full file dumps unless new file)
- Call out security risks in bullets
```

The **constraints** are the difference between help and chaos.

## The four-step loop we repeat

1. **Plan in bullets** — no code until the plan looks sane
2. **Implement smallest slice** — one file group at a time
3. **Run + break it** — happy path and one sad path
4. **Document the surprise** — team note if AI suggested something wrong twice

```mermaid
stateDiagram-v2
  [*] --> Plan
  Plan --> Implement: approved
  Plan --> Plan: scope unclear
  Implement --> Verify: diff applied
  Verify --> Ship: tests + build ok
  Verify --> Implement: failed
  Ship --> [*]
```

## When AI makes you slower

- Accepting 400-line diffs you never scroll
- Arguing with wrong abstractions for an hour instead of reverting
- Letting it add dependencies you do not recognise
- Skipping official docs because the chat "sounded confident"

**Rule:** if you have not run the code, you have not shipped — you have only pasted.

## Tooling we actually use (2026)

| Tool                | Use case                               |
| ------------------- | -------------------------------------- |
| Cursor / IDE agents | In-repo edits, multi-file refactors    |
| Chat (GPT-class)    | Architecture spikes, explaining errors |
| CI                  | Truth — build must pass                |
| Staging             | Click the flow with realistic data     |

We do not care which brand wins the hype cycle. We care what survives `pnpm build` and a client demo.

## For juniors: learn, do not skip

Use AI to **explain** a concept after you tried for 20 minutes.  
Do not use it to **skip** understanding hooks, SQL, or HTTP.

The developers who win long-term still know _why_ the fix worked.

## For founders hiring us

You are not paying for tokens. You are paying for:

- Knowing which 20% to vibe
- Knowing which 20% to never touch without review
- Shipping a URL that works when investors click it

## TL;DR

**Copilot, not autopilot.** AI in the editor; brain on the critical path.

---

**Related:** [Vibe coding guardrails](/blog/vibe-coding-without-losing-the-plot) · [When the AI confidently lies](/blog/when-the-ai-confidently-lies)
