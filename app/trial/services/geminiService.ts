import { GoogleGenAI } from "@google/genai";
import { ExamRecord, WeaknessPoint } from "../types";

// Note: In a real production app, this would likely go through a backend proxy
// to protect the API key, or use the user's key if allowed.
// For this demo, we assume the environment variable is available.

const getAIClient = () => {
  // Using a placeholder check. In the real runtime, this relies on process.env.API_KEY
  if (!process.env.API_KEY) {
    console.warn("API Key is missing for Gemini.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateStudyAdvice = async (
  latestExam: ExamRecord,
  weaknesses: WeaknessPoint[]
): Promise<string> => {
  const ai = getAIClient();
  if (!ai) {
    return "AIアドバイス機能を使用するにはAPIキーが必要です。";
  }

  const weakPointsStr = weaknesses
    .filter(w => w.accuracy < 60)
    .map(w => `${w.section}: ${w.category} (${w.accuracy}%)`)
    .join(", ");

  const prompt = `
    あなたはTOEFL ITP対策のプロフェッショナルコーチです。
    以下の学習者の直近の成績データに基づいて、短く簡潔で、かつ励ましになるアドバイスを1つ生成してください。
    
    【学習者データ】
    直近スコア: ${latestExam.totalScore}点
    特に弱い分野: ${weakPointsStr || "特になし（全体的にバランスが良い）"}
    
    【制約】
    - 日本語で出力してください。
    - 140文字以内で完結に。
    - 具体的なアクションプランを1つ含めてください。
    - トーンは「Smart & Encouraging」で。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "現在、アドバイスを生成できませんでした。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "接続エラーが発生しました。後ほど再試行してください。";
  }
};