import sanityClient from '@sanity/client'

export const sanity_projectId = 'vehv8d96'
export const sanity_dataset = 'production'

export default sanityClient({
  projectId: sanity_projectId,
  dataset: sanity_dataset,
  apiVersion: '2022-04-08',
  // token: process.env.SANITY_API_KEY,
  useCdn: process.env.NODE_ENV === 'production',
})

// https://www.sanity.io/docs/image-urls
export const getImageUrl = (
  asset: { _ref: string },
  params?: Record<string, any>
) => {
  const [_, id, size, ext] = asset._ref.split('-')
  const baseUrl = `https://cdn.sanity.io/images/${sanity_projectId}/${sanity_dataset}/${id}-${size}.${ext}`

  const queryString = new URLSearchParams({
    auto: 'format',
    w: '1920',
    ...params,
  })
  return `${baseUrl}?${queryString}`
}
