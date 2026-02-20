# Git Operations Skill

Advanced git workflows and best practices for development teams.

## Branch Strategies

### GitFlow
- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - New features
- `release/*` - Release preparation
- `hotfix/*` - Production fixes

### Trunk-Based
- `main` - Single source of truth
- Short-lived feature branches (< 2 days)
- Feature flags for incomplete work

## Common Workflows

### Feature Development
```bash
git checkout -b feature/description
# ... make changes
git add -A
git commit -m "feat: description"
git push -u origin feature/description
# Create PR
```

### Hotfix
```bash
git checkout main
git pull origin main
git checkout -b hotfix/description
# ... fix issue
git commit -m "fix: description"
git push -u origin hotfix/description
# Create PR, merge to main AND develop
```

### Rebase Workflow
```bash
git fetch origin
git rebase origin/main
# Resolve conflicts if any
git push --force-with-lease
```

## Commit Convention

Format: `<type>(<scope>): <description>`

Types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance

## Conflict Resolution

1. Identify conflicting files: `git status`
2. Open files and locate conflict markers
3. Choose correct code (ours/theirs/merge)
4. Remove conflict markers
5. Stage resolved files: `git add <file>`
6. Continue: `git rebase --continue` or `git merge --continue`

## Useful Commands

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Stash changes
git stash push -m "description"
git stash pop

# Interactive rebase (squash commits)
git rebase -i HEAD~n

# Cherry-pick commit
git cherry-pick <commit-hash>

# View file history
git log --follow -p -- <file>
```
