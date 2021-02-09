import { gql } from '@apollo/client'
import viewer from '~/graphql/fragment/viewer'

const getViewer = gql`
  query getViewer {
    viewer {
      ...viewer
    }
  }

  ${viewer}
`

export default getViewer
