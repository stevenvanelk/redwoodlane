---
layout: post
title: "Apex Try-Catch Blocks That Actually Help You Debug"
description: "Catching an error isn’t enough. Here’s how to write Apex try-catch blocks that give you real insight when something goes wrong."
keywords: Apex, Error Handling, Debugging, Salesforce Development
hero_image: /images/blog/apex-error-handling.webp
image: /images/blog/apex-error-handling.webp
date: 2025-06-19
permalink: /blog/apex-error-handling-best-practices/
---

We’ve all seen it — an Apex class with a try-catch block that does... nothing.

```apex
try {
    // business logic
} catch (Exception e) {
    // 🙈 quietly fail
}

That kind of error handling makes troubleshooting a nightmare. If something breaks, you get no logs, no visibility, and no clue why.

---

## What a Good Try-Catch Should Do

A try-catch block isn’t just about preventing crashes. It’s about capturing enough context to fix the issue without drowning yourself in noise.  

Here’s how we structure ours:
1. Log the error properly
- At a minimum, call System.debug(e.getMessage());
- Better: store errors in a custom Error Log object with fields for message, stack trace, user, and record context.
- Best: centralize logging in a utility class so every team member uses the same approach.

2. Show user-friendly messages when appropriate
Don’t throw raw stack traces back to an end user. Use AuraHandledException (or similar) to show clear but safe messages like:
“Something went wrong while saving. Please contact support with error ID: 12345.”

3. Catch the right type of exception
Avoid catch (Exception e) everywhere. Be more specific when you can:
- DmlException for database errors
- NullPointerException for unexpected nulls
- CalloutException for integration failures
This makes your logs easier to read and helps pinpoint root causes.

4. Isolate risky logic in helper methods
If you’re catching email failures and DML errors in the same block, it’s time to refactor. Put each “risky” operation in its own method so you can handle failures independently.

---

## Example: From Weak to Strong
Here’s a weak example:

try {
    insert newOpportunity;
} catch (Exception e) {
    // do nothing
}

Here’s the stronger version:

try {
    insert newOpportunity;
} catch (DmlException e) {
    ErrorLogger.logError(
        'Opportunity Insert',
        e.getMessage(),
        e.getStackTraceString(),
        UserInfo.getUserId()
    );
    throw new AuraHandledException('We hit an error creating your Opportunity. Please contact support.');
}

With this pattern:
- Errors are logged in a central place.
- The user sees a friendly message.
- You still preserve the root cause in logs for debugging.

---

## Why This Matters
- **Faster troubleshooting** → You get the stack trace tied to the user and record, not just a vague debug log.
- **Cleaner user experience** → End users aren’t confused by raw Apex error messages.
- **Scalable orgs** → Centralized logging means consistent patterns, not a dozen one-off debug statements.

---

## Key Takeaways
- Don’t let exceptions disappear silently.
- Log errors with enough context to debug later.
- Use user-friendly messages instead of exposing internals.
- Catch specific exceptions when possible.
- Keep risky logic isolated so failures don’t snowball.  

Solid error handling turns surprises into signals — and lets you fix issues before your users even notice.