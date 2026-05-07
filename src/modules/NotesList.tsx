import { useEffect, useState } from "react"
import { getNotes } from "@/services/notes.service"
import type { Note } from "@/types/note.tsx"
import NoteCard from "./NoteCard"

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadNotes()
  }, [])

  async function loadNotes() {
    try {
      const data = await getNotes()
      setNotes(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <p>Cargando notas...</p>
  }

  return (
    <div className="max-h-[600px] overflow-y-auto pr-2">
      <h2 className="mb-4 text-lg font-semibold">
        Notas existentes
      </h2>

      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
        />
      ))}
    </div>
  )
}