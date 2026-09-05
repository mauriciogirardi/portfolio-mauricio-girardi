import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#05070d',
        borderRadius: 7,
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 20,
          fontWeight: 700,
          fontFamily: 'monospace',
          backgroundImage: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        M
      </div>
    </div>,
    { ...size },
  )
}
