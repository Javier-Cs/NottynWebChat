import { useState } from "react"

import BlockRenderer from "../Blocks/BlockRenderer"
import AddBlockBar from "../Blocks/AddBlockBar"

import type { Block, Note } from "../types/note"

export default function NoteEditor() {
  const [note, setNote] = useState<Note>({
    codex: crypto.randomUUID(),
    aliasAnonimo: "juan",
    fechaCreacion: new Date().toISOString(),
    bloques: []
  })

  function addTextBlock() {
    const newBlock: Block = {
      idBloque: Date.now(),
      tipo: "text",
      contenido: "",
      lenguaje: null,
      orden: note.bloques.length,
      lineas: 1
    }

    setNote((prev) => ({
      ...prev,
      bloques: [...prev.bloques, newBlock]
    }))
  }

  function addCodeBlock() {
    const newBlock: Block = {
      idBloque: Date.now(),
      tipo: "code",
      contenido: "",
      lenguaje: "javascript",
      orden: note.bloques.length,
      lineas: 1
    }

    setNote((prev) => ({
      ...prev,
      bloques: [...prev.bloques, newBlock]
    }))
  }

  function updateBlock(id: number, content: string) {
    setNote((prev) => ({
      ...prev,
      bloques: prev.bloques.map((block) =>
        block.idBloque === id
          ? {
              ...block,
              contenido: content
            }
          : block
      )
    }))
  }

  return (
    <section
      className="
        flex
        h-[85vh]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950/70
        p-6
        backdrop-blur-xl
        shadow-2xl
      "
    >
      {/* Header */}
      <div
        className="
          mb-6
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div>
          <h1 className="text-3xl font-bold text-zinc-100">
            Nota Nueva
          </h1>

          <p className="mt-1 text-zinc-400">
            Escribe ideas, fragmentos de código o documentación.
          </p>
        </div>

        {/* Save button */}
        <button
          className="
            rounded-xl
            bg-gradient-to-r
            from-green-600
            to-emerald-500
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]
            active:scale-[0.98]
          "
        >
          Save note
        </button>
      </div>

      {/* Content */}
      <div className="flex-1
          overflow-y-auto
          pr-2
        "
        style={{
          scrollbarWidth: "thin"
        }}
      >
        {/* Empty state */}
        {note.bloques.length === 0 && (
          <div
            className="
              flex
              h-full
              min-h-[420px]
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-dashed
              border-zinc-800
              bg-zinc-900/20
              text-center
            "
          >
            <h2 className="mb-2 text-xl font-semibold text-zinc-200">
              Empieza a escribir
            </h2>

            <p className="max-w-md text-sm text-zinc-500">
              Agrega bloques de texto o código para comenzar
              tu nota técnica.
            </p>
          </div>
        )}

        {/* Blocks */}
        <div className="space-y-4">
          {note.bloques.map((block) => (
            <BlockRenderer
              key={block.idBloque}
              block={block}
              onChange={updateBlock}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className=" border-zinc-800">
        <AddBlockBar
          onAddText={addTextBlock}
          onAddCode={addCodeBlock}
        />
      </div>
    </section>
  )
}