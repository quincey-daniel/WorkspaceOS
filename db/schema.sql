-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create responses table for feedback
CREATE TABLE responses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    -- Demographics
    age_group VARCHAR(20) NOT NULL,
    occupation VARCHAR(100) NOT NULL,
    tech_comfort_level INTEGER NOT NULL, -- 1-5 scale
    
    -- Problem Validation
    problem_relevance INTEGER NOT NULL, -- 1-5 scale
    current_solution TEXT,
    pain_points TEXT,
    
    -- Solution Feedback
    solution_rating INTEGER NOT NULL, -- 1-5 scale
    would_use BOOLEAN NOT NULL,
    price_willing_to_pay DECIMAL(10,2),
    feature_priorities TEXT[],
    
    -- Open Feedback
    suggestions TEXT,
    concerns TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for analytics
CREATE INDEX idx_responses_age_group ON responses(age_group);
CREATE INDEX idx_responses_occupation ON responses(occupation);
CREATE INDEX idx_responses_solution_rating ON responses(solution_rating);
