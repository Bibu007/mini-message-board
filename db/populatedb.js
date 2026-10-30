#! /usr/bin/env node
/*
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR(255),
  message VARCHAR(255),
  added TIMESTAMPTZ
);

INSERT INTO messages (author, message, added) 
VALUES
  ('Bryan', 'Hello World', '2026-10-30T05:15:28+05:30'),
  ('Odin', 'Hey There', '2026-10-30T05:15:28+05:30');
`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: process.env.PSQL_URI,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("done");
  } catch (error) {
    console.error("Database error:", error);
  } finally {
    await client.end();
  }
}

main();
*/

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR(255),
  message VARCHAR(255),
  added TIMESTAMPTZ
);

INSERT INTO messages (author, message, added) 
VALUES
  ('Bryan', 'Hello World', '2026-10-30T05:15:28+05:30'),
  ('Odin', 'Hey There', '2026-10-30T05:15:28+05:30');
`;

async function main() {
  console.log("Seeding database...");

  // Initialize the PostgreSQL client using the DATABASE_URL environment variable
  const client = new Client({
    connectionString: process.env.PSQL_URI,
    ssl: {
      rejectUnauthorized: false, // Required for secure connections to Render databases
    },
  });

  try {
    await client.connect();
    console.log("Connected to Render PostgreSQL database.");

    await client.query(SQL);
    console.log("Database populated successfully!");
  } catch (err) {
    console.error("Error populating database:", err);
  } finally {
    await client.end();
    console.log("Database connection closed.");
  }
}

main();
