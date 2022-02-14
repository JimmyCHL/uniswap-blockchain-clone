import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'p6y3vrj4',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skvu3VPVC7IjZzCWM4bhxiamT9kHOPzSu4Qx8QyfSuAbLnK28qX7h69bAfeZZbRE1E7TbCWCC9liNan8Xa8584ffOBlYwJWuGfTX2cPiRqY025m5ta2u6aI2X0u0p5FuB76QbRzBJoDnNNiMSeuf4GT6n980aSoAPTe88LnDLJiudxfBtZPB',
  useCdn: false,
})
