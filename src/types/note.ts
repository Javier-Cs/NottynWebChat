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



// api de LOGIN 
export interface LoginRequest {
  email: string
  passHash: string
  
}

// responselogin
export interface registrerResponse {
  codex: string
  avatarName: string
  confirmPassHash : string
}

export interface LoginResponse {
  token: string
  expiracion: string
  estado: boolean
  isDelate: boolean
  idUsuario: number
  codex: string
  avatarName: string
}