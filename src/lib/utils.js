import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function capitalize(string) {
  const newString = string[0].toUpperCase().concat(string.slice(1, string.length))
  return newString
}