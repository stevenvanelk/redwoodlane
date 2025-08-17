---
layout: post
title: "Why We Use Custom Metadata to Simplify Flows"
description: "Hardcoding values into flows leads to frustration down the road. Here’s how Custom Metadata Types let us scale automation cleanly."
keywords: Salesforce Automation, Flows, Custom Metadata, Best Practices
hero_image: /images/blog/flows-metadata-clean.webp
image: /images/blog/flows-metadata-clean.webp
date: 2025-06-18
permalink: /blog/flows-with-custom-metadata/
---

If you've ever had to update a flow because a picklist value changed or a rule shifted, you already know the pain of hardcoded logic.

Example:  
- Sales adds a new **Lead Source** value.  
- A flow breaks because a Decision element was checking for exact text.  
- You spend the afternoon updating multiple branches just to keep the automation running.  

That’s the hidden cost of hardcoding.

---

## The Case for Custom Metadata Types

One of our favorite ways to reduce that friction is using **Custom Metadata Types (CMDT)** to drive logic in flows.  

Instead of multiple Decision elements tied to static values, we set up **metadata records** that map inputs to outcomes — things like categories, priorities, or assignment rules.

Then in the flow, we simply **Get Records** from that metadata type to determine the right path forward.

---

## Example: Assignment by Priority

Let’s say you want Cases with different priorities to route differently.  
The hardcoded version might look like this:

```apex
// In a flow Decision element
IF Priority = "High" → Assign to Escalation Queue
IF Priority = "Medium" → Assign to Support Queue
IF Priority = "Low" → Assign to Triage Queue
```

The CMDT-driven version replaces all that branching with a single lookup:
1. **Custom Metadata Type:** Case_Routing__mdt
- Fields: Priority__c, Queue__c
- Records:
    - High → Escalation Queue
    - Medium → Support Queue
    - Low → Triage Queue
2. **Flow:**
- Get Records: Case_Routing__mdt where Priority__c = {!Case.Priority}
- Assignment: Route to the Queue__c returned  

Now, when business changes? You just add or update a metadata record — no flow edit required.

---

## Benefits
- **Admins can change behavior without modifying the flow**  
No need to open Flow Builder for every new picklist value or rule.
- **Logic stays readable, reusable, and scalable**  
A single Get Records replaces a tangle of Decision branches.
- **No more chasing down every branch when something changes**  
All the logic lives in one metadata table, not scattered across flows.

---

## Pro Tips
- **Pair with Permission Sets** so only admins can update metadata.
- **Document your metadata model** — if someone adds a record later, they should understand how it impacts flows.
- **Think reusability** — the same metadata type can be referenced in multiple flows or even Apex.

---

## Key Takeaway
Metadata-driven automation doesn’t just simplify updates — it helps you **build smarter, more resilient flows** from the start.  
The next time you’re tempted to hardcode a value in a Decision element, pause and ask: Should this live in Custom Metadata instead?