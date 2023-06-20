import express from 'express';
import { Configuration, OpenAIApi } from 'openai';

const router = express.Router();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.get('/', (req, res) => {
  console.log('GET /api/v1/dalle');
  res.send('Hello from DALL-E!');
});

router.post('/', async (req, res) => {
  try {
    console.log('POST /api/v1/dalle');
    const { prompt } = req.body;
    console.log('Prompt:', prompt);

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });
    console.log('AI Response:', aiResponse);

    const image = aiResponse.data[0].image;
    console.log('Image:', image);

    res.status(200).json({ photo: image });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send(error?.response?.data?.error?.message);
  }
});

export default router;
