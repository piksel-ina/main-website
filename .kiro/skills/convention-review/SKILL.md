---
name: convention-review
description: Audit changed files against this project's conventions in AGENTS.md and fix violations. Use when reviewing code hygiene, checking before commit, or when the user says "review my changes", "check conventions", "audit my work", or "code hygiene check". Catches what linters and the build don't — the soft conventions that depend on human judgment.
---

# Convention Review

Audit a diff against the project's conventions. The check runs in an isolated subagent for unbiased judgment; the main agent applies any fixes.

## Procedure

1. Run `npm run check` and fix anything it reports. This clears lint, style, and formatting issues mechanically so the subagent only deals with structural and convention judgment.

2. Determine the diff range. Default: `git diff HEAD` (staged + unstaged against the last commit). For PR-scope review use the branch's diff against `main`. For a specific commit use that commit's diff.

3. Use the `subagent` tool to dispatch a single `kiro_default` stage with this prompt:

   > Read `.kiro/skills/convention-review/patterns.md`. AGENTS.md is already in your steering.
   >
   > Run `<the diff command from step 2>` and identify, for each change:
   >
   > 1. Whether the code belongs where it is and follows the pattern its neighbors use.
   > 2. Whether it smells — duplication, working around existing patterns, hardcoded values where tokens or data files exist, hand-edits to generated structure.
   >
   > Return findings as a flat list: `<file>:<line> — <what's off>`. Identification only, no fixes. No fixed checklist — judge against the patterns and AGENTS.md.

4. Receive the findings.

5. Apply fixes directly to the codebase.

6. Surface to the user only when:
   - The fix would override apparent deliberate intent (e.g., the diff added `clamp()` and context suggests it was on purpose).
   - The rule application is ambiguous (AGENTS.md is silent or two rules appear to conflict).

7. When done, tell the user what you fixed and what (if anything) you flagged for them.
