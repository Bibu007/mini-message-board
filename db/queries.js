const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log(rows);
  return rows;
}

async function insertMessage(messageUser, messageText, added) {
  await pool.query(
    "INSERT INTO messages (author, message, added) VALUES ($1, $2, $3)",
    [messageUser, messageText, added],
  );
}

module.exports = {
  getAllMessages,
  insertMessage,
};
