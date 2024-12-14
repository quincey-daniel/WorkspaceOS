import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? {
    rejectUnauthorized: false
  } : false
});

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Basic validation
    if (!data.age_group || !data.occupation || !data.tech_comfort_level) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Convert would_use to boolean if it's a string
    if (typeof data.would_use === 'string') {
      data.would_use = data.would_use === 'true';
    }

    // Convert price to number
    data.price_willing_to_pay = parseFloat(data.price_willing_to_pay);

    const query = `
      INSERT INTO responses (
        age_group,
        occupation,
        tech_comfort_level,
        problem_relevance,
        current_solution,
        pain_points,
        solution_rating,
        would_use,
        price_willing_to_pay,
        feature_priorities,
        suggestions,
        concerns
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING id
    `;

    const values = [
      data.age_group,
      data.occupation,
      data.tech_comfort_level,
      data.problem_relevance,
      data.current_solution,
      data.pain_points,
      data.solution_rating,
      data.would_use,
      data.price_willing_to_pay,
      data.feature_priorities,
      data.suggestions,
      data.concerns
    ];

    const result = await pool.query(query, values);
    
    return NextResponse.json(
      { message: 'Feedback submitted successfully', id: result.rows[0].id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}