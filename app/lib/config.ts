/**
 * ## config
 *
 * The base configuration and easy access environment
 */
const config = {
  app: {
    host: process.env.NEXT_PUBLIC_APP_HOST || 'http://localhost:3000',
  },
}

export { config }
