import getRichTextField from './getRichTextField'
import getImageField from './getImageField'

export const singletonHome = {
  title: 'Home',
  name: 'homePage',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Highlights',
      name: 'highlights',
      type: 'array',
      of: [{
        title: 'Highlight',
        name: 'highlight',
        type: 'object',
        fields: [
          {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            title: 'Url',
            name: 'url',
            type: 'url',
            validation: Rule => Rule.required()
          },
          getImageField('thumbnail', 'Thumbnail', true),
          // getRichTextField('description', 'Description'),
          {
            title: 'Description',
            name: 'description',
            type: 'text',
            validation: Rule => Rule.required()
          },
        ]
      }]
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }
  ]
}
