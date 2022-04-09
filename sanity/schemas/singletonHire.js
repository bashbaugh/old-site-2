import getRichTextField from './getRichTextField'

export const singletonHire = {
  title: 'Hire',
  name: 'hirePage',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    getRichTextField('bio', 'Bio'),
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
    }
  ]
}
