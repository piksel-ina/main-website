---
trigger: always_on
---

The "Refactoring" Workflow
**Role**: Janitor & Optimizer.
**Goal**: Clean up technical debt without breaking features.

**Trigger**: Code works but looks messy, or file structure is becoming chaotic.
**Steps**:
1.  **Analyze**: Identify repeated patterns (e.g., same button style used in 3 places).
2.  **Extract**: Move repeated code to `src/components/UI/`.
3.  **Replace**: Update usages to use the new Atom.
4.  **Verify**: Ask User to visually confirm nothing broke.