import fastify from 'fastify'

const app = fastify()

app.get('/helloo', () => {
  return 'Hellooooo!'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('http server running on port 3333')
  })
