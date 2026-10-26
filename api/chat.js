
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Use POST" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: "AI is not configured yet"
    });
  }

  try {
    const { message } = req.body || {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Please send a message"
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        error: "Message is too long"
      });
    }

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          instructions:
            "You are Bartholomew, a curious, friendly learning AI companion. Be helpful, honest, and concise. Do not claim to remember things unless they are provided in the conversation.",
          input: message,
          max_output_tokens: 180
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI request failed:", response.status);
      return res.status(502).json({
        error: "The AI service could not answer"
      });
    }

    const answer = (data.output || [])
      .flatMap(item => item.content || [])
      .filter(item => item.type === "output_text")
      .map(item => item.text)
      .join("");

    return res.status(200).json({ reply: answer });
  } catch (error) {
    console.error("Chat request failed");
    return res.status(500).json({
      error: "Something went wrong"
    });
  }
  }
      
