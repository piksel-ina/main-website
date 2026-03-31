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

## Rules

### Session completion requires human confirmation

The agent must **never** mark a session status as `[x]` Complete on its own. After all checklist items are done and the build passes, the agent should:

1. Set each checklist item `[x]` and update build status
2. Leave the session status as `[~]` In review (pending review)
3. Present a summary of what was done and ask for confirmation
4. Only change to `[x]` Complete when the human explicitly confirms

This applies to the `progress.md` session header (`**Session status:**`) and the Overall Progress table. Individual checklist items (`1.1`, `1.2`, etc.) may be marked `[x]` by the agent as work progresses.

### Token implementation is mandatory, not optional

A session is not complete just because files were mechanically converted (renamed, BEM applied, `@use` added). Every migrated component must be audited for hardcoded values and snapped to design tokens:

- **Typography** — raw `font-size` values → `text-size()` function
- **Spacing & Layout** — raw `rem` padding/margin/gap/positioning → `space()` function
- **Colors** — raw hex/`white`/`rgb()` → `color()` function or CSS var
- **Border radius** — raw `rem` values → `$card-border-radius` or nearest token
- **Container widths** — component-specific max-widths are OK; general spacing uses `space()`

**Exceptions** (do NOT tokenize): `em`-based component-internal sizing, icon dimensions, opacity, box-shadow, z-index, micro-transforms (e.g. `translateX(4px)`), percentage widths, `vw`-based clip-paths.

If a component still has hardcoded `rem` values that map to an existing token, the migration is incomplete.

### decisions.md — decisions only, not logs

`decisions.md` is for **architectural or design decisions** where alternatives were weighed and a conscious choice was made. It is NOT a changelog or implementation log. Trivial outcomes that are direct consequences of an earlier decision should not be logged separately.
