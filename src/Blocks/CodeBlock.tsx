import type { Block } from "../types/note"

interface Props {
  block: Block
  onChange: (id: number, content: string) => void
}

export default function CodeBlock({
  block,
  onChange
}: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-[#111827]
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-zinc-800
          bg-zinc-900
          px-4
          py-2
        "
      >
        <span className="text-xs text-cyan-400">
          {block.lenguaje}
        </span>
      </div>

      {/* Editor */}
      <textarea
        value={block.contenido}
        onChange={(e) =>
          onChange(block.idBloque, e.target.value)
        }
        spellCheck={false}
        placeholder="// Escribe código..."
        className="
          min-h-[220px]
          w-full
          resize-none
          bg-transparent
          p-4
          font-mono
          text-sm
          text-zinc-100
          outline-none
        "
      />
    </div>
  )
}