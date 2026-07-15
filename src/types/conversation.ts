export type Priority = 'urgent' | 'high' | 'normal'
export type Sentiment = 'negative' | 'neutral' | 'positive'
export type ConversationStatus = 'new' | 'assigned' | 'snoozed' | 'resolved'

export interface Message { id: string; author: string; role: 'customer' | 'ai' | 'agent'; body: string; time: string }
export interface Conversation {
  id: string; customer: { name: string; initials: string; company: string }
  reason: string; priority: Priority; priorityScore: number; waitingMinutes: number
  sentiment: Sentiment; status: ConversationStatus; assignee?: string; summary: string
  nextAction: string; history: Message[]
}
