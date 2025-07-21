import axios from "axios"

export const api = axios.create({
    baseURL: "https://educationproject-production-1a26.up.railway.app/api",
    headers: { 'Content-Type': 'application/json' }
})