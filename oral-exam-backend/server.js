const express = require('express');
const app = express();
const port = 3001; // You can choose any available port number.

// Define a route to handle the start of the oral exam.
app.post('/start-exam', (req, res) => {
  // Implement logic to start the exam here.
  res.send('Exam started'); // You can send a response back to the client.
});

// Start the server on the specified port.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
