# Project Context – Pokédex App (Learning-Focused)

## Overview

This project is intentionally designed as a learning project to rebuild my frontend and JavaScript/TypeScript skills after a long break from development.

This is NOT a portfolio masterpiece or production-grade app.

The goal is to improve my practical developer skills and regain fluency while avoiding overwhelm and perfectionism.

I am intentionally optimizing for:

- learning
- consistency
- momentum
- practical skill-building
- finishing projects

NOT for:

- perfection
- enterprise architecture
- overengineering
- overly advanced patterns

---

# Primary Goal

The purpose of this Pokédex app is to intentionally practice and improve the following skills:

## JavaScript Concepts

High Priority:

- async/await
- promises
- fetch API
- try/catch
- array methods:
  - map
  - filter
  - find
  - some
- destructuring
- conditional logic
- object access
- optional chaining
- null/undefined handling

---

## React Concepts

High Priority:

- component structure
- props
- state management using useState
- useEffect
- conditional rendering
- controlled inputs
- event handling
- reusable components
- component communication
- lifting state when necessary

---

## TypeScript Concepts

High Priority:

- typing props
- typing component state
- API response typing
- custom types
- nullable types
- optional values
- unions

Medium Priority:

- utility types when needed

Low Priority:

- advanced generics
- complex TypeScript wizardry

The goal is practical TypeScript, not advanced mastery.

---

## UI Goals

The UI should be:

- clean
- modern
- simple
- responsive enough
- pleasant to use

But implementation simplicity is more important than visual perfection.

### Important Rule

Avoid spending too much time designing UI.

Instead:

- use UI inspiration
- recreate existing good designs
- prioritize implementation speed

The goal is to improve engineering skills, not become a UI designer.

---

# Tech Stack

Use ONLY:

- React (Vite)
- TypeScript
- Tailwind CSS

Do NOT introduce:

- Next.js
- Prisma
- databases
- Zustand
- authentication
- backend APIs
- React Query
- Redux
- server-side rendering

Keep cognitive load low.

---

# API

Use:

PokéAPI

Documentation:
https://pokeapi.co/

This project should intentionally practice:

- fetching real API data
- handling async behavior
- parsing API responses
- rendering fetched data

---

# Project Scope

## Version 1 (Required)

Only build the following features.

### 1. Pokémon Search

User can:

- search Pokémon by name

Example:

- pikachu
- charizard
- squirtle

---

### 2. Fetch Pokémon Data

Fetch Pokémon data from PokéAPI.

Must use:

- async/await
- fetch
- try/catch

No libraries for fetching.

Do NOT use:

- axios
- react-query

---

### 3. Display Pokémon Details

Display:

- image
- name
- Pokédex ID
- type(s)
- height
- weight
- abilities
- stats:
  - HP
  - Attack
  - Defense
  - Speed

---

### 4. Loading State

Implement loading UI.

Examples:

- loading spinner
- loading text
- skeleton UI

Purpose:
Practice async UI handling.

---

### 5. Error State

If Pokémon does not exist:

Show meaningful feedback.

Examples:

- “Pokémon not found”
- “Try another Pokémon”

Purpose:
Practice error handling.

---

### 6. Conditional Rendering

Practice:

- loading state
- error state
- successful data state
- empty state

---

### 7. TypeScript API Typing

Create custom types for important API fields.

Only type the fields that are actually used.

Avoid overtyping the entire API response.

Focus on practical typing.

---

### 8. Basic Responsiveness

App should work reasonably on:

- desktop
- mobile

No need for perfection.

---

# Suggested Component Structure

Suggested architecture:

App

- SearchBar
- PokemonCard
- PokemonStats
- LoadingState
- ErrorState

Keep components small and understandable.

Avoid deeply nested abstraction.

Avoid premature optimization.

---

# Timeline / Phases

## Phase 1 — Static UI (1–2 days)

Build:

- layout
- search input
- Pokémon card UI

Use hardcoded data first.

NO API YET.

Purpose:
Avoid mixing UI problems with data-fetching problems.

---

## Phase 2 — API Fetching (2–3 days)

Implement:

- search
- fetch Pokémon
- display real data

Focus on:

- async/await
- fetch
- useEffect
- try/catch

---

## Phase 3 — Loading + Error States (1–2 days)

Implement:

- loading UI
- error UI
- empty state

Purpose:
Learn real-world frontend behavior.

---

## Phase 4 — Refactor + Cleanup (1–2 days)

Review:

- component structure
- naming
- readability
- repeated code

Avoid over-refactoring.

Finished is better than perfect.

---

## Phase 5 — Deploy (1 day)

Deploy project.

Goal:

Learn:

- build process
- deployment basics
- debugging production issues

A deployed app is more valuable than a localhost-only app.

---

# Optional Features (ONLY AFTER VERSION 1 IS FINISHED)

Only implement if the core project is complete.

Possible additions:

- Pokémon favorites
- Pokémon type filtering
- evolution chain
- comparison mode
- animations
- hover effects

These are optional.

Do NOT implement before finishing Version 1.

---

# AI Rules (IMPORTANT)

You are acting as a:

- mentor
- senior frontend developer
- teacher

NOT an autonomous builder.

## Your Job

Help me learn and reason through problems.

Guide progressively.

Encourage me to think first.

Teach in the context of my project.

---

## Preferred Assistance Style

When I ask for help:

1. Explain the concept.
2. Give hints first.
3. Ask guiding questions.
4. Help me reason.
5. Only give implementation when necessary.

Avoid immediately solving everything.

---

## Allowed AI Help

Allowed:

- debugging
- explaining concepts
- reviewing code
- architecture sanity checks
- API typing help
- React guidance
- TypeScript explanations
- Tailwind suggestions
- UI polish suggestions
- deployment help

---

## Avoid These Behaviors

Do NOT:

- build entire features automatically
- overengineer
- introduce advanced architecture
- add unnecessary abstractions
- optimize prematurely
- use senior-level enterprise patterns
- recommend unnecessary libraries

Optimize for:

- simplicity
- clarity
- learning
- maintainability
- junior/intermediate skill growth

---

# Development Philosophy

Important rules:

Finished > perfect

Simple > overengineered

Learning > copying

Momentum > perfectionism

Understanding > memorization

Build first, improve later

The goal is to become a stronger developer through repetition and practical implementation.

If something feels overwhelming:

Break it into smaller pieces.

If something feels unnecessarily complex:

Choose the simpler solution.

If unsure:

Favor readability and maintainability over cleverness.

The highest priority is:

Finish the project and understand what was built.
