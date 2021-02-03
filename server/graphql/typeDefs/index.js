const { gql } = require("@apollo/client")

const typeDefs = gql`
    type Test {
        id: Int!
    }

    type Query {
        test: Test
    }
`

module.exports = typeDefs