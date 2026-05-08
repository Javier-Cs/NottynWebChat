import { useState } from "react"
import AddBlockButtons from "./AddBlockButtons"

export default function NoteEditor() {
  const [content, setContent] = useState("")

  return (
    <section
      className="
        relative
        flex
        gap-5
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950/70
        p-5
        backdrop-blur-xl
        shadow-2xl
      "
    >
      {/* Glow background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-br
          from-cyan-500/5
          via-transparent
          to-violet-500/5
        "
      />

      {/* Editor */}
      <div className="relative flex-1">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">
              New Note
            </h2>

            <p className="text-sm text-zinc-400">
              Write ideas, code snippets or documentation
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-zinc-800
              bg-zinc-900
              px-3
              py-1
              text-xs
              text-zinc-400
            "
          >
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            Auto save
          </div>
        </div>

        {/* Textarea container */}
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900/80
            transition-all
            duration-300
            focus-within:border-cyan-400/40
            focus-within:shadow-[0_0_30px_rgba(34,211,238,0.08)]
          "
        >
          {/* Animated glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-300
              group-focus-within:opacity-100
              bg-gradient-to-r
              from-cyan-500/5
              via-transparent
              to-violet-500/5
            "
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your note..."
            className="
              relative
              z-10
              min-h-[65vh]
              w-full
              resize-none
              bg-transparent
              p-5
              text-sm
              leading-7
              text-zinc-100
              outline-none
              placeholder:text-zinc-500
            "
          />
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-zinc-500">
            {content.length} characters
          </p>

          <button
            className="
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
              active:scale-[0.98]
            "
          >
            Save note
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="relative">
        <AddBlockButtons />
      </div>
    </section>
  )
}