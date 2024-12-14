# Product Validation App - WorkspaceOS

A web application to validate the product concept for WorkspaceOS, a solution for remote work communication challenges.

## Problem Statement

Remote workers struggle with "workspace context switching" - constantly jumping between different communication tools leads to reduced productivity, missed messages, and communication fatigue.

## Solution

WorkspaceOS is an intelligent workspace orchestration platform that creates a unified communication experience while letting users keep their existing tools.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Set up the PostgreSQL database:
```bash
# Connect to PostgreSQL
psql -U postgres

# In the PostgreSQL prompt:
CREATE DATABASE product_validation_db;
\c product_validation_db
\i db/schema.sql
```

3. Configure environment variables:
- Copy `.env.local.example` to `.env.local`
- Update DATABASE_URL with your PostgreSQL credentials

4. Run the development server:
```bash
npm run dev
```

## Project Structure

- `/app` - Next.js app directory
  - `/api` - API routes for form submission
  - `page.js` - Main application page
  - `layout.js` - Root layout component
- `/components` - React components
  - `ProblemStatement.js` - Problem description
  - `SolutionPresentation.js` - Solution details
  - `FeedbackForm.js` - User feedback form
- `/db` - Database setup and queries

## Data Collection

The application collects:
- Demographics (age, occupation, tech comfort)
- Problem validation
- Solution feedback
- Feature priorities
- Price sensitivity
- Open feedback

## Analysis

Data can be analyzed using PostgreSQL queries to understand:
- Problem-solution fit
- Feature priorities
- Price sensitivity
- User segments
- Common concerns and suggestions

## Running Queries

Example queries for analysis:

```sql
-- Average solution rating by age group
SELECT age_group, AVG(solution_rating) as avg_rating
FROM responses
GROUP BY age_group
ORDER BY avg_rating DESC;

-- Most requested features
SELECT unnest(feature_priorities) as feature,
       COUNT(*) as count
FROM responses
GROUP BY feature
ORDER BY count DESC;

-- Price sensitivity analysis
SELECT
  age_group,
  AVG(price_willing_to_pay) as avg_price,
  MIN(price_willing_to_pay) as min_price,
  MAX(price_willing_to_pay) as max_price
FROM responses
GROUP BY age_group;
```