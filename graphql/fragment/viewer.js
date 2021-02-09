import { gql } from '@apollo/client'

const viewer = gql`
  fragment viewer on User {
    id
    name
    image
  }
`

export default viewer
