const { gql } = require('@apollo/client')

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String
    emailVerified: Boolean!
    image: String
  }

  type Query {
    viewer: User
  }
`

module.exports = typeDefs
