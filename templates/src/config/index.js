export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

console.log('isDev', isDev)
console.log('isProd', isProd)

export const API_ENDPOINT = '/api'
