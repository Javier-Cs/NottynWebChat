import type { Note } from "../types/note"

const API_URL = "https://localhost:7000/api"

export async function getNotes(): Promise<Note[]> {
  const response = await fetch(`${API_URL}/notes`)

  if (!response.ok) {
    throw new Error("Error obteniendo notas")
  }

  return response.json()
}