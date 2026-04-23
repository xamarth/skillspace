---
name: update-skillcard-and-root-route
description: Workflow command scaffold for update-skillcard-and-root-route in skillspace.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /update-skillcard-and-root-route

Use this workflow when working on **update-skillcard-and-root-route** in `skillspace`.

## Goal

Updates to the skillcard component and main/root route files, likely related to UI or feature changes on the homepage or dashboard.

## Common Files

- `src/components/skillcard.tsx`
- `src/routes/__root.tsx`
- `src/routes/index.tsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit src/components/skillcard.tsx to update the skill card UI or logic
- Edit src/routes/__root.tsx and/or src/routes/index.tsx to reflect changes in the main route or homepage

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.