export const USE_MOCK = process.env.NODE_ENV === 'dev'

export const getMockJson = url => new Promise(
  resolve => {
    resolve(require(`@/mock/${url}.json`))
  }
)