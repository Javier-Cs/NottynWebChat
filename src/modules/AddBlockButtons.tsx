export default function AddBlockButtons() {
  return (
    <div className="flex flex-col gap-4">
      <button
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900/70
          px-6
          py-3
          text-sm
          font-medium
          text-zinc-100
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-cyan-400/60
          hover:bg-zinc-800
          hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
          active:scale-[0.98]
        "
      >
        <span
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-cyan-500/0
            via-cyan-400/10
            to-cyan-500/0
            translate-x-[-100%]
            transition-transform
            duration-700
            group-hover:translate-x-[100%]
          "
        />

        <span className="relative flex items-center gap-2">
          <span className="text-cyan-400">{`</>`}</span>
          Add code
        </span>
      </button>

      <button
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900/70
          px-6
          py-3
          text-sm
          font-medium
          text-zinc-100
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-violet-400/60
          hover:bg-zinc-800
          hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]
          active:scale-[0.98]
        "
      >
        <span
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-violet-500/0
            via-violet-400/10
            to-violet-500/0
            translate-x-[-100%]
            transition-transform
            duration-700
            group-hover:translate-x-[100%]
          "
        />

        <span className="relative flex items-center gap-2">
          <span className="text-violet-400">✎</span>
          Add text
        </span>
      </button>
    </div>
  )
}