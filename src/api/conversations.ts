import type { Conversation } from '../types/conversation'
export async function getConversations(): Promise<Conversation[]> {
  const response = await fetch('/api/conversations')
  if (!response.ok) throw new Error('We couldn’t load your inbox.')
  return response.json() as Promise<Conversation[]>
}
export async function updateConversation(id: string, update: Partial<Conversation>): Promise<Conversation> {
  const response = await fetch(`/api/conversations/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(update) })
  if (!response.ok) { const data = await response.json() as { message?: string }; throw new Error(data.message ?? 'Update failed') }
  return response.json() as Promise<Conversation>
}
