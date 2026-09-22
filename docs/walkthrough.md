**Walkthrough**
===============

**Step 1: Create a new file**

Create a new file `walkthrough.md` in the `docs` directory.
```markdown
---
id: walkthrough
title: Walkthrough
kind: walkthrough
target_path: docs/walkthrough.md
merge_mode: merge
current_pr_number: #1
---
```
**Step 2: Add a Changelog entry for PR #1**

Add the following Changelog entry to the top of the `walkthrough.md` file:
```markdown
## Changelog

* Updated `app.component.ts`: `title` property changed from `'Universal Product Store'` to `'Universal Product App'`
```
**Step 3: Merge with Existing file**

Merge the changes from `pull-1.diff` into the `walkthrough.md` file.

### Updated sections (auto)

### Runtime view
No changes

### Building blocks
No changes

### Key decisions
No changes

### Manual sections (Existing)
No changes

### Updated sections (merge)
* **Updated endpoint**: `app.component.ts` ( marked with `_updated by PR #1_` )
```markdown
---
id: walkthrough
title: Walkthrough
kind: walkthrough
target_path: docs/walkthrough.md
merge_mode: merge
current_pr_number: #1
---
## Changelog

* Updated `app.component.ts`: `title` property changed from `'Universal Product Store'` to `'Universal Product App'`

### Updated endpoint
* `app.component.ts` (_updated by PR #1_)
```