---
layout: post
title: "Ask Better Questions: How to Get the Right Requirements"
description: "People ask for features, but what they really need is a solution. Here’s how we go beyond requests to uncover real business needs."
keywords: Business Analysis, Salesforce Requirements, Admin Strategy, UX Design
hero_image: /images/blog/requirements-interviewing.webp
image: /images/blog/requirements-interviewing.webp
date: 2025-06-20
permalink: /blog/salesforce-requirements-analysis/
---

Early in my Salesforce career, I used to build exactly what was asked.

“Can you add a checkbox?”  
“Can you make a flow that assigns this to marketing?”  
“Can we just copy this old spreadsheet into Salesforce?”

And guess what? Half the time, what I built wasn’t actually what they needed.

These days, I ask a better question first:  
> “What’s the problem you’re trying to solve?”

That question alone has changed my approach.

When a client asked for a “training completed” checkbox, it led to a conversation about tracking attendance across multiple sessions, logging instructor feedback, and showing a full training history — not something you can solve with a checkbox.

---

## Why Requirements Gathering Fails

The biggest trap Salesforce admins and developers fall into is becoming “order takers.” It’s easy to capture what people *say* they want and miss what the business *actually* needs. When you only document requests, you risk:
- Building features that don’t solve the root issue  
- Wasting time re-working automation after rollout  
- Creating clutter in Salesforce that confuses users  

A checkbox might work for one department, but what happens when another team needs reporting across sessions, managers want dashboards, and compliance requires audit tracking? Suddenly, that “simple checkbox” turns into three different projects.

---

## The Shift: From Requests to Needs

The way out is asking better questions. Instead of writing down “add checkbox,” start uncovering the real requirement:

- **Ask about the process, not just the feature**  
  *“Walk me through what happens when training is completed today.”*  
- **Clarify the why**  
  *“Why do you need to know if training is completed? Who uses that info?”*  
- **Surface the impact**  
  *“What happens if we don’t track this correctly?”*  

By focusing on context, you uncover needs that the business user may not have fully articulated.

---

## Techniques for Asking Better Questions

Here are three approaches I use when running requirements sessions:

1. **The “Five Whys”**  
   Keep asking *why* until you uncover the root need. Example:  
   - “Why do you need the checkbox?” → “To see if someone finished training.”  
   - “Why do you need to see that?” → “So managers know who’s certified.”  
   - “Why is that important?” → “Because compliance requires it.”  

   By the third or fourth why, you’re already closer to the real business driver.

2. **Scenario Walkthroughs**  
   Instead of asking abstract questions, walk through a real example.  
   *“Pretend I’m a new hire finishing training — what happens step by step?”*  
   These walkthroughs often reveal edge cases and exceptions that wouldn’t come up otherwise.

3. **Future-State Thinking**  
   Ask how they’d like things to look ideally, without technical constraints.  
   *“If you could wave a magic wand, how would you track training?”*  
   This helps surface aspirations that can shape a scalable design.

---

## Validating Requirements Before Building

Even after uncovering needs, don’t jump straight into Flow Builder. Validate what you heard by:
- Summarizing the problem back to the user in plain language  
- Sketching a simple diagram or mockup before development  
- Confirming how success will be measured  

This not only prevents wasted development time, it builds trust with stakeholders who feel heard.

---

## Salesforce in Practice

Here’s a quick example.  
A manager once asked me for a “button to mass-assign leads.” After questions, I learned the real pain was inconsistent territory assignment rules. The solution wasn’t a button — it was refining lead assignment logic and automating the process with criteria-based assignment rules. The manager’s job got easier, the team stopped fighting over leads, and reporting became cleaner.

Salesforce gives us powerful tools (Flows, Apex, validation rules, custom objects, etc.), but those tools only shine when they’re applied to the *right* problem.

---

## Key Takeaways

**Great admins and developers don’t just gather requirements — we uncover them.**  

That means:
- Listening for pain points, not just feature requests  
- Digging into how users work, not just what they say  
- Validating your understanding before writing a single line of automation  

Salesforce is powerful, but only when we solve the *right* problems. Better questions lead to better systems — and happier teams.

---

👉 Next time someone asks you for a checkbox, flow, or button, pause before opening Setup. Ask the better question first.  
