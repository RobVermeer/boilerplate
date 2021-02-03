const express = require('express')
const next = require('next')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const app = next({ dev: true })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  const apiServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  apiServer.applyMiddleware({ app: server })

  server.all('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT, err => {
    if (err) throw err
    console.log(`Website running at http://localhost:${process.env.PORT}`)
    console.log(
      `GraphQL running at http://localhost:${process.env.PORT}${apiServer.graphqlPath}`
    )
  })
})