export type QRPayload = { v: 1; event: string; title?: string; start?: string; end?: string };
export function buildQRPayload(event: string, title?: string, start?: string, end?: string) { return JSON.stringify({ v: 1, event, title, start, end } satisfies QRPayload); }
export function parseQRPayload(raw: string): { ok: true; payload: QRPayload } | { ok: false; message: string } {
  try { const p = JSON.parse(raw); if (p?.v !== 1 || typeof p?.event !== 'string' || !p.event.trim()) throw new Error(); return { ok: true, payload: p }; }
  catch { return { ok: false, message: 'This is not a valid attendance QR code.' }; }
}
