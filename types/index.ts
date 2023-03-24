// src/types.ts
export enum OpenAIModel {
  GPT_3_5 = "gpt-3.5-turbo",
  GPT_4 = "gpt-4", // Add GPT-4 model here
}

export const OpenAIModelNames: Record<OpenAIModel, string> = {
  [OpenAIModel.GPT_3_5]: "GPT-3.5 Turbo",
  [OpenAIModel.GPT_4]: "GPT-4", // Add GPT-4 model display name here
};


export interface Message {
  role: Role;
  content: string;
}

export type Role = "assistant" | "user";

export interface Conversation {
  id: number;
  name: string;
  messages: Message[];
}
