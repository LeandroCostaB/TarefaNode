import {defineField, defineType} from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'data_de_nascimento',
        type: 'date',
      }),
    defineField({
        name: 'idade',
        type: 'number',
      }),
  ],
})