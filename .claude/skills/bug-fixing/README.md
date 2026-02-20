# Bug Fixing Skill

Systematic approach to bug classification, diagnosis, and resolution.

## Bug Classification

### By Severity
- **Critical**: System crashes, data loss, security vulnerabilities
- **High**: Major feature broken, no workaround
- **Medium**: Feature impaired but workaround exists
- **Low**: Minor issues, cosmetic problems

### By Type
- **Logic Errors**: Incorrect algorithm or business logic
- **Runtime Errors**: Exceptions, crashes, memory issues
- **Integration Errors**: API mismatches, protocol issues
- **Concurrency Errors**: Race conditions, deadlocks
- **UI/UX Errors**: Display issues, interaction problems

## Diagnosis Process

1. **Reproduce** - Create minimal reproduction steps
2. **Isolate** - Narrow down to specific component/function
3. **Trace** - Follow execution path to error source
4. **Identify** - Determine root cause vs symptoms
5. **Verify** - Confirm hypothesis with additional tests

## Resolution Strategies

### Quick Fixes
- Null checks and defensive programming
- Input validation
- Error boundary additions

### Structural Fixes
- Refactor problematic code paths
- Add missing state management
- Fix race conditions with proper synchronization

### Preventive Measures
- Add regression tests
- Improve error handling
- Add logging for future debugging

## Documentation Template

```markdown
## Bug Report
**ID**: [unique identifier]
**Severity**: [Critical/High/Medium/Low]
**Type**: [Logic/Runtime/Integration/Concurrency/UI]

### Description
[What is happening]

### Expected Behavior
[What should happen]

### Root Cause
[Why it's happening]

### Fix Applied
[What was changed]

### Testing
[How fix was verified]
```
