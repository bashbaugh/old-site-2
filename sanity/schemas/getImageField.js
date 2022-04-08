const imgGen = (name, title, required = true) => {
  return {
    title,
    name,
    type: 'image',
    fields: [
      {
        title: 'Alt text',
        description: 'A short description of the image. Will only be shown if the image fails to load (also important for SEO).',
        name: 'alt',
        type: 'string',
        isHighlighted: true,
        // validation: Rule => Rule.required()
      }
    ],
    validation: required ? Rule => Rule.required() : undefined
  }
}

export default imgGen
