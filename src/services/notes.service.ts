import type { Note } from "../types/note"
import { API_URL } from "@/app/constantes"

//const API_URL = "https://localhost:7000/api"



// crear nota
export async function createNoty(note: Note){
  const response = await fetch(`${API_URL}/notes`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify([note])
  })

  if(!response.ok){
    throw new Error("Error al crear la Nota")
  }

  return response.json()
}


// autoguardado

export async function autoSave(note: Note){
  
}



/*
export async function getNotes(): Promise<Note[]> {
  const response = await fetch(`${API_URL}/notes`)

  if (!response.ok) {
    throw new Error("Error obteniendo notas")
  }

  return response.json()
}*/