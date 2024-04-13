import { MetadataRoute } from 'next'
import colors from 'tailwindcss/colors'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portfolio Mauricio Girardi',
    short_name: 'Portfolio Mauricio Girardi',
    description:
      'Explorando o mundo da programação há mais de quatro anos, estou aqui para criar soluções digitais inovadoras e envolventes. Especializado em desenvolvimento web e apaixonado por transformar ideias em realidade através de código limpo e eficiente. Descubra como posso ajudar a impulsionar seu projeto!',
    start_url: '/',
    display: 'standalone',
    background_color: colors.zinc['900'],
    theme_color: colors.zinc['900'],
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png'
      }
    ]
  }
}
