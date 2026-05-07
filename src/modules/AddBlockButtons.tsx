export default function AddBlockButtons() {
  return (
    <div className="flex flex-col gap-3">
      <button
        className="
          border
          border-zinc-600
          px-4
          py-2
          rounded-md
          hover:bg-zinc-800
        "
      >
        Add code
      </button>

      <button
        className="
          border
          border-zinc-600
          px-4
          py-2
          rounded-md
          hover:bg-zinc-800
        "
      >
        Add text
      </button>
    </div>
  )
}