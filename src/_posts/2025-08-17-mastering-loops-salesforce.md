---
title: "Mastering Loops in Salesforce Flows"
pubDate: 2025-08-17
author: "srvanelk@gmail.com"
tags: ["Salesforce", "Flows", "Automation"]
image: "/images/blog/posts/2025/loops.webp"
description: "Loops in Salesforce Flows can feel intimidating at first, but they’re one of the most powerful tools you have as an Admin. Let’s talk about when to use them, why they’re useful, and how to get them right."
---

# Mastering Loops in Salesforce Flows

When I first started building flows, loops honestly scared me. They felt like this mysterious piece of the puzzle that I’d mess up and create infinite flow runs or crash the org. But the truth is, loops are one of the most powerful features of Salesforce Flows. If you’re comfortable using them, they can save you time, reduce clicks, and automate tasks that would otherwise be tedious or error-prone.

In this post, I’m going to break down **when you use loops**, **why you use loops**, and **how to use them properly** so you can build cleaner, smarter automations.

---

## What Is a Loop in a Flow?

In Salesforce Flow, a loop lets you cycle through a collection of records (or values) one at a time. Think of it like saying:  
*"Hey Flow, I’ve got a list of stuff. Please take one item, do something with it, then move to the next one until you’ve gone through the entire list."*

For example:  
- You’ve got 10 open Cases related to an Account.  
- You want to close all of them at once when the Account status changes.  
- Instead of manually updating each case (or creating 10 separate updates in your flow), you use a loop to go one by one through all 10 cases and update them automatically.

---

## Why Use Loops?

Loops help you automate **repetitive record updates** or actions across multiple items without hardcoding each one. Here are some common reasons you’d use a loop in a flow:

1. **Bulk Record Updates**  
   Say you need to update all Contact records when an Account field changes. Loops let you cycle through each Contact and apply updates dynamically.

2. **Conditional Logic for Each Item**  
   Sometimes you don’t want to apply the same change to every record. A loop lets you check conditions for each record individually. For example:  
   - If a Case is “High Priority,” reassign it.  
   - If a Case is “Low Priority,” close it.  
   - If a Case is something else, leave it alone.

3. **Creating Related Records**  
   You might want to loop through a collection of Contacts and create a new Task for each one. Without a loop, that would be impossible to do dynamically.

4. **Cleaning Up Data**  
   Loops make it easy to find and fix issues like missing fields or inconsistent data across related records.

---

## When Should You Avoid Loops?

Loops are powerful, but they can also create performance issues if you’re not careful. Avoid using loops if:  
- You’re dealing with very large data sets (thousands of records).  
- You’re performing operations that could be done in a **single Update Records element** instead of looping one by one.  

The golden rule: **If you can bulk update, do it.** Only loop when you need individual attention per record.

---

## How to Use Loops in a Flow

Here’s the step-by-step of how I typically set one up:

1. **Get Your Collection**  
   Use a **Get Records** element to pull in the records you want to work with. Example: all open Cases on an Account.

2. **Add the Loop Element**  
   Drag in a Loop element and tell it to iterate over the collection you just grabbed.

3. **Do Something Inside the Loop**  
   This is where the magic happens. You can use **Assignment**, **Update Records**, or even create new records as you go.

   Example: Inside the loop, set each Case’s status to “Closed.”

4. **Add the Record to a Collection Variable**  
   This step is crucial! Instead of updating records one by one inside the loop (which can hit limits), assign the changes to a **record collection variable**.

5. **Update All at Once**  
   After the loop finishes, use a single **Update Records** element to save all the changes at once. This avoids governor limit errors and keeps things efficient.

---

## Example: Closing All Open Cases

Here’s a quick real-world example:  

- **Trigger:** When an Account is deactivated.  
- **Get Records:** Find all open Cases related to the Account.  
- **Loop:** Go through each Case.  
- **Assignment (inside loop):** Set the Case Status to “Closed.” Add it to a “CasesToUpdate” collection variable.  
- **Update Records (after loop):** Update all the cases in one go.  

This design pattern is efficient, avoids hitting limits, and works reliably.

---

## Pro Tips for Loops

- **Name your variables clearly.** You’ll thank yourself later. Something like `CurrentCase` is better than `LoopVariable1`.  
- **Always use a collection variable.** Don’t update records directly inside the loop.  
- **Test with small data first.** Try it with a handful of records before running against hundreds.  
- **Watch your entry criteria.** Make sure your Get Records doesn’t accidentally grab more than you expected.

---

## Wrapping It Up

Loops in Salesforce Flow are like the secret sauce of automation. They let you handle dynamic lists of records without manually building one update per record. When used properly, they make your automations more flexible, scalable, and reliable.  

The key is to know when to use them—and when to avoid them. If you need per-record logic or want to generate new records for each item, loops are your best friend. If you just need to mass update, stick with a single Update Records.  

So next time you’re building a flow and find yourself thinking, “How am I going to handle this list of records?”—chances are, the answer is: use a loop.
