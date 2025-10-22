"use client"

import { useState, useEffect } from "react";
import OpenAI from "openai";

export default function Home() {
  const client = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const [input, setInput] = useState('')
  const [translations, setTranslations] = useState([])

  useEffect(() => {
    if (translations) {
      for (const translation of translations){
        console.log(translation)
      }
    }
  }, [translations]);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log(input)

    try {
      const response = await client.responses.create({
        model: 'gpt-4o',
        instructions: `This is an item from a questionnaire. Please provide 10 different translations to czech in a JSON format. Do not output anything besides the valid JSON. Do not include '''json. Make the translations an array in the JSON. This is the format of the output: {
    "translations": [
        "Translation 1",
        "Translation 2",
        "Translation 3",
    ]
}`,
        input: input,
      })


      if(response.output_text) {
        const parsedResponse = JSON.parse(response.output_text)
        setTranslations(parsedResponse.translations)
        console.log(response.output_text)
      }

    } catch (error) {
      console.error('Translation Failed')
    }
    

    


  }

  return (
      <main>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <button type="submit">Translate</button>
        </form>
      </main>
  );
}

