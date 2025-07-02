**Civic Snap: Local Governance Made Fun**

---

## 1. Introduction

### 1.1 Purpose

This document defines the functional and non-functional requirements for **Civic Snap**, an AI-powered civic education app that delivers localized governance updates, quizzes, budget simulations, and gamified civic challenges to students.

### 1.2 Scope

* **Target Platform:** Web application (responsive) or Progressive Web App (PWA)
* **Users:** Students (age 10+), educators, and administrators
* **Key Features:**

  * Local data integration
  * Age-specific quiz system
  * Budget simulation interface
  * Gamification (leaderboards, badges)

### 1.3 Definitions

* **MVP:** Minimum Viable Product, the initial deliverable for hackathon demonstration.
* **County Data API:** Public or proprietary endpoint for retrieving county-level governance data.

---

## 2. Functional Requirements

### 2.1 User Authentication & Profiles

1. **Sign-Up / Sign-In**

   * Email/password registration
   * Password reset via email
2. **User Profile**

   * Store: name, age or age group, county (auto-detected or selected)
   * Progress tracking: quiz history, points, badges

### 2.2 Quiz System

1. **Question Bank**

   * Questions tagged by age group (e.g., 10–12, 13–15, 16–18)
   * Multiple choice options (4 per question)
   * Correct answer index and explanation text
2. **Quiz Flow**

   * Daily/weekly quiz prompt on login/dashboard
   * Randomize 5–10 questions per session
   * Instant feedback: show correct answer + civic explanation
   * Award points per correct answer
3. **History & Analytics**

   * Store quiz sessions per user
   * Display performance over time

### 2.3 Local Governance Data

1. **Budget & Projects**

   * Fetch budget allocation data (e.g., health, education, infrastructure)
   * Display simple charts (bar, pie) for budget breakdown
   * List ongoing/upcoming county projects with status
2. **AI-Generated Scenarios**

   * Prompt: “You’re county governor—allocate KES 10M across sectors”
   * AI service integration (e.g., OpenAI) to generate scenario descriptions
   * User allocates via sliders; system displays impact summary

### 2.4 Gamification

1. **Points & Badges**

   * Points for quizzes, scenarios, daily challenges
   * Badge criteria (e.g., “Quiz Master” for 50 correct answers)
2. **Leaderboards**

   * Weekly leaderboard per county and age group
   * Display top 10 users with points
3. **Civic Challenges**

   * Weekly challenge descriptions (e.g., attend local meeting, research budget)
   * Users mark completion; earn bonus points

### 2.5 Administration Panel

1. **User & Content Management**

   * CRUD for quiz questions and badges
   * Review and approve AI scenario templates
2. **Analytics Dashboard**

   * Aggregate quiz performance
   * Leaderboard statistics
   * API usage metrics

---

## 3. Non-Functional Requirements

| Category        | Requirement                                     |
| --------------- | ----------------------------------------------- |
| Performance     | API responses < 300ms; Page load < 1s on 4G     |
| Scalability     | Support 10k concurrent users                    |
| Security        | OWASP Top 10 compliance; HTTPS only; JWT auth   |
| Usability       | WCAG AA accessibility; mobile-responsive design |
| Maintainability | Modular code; documented; automated tests       |
| Reliability     | 99.5% uptime; error monitoring & alerts         |
| Localization    | English + Swahili support                       |

---

## 4. Technical Stack

* **Frontend:** React, TailwindCSS, Shadcn/UI, React Router
* **Backend:** Node.js, Express.js, MongoDB (or Supabase/Postgres)
* **AI Integration:** OpenAI API (GPT-4)
* **Auth & Hosting:** Firebase Auth (optional), Vercel/Netlify
* **Data Visualization:** Recharts or Chart.js

---

## 5. Data Models & APIs

### 5.1 User Model

```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "passwordHash": "string",
  "ageGroup": "string",
  "county": "string",
  "points": "number",
  "badges": ["string"],
  "quizHistory": [
    {"date": "ISODate", "score": "number"}
  ]
}
```

### 5.2 Quiz Question Model

```json
{
  "id": "string",
  "question": "string",
  "choices": ["string"],
  "correctIndex": "number",
  "explanation": "string",
  "ageGroup": "string"
}
```

### 5.3 Key API Endpoints

| Method | Endpoint            | Description                       |
| ------ | ------------------- | --------------------------------- |
| POST   | /api/auth/register  | Register user                     |
| POST   | /api/auth/login     | Authenticate user                 |
| GET    | /api/quiz?ageGroup= | Fetch randomized questions        |
| POST   | /api/quiz/submit    | Submit answers, calculate points  |
| GET    | /api/budget?county= | Retrieve budget data for county   |
| POST   | /api/scenario       | Submit budget allocations, get AI |
| GET    | /api/leaderboard    | Weekly leaderboard                |

---

## 6. User Stories

1. **As a student**, I want to take a quick daily quiz so I can learn about my county’s governance.
2. **As a student**, I want to simulate budget allocations so I can understand trade-offs.
3. **As a student**, I want to earn badges and see a leaderboard so I stay motivated.
4. **As an educator**, I want to review quiz results so I can track my students’ progress.
5. **As an admin**, I want to manage quiz content so I can ensure quality and relevance.

---

## 7. Roadmap & Milestones (2–3 Day Hackathon)

| Day   | Morning                                 | Afternoon                       |
| ----- | --------------------------------------- | ------------------------------- |
| Day 1 | Project setup, Auth, User Profiles      | Quiz system MVP                 |
| Day 2 | Budget data integration & visualization | AI scenario integration         |
| Day 3 | Gamification & Leaderboard              | Demo polish & presentation prep |

---

**End of Document**
