import "dotenv/config";
import { OpenAI } from "openai";

export const openai = new OpenAI({
  organization: "org-RtlCa4eJ6ASwql5LmMnlSKyX",
  apiKey: process.env.OPENAI_KEY,
});
