import { ApolloServer } from 'apollo-server-micro'
import { schema } from '~/server/graphql'

const apolloServer = new ApolloServer({
  schema,
  context = (ctx) => ctx,
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
