# _task/scss-migration/

This directory tracks the multi-session SCSS migration for the Piksel main website.

## Files

| File | Purpose |
|------|---------|
| `plan.md` | Master plan — architecture, session breakdown, file inventory, risk mitigation |
| `progress.md` | Per-session checklist with status tracking. Update as you work. |
| `decisions.md` | Decision log — every architectural/design choice with rationale |

## How to Resume a Session

1. Open `progress.md`
2. Find the current session (lowest numbered `[~]` or first `[ ]`)
3. Read `plan.md` for that session's scope and target files
4. Check `decisions.md` for any constraints or prior choices
5. Continue from the first unchecked item
6. Mark items `[x]` as you complete them, `[~]` when starting
7. Update session status and build status at end of each session block
8. Log any new decisions in `decisions.md`

## Conventions

- Use `[ ]`, `[~]`, `[x]`, `[-]` for task status
- Date every decision entry
- Record build pass/fail at end of each session
- If a session is partially completed, leave `[~]` on in-progress items
