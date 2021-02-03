import { ApolloProvider } from '@apollo/client'
import { useApollo } from '~/lib/apolloClient'
import BaseStyles from '~/styles/global'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <BaseStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
