const richTextGenerator = (name, title, allowImages, required = true) => {
  const blocks = [{
    type: 'block'
  }]

  if (allowImages) blocks.push({
    type: 'image',
    fields: [
      {
        title: 'Alt text',
        description: 'A short description of the image. Will only be shown if the image fails to load (also important for SEO).',
        name: 'alt',
        type: 'string',
        isHighlighted: true,
        validation: Rule => Rule.required()
      }
    ]
  })

  return {
    name,
    title,
    type: 'array',
    of: blocks,
    validation: required ? Rule => Rule.required() : undefined
  }
}

export default richTextGenerator