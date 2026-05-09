import { useEffect, useState } from "react"
import { getNotes } from "@/services/notes.service"
import type { Note } from "@/types/note.tsx"

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

  return (
    <aside
      className="
        relative
        self-start
        rounded-3xl
        border
        border-zinc-700
        p-5
        backdrop-blur-xl
        shadow-2xl
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-b
        "
      />

      {/* Header */}
      <div className="relative mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-black dark:text-zinc-100">
            Notas
          </h2>

          <p className="text-sm text-zinc-700 dark:text-zinc-400">
            Your saved documents and snippets
          </p>
        </div>
        
     

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900
            text-sm
            text-zinc-300
          "
        >
          {notes.length}
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <input
          type="text"
          placeholder="Search notes..."
          className="
            w-full
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900/80
            px-4
            py-3
            text-sm
            text-zinc-100
            outline-none
            transition-all
            duration-300
            placeholder:text-zinc-500
            focus:border-cyan-400/40
            focus:shadow-[0_0_20px_rgba(34,211,238,0.08)]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
          "
        >
          ⌕
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
                animate-pulse
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/60
                p-4
              "
            >
              <div className="mb-3 h-4 w-24 rounded bg-zinc-800" />

              <div className="mb-2 h-3 w-full rounded bg-zinc-800" />

              <div className="h-3 w-2/3 rounded bg-zinc-800" />
            </div>
          ))}
        </div>
      )}

      {/* Notes */}
      {!loading && (
        <div
          className="
            relative
            max-h-[70vh]
            space-y-4
            overflow-y-auto
            pr-2
          "
        >
          {notes.length === 0 && (
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-zinc-800
                py-16
                text-center
              "
            >
              <div className="mb-3 text-4xl opacity-50">
                📝
              </div>

              <h3 className="mb-1 text-sm font-medium text-zinc-300">
                No notes yet
              </h3>

              <p className="text-xs text-zinc-500">
                Create your first note to get started
              </p>
            </div>
          )}

          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
            />
          ))}
        </div>
      )}
    </aside>
  )
}