import TextBlock from "./TextBlock"
import CodeBlock from "./CodeBlock"

import type { Block } from "../types/note"

interface Props {
  block: Block
  onChange: (id: number, content: string) => void
}

export default function BlockRenderer({
  block,
  onChange
}: Props) {
  if (block.tipo === "text") {
    return (
      <TextBlock
        block={block}
        onChange={onChange}
      />
    )
  }

  if (block.tipo === "code") {
    return (
      <CodeBlock
        block={block}
        onChange={onChange}
      />
    )
  }

  return null
}