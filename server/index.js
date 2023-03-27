console.log('Starting server...');

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const openai = require('openai');


dotenv.config();

openai.apiKey = process.env.OPENAI_API_KEY;

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: 'http://localhost:3002',
    credentials: true,
  }));
  
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3002');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });
  
app.use(express.json());

app.post('/api/ask', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    res.json(response.choices[0].text.trim());
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
