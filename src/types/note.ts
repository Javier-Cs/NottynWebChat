export type Blocktype = "text" | "code";

export interface Block {
  idBloque: number
  tipo: Blocktype
  contenido: string
  lenguaje: string | null
  orden: number
  lineas: number
}

export interface Note{
  codex: string
  aliasAnonimo: string
  fechaCreacion: string
  bloques: Block[]
}