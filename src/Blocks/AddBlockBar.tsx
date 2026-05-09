interface Props {
  onAddText: () => void
  onAddCode: () => void
}

export default function AddBlockBar({
  onAddText,
  onAddCode
}: Props) {
  return (
    <div className="mt-6 flex items-center gap-3">
      <button
        onClick={onAddCode}
        className="
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          px-5
          py-2
          text-sm
          text-cyan-400
          transition
          hover:border-cyan-400/40
        "
      >
        + Código
      </button>

      <button
        onClick={onAddText}
        className="
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          px-5
          py-2
          text-sm
          text-violet-400
          transition
          hover:border-violet-400/40
        "
      >
        + Texto
      </button>
    </div>
  )
}