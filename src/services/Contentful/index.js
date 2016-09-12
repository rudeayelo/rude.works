import contentful from 'contentful'

// var content = contentful.createClient({
//   accessToken: '6bdef7b244e2d815dad35629059b7e7717d94973100f252135089f52a0a719b4',
//   space: 'wyds2ow6r257',
// });

const content = contentful.createClient({
  accessToken: '9d18bcb714200c54d338cd38005cb2040e063dd31bc37550f74a4257cc9980fb',
  host: 'preview.contentful.com',
  space: 'wyds2ow6r257',
})

export default content
