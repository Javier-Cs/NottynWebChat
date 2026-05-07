import type { Note } from "@/types/note.ts"

interface Props {
  note: Note
}

export default function NoteCard({ note }: Props) {
  return (
    <article
      className="
        border
        border-zinc-700
        rounded-lg
        p-4
        mb-4
      "
    >
      <div className="text-xs text-zinc-400 mb-3">
        {note.createdAt} - {note.author}
      </div>

      <h3 className="font-semibold mb-2">
        {note.title}
      </h3>

      <p className="text-sm text-zinc-300">
        {note.summary}
      </p>
    </article>
  )
}