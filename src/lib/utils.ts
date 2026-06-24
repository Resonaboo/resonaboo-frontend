import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractDataFromUuidV7(uuid: string) {
  const timestampHex = uuid.replace(/-/g, '').slice(0, 12);
  
  const timestampMs = parseInt(timestampHex, 16);
  return new Date(timestampMs);
}