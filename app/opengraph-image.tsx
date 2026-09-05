import { ImageResponse } from 'next/og'
import { SITE_DESCRIPTION } from '@/lib/site'

export const alt = 'Mauricio Girardi — Senior Front-End Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#05070d',
        color: '#e7edf7',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: 28,
          color: '#22d3ee',
          fontFamily: 'monospace',
          marginBottom: '32px',
        }}
      >
        <span>{'<'}</span>
        <span style={{ color: '#e7edf7' }}>Mauricio</span>
        <span style={{ color: '#a78bfa' }}>{' />'}</span>
      </div>
      <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
        Eu crio interfaces
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.1,
          backgroundImage: 'linear-gradient(120deg, #22d3ee, #a78bfa)',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        rápidas, sólidas e escaláveis.
      </div>
      <div style={{ display: 'flex', marginTop: '36px', fontSize: 28, color: '#8b96a8' }}>
        {SITE_DESCRIPTION}
      </div>
    </div>,
    { ...size },
  )
}
