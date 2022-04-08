import getRichTextField from './getRichTextField'

export const singletonMore = {
  title: 'More',
  name: 'morePage',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    getRichTextField('about', 'About')
  ]
}
