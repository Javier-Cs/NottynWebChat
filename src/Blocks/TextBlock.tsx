import type { Block } from "@/types/note"

interface Props {
  block: Block
  onChange: (id: number, content: string) => void
}

export default function TextBlock({
  block,
  onChange
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/70
        p-4
      "
    >
      <textarea
        value={block.contenido}
        onChange={(e) =>
          onChange(block.idBloque, e.target.value)
        }
        placeholder="Escribe texto..."
        className="
          min-h-[120px]
          w-full
          resize-none
          bg-transparent
          text-zinc-100
          outline-none
        "
      />
    </div>
  )
}