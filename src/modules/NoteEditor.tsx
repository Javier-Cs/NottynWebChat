import { useState } from "react"
import AddBlockButtons from "./AddBlockButtons"

export default function NoteEditor() {
  const [content, setContent] = useState("")

  return (
    <div className="flex gap-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escribe tu nota..."
        className="
          w-full
          min-h-[300px]
          bg-transparent
          border
          border-zinc-700
          rounded-xl
          p-4
          outline-none
          resize-none
        "
      />

      <AddBlockButtons />
    </div>
  )
}