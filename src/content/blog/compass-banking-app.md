---
title: "Compass Banking App redesign"
description: "How we rebuilt the mobile onboarding journey to earn trust and unlock a 71% lift in new accounts."
pubDate: 2023-11-09
updatedDate: 2024-02-17
heroImage: "/blog-placeholder-1.jpg"
---

## Brief

Compass Bank invited me to lead the redesign of their flagship mobile experience. New
account creation dropped 18% quarter-over-quarter, support tickets citing confusing
flows were stacking up, and accessibility complaints were on the rise. The ask was to
stabilize growth without forcing customers back to a branch.

We structured the year-long engagement in three phases:

1. **Discover** — interview customers, benchmark the experience, and quantify friction.
2. **Design & validate** — prototype new flows, test them with customers across
   ability levels, and measure success through moderated sessions.
3. **Launch & scale** — partner with engineering and compliance to deliver accessible
   UI patterns and establish the rituals to maintain them.

## What we found

- Customers didn’t understand why the app required 11 permissions before showing an
  account dashboard. We reduced the count to four and delayed the rest until they were
  contextually relevant.
- 62% of sign-ups stalled on document upload because of a legacy interaction that only
  worked with pinch-to-zoom.
- Color contrast failed WCAG AA on 43 screens, leading to app store reviews from low
  vision customers describing the app as “illegible.”

## Crafting the solution

### Untangling onboarding

We reframed onboarding as a story arc rather than a form. Working with compliance we
mapped the regulatory requirements, chunked them into digestible steps, and wrote
plain-language explanations. Motion was used sparingly to guide attention without
introducing dizziness for vestibular-sensitive customers.

### Designing for trust

A visual language rooted in calm blues and high contrast neutrals replaced the neon
palette that previously signaled “gaming app.” Microcopy was rewritten in partnership
with the legal team to remove jargon. We added friendly progress indicators that were
perceivable by screen readers, tested with VoiceOver and TalkBack users, and shipped in
both English and Spanish.

### Systems for longevity

We codified patterns in Figma and Storybook, then set up weekly design critiques with
engineering. A centralized token system drove consistency and ensured that future
components inherited accessibility defaults.

## Outcomes

- **71%** of new accounts are now opened on mobile — up from 45% prior to launch.
- **26%** reduction in support tickets tied to “can’t finish signing up.”
- App Store rating climbed from **3.6 to 4.4** in the first 60 days post-launch.

Most importantly, customers began telling us they finally “trusted” the app to manage
their money. That trust is the foundation Compass is now using to expand into small
business banking.
