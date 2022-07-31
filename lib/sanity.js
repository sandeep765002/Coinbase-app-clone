import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '662u8bud',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skObtsZXdiN8DdLOVsC5XOCAreLKo7CaotohcVEAf294AMVCeGCMqhnoFoCr81gPj0HvKhVNn1fgYgX4Je1t0KVb28SZ9onr5t4KTgZivbtgw2oO21U4QERAQ8tiNGbGZb3nrveGPW6TLCyT0nP8BGRqhdm1cMaWr61t1s1vLhQLzgxemsJB', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})