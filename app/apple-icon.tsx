import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#05070d',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 100,
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
