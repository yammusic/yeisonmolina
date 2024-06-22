import withNextIntl from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{kebabCase}}',
    },
  },

  sassOptions: {
    includePaths: [
      './src/**/*.scss',
      './src/**/*.sass',
    ],
  },

  images: {
    remotePatterns: [
    ],
  },
}

const nexConfigWithIntl = withNextIntl('./src/domain/locales/i18n.ts')(nextConfig)
export default nexConfigWithIntl
