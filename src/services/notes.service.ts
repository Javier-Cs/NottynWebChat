import type { Note, LoginRequest, LoginResponse, registrerResponse } from "../types/note"
import { API_URL, API_URL_DEMO } from "@/app/constantes"

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


export async function getNotes(): Promise<Note[]> {
  const response = await fetch(`${API_URL}/notes`)

  if (!response.ok) {
    throw new Error("Error obteniendo notas")
  }

  return response.json()
}



// api de LOGIN
export async function loginUser(
  loginData: LoginRequest
): Promise<LoginResponse> {
  const response = await fetch(`${API_URL_DEMO}/users/login`, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      accept: "text/plain"
    },
    body: JSON.stringify(loginData)
  })

  if(!response.ok){
    throw new Error("Error al iniciar sesión");
  }

  return response.json();
}


// registrarusuario
export async function registerUser(
  loginData: LoginRequest
): Promise<registrerResponse> {

  const response = await fetch(`${API_URL_DEMO}/users/create`, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      accept: "text/plain"
    },
    body: JSON.stringify(loginData)
  })
  
  if(!response.ok){
    throw new Error("Error al registrar usuario");
  }

  return response.json();
}
