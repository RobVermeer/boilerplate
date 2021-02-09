import Head from 'next/head'
import Footer from '~/components/Footer'
import Layout from '~/styles/Layout'
import Main from '~/styles/Main'
import Card from '~/styles/Card'
import Grid from '~/styles/Grid'
import Code from '~/styles/Code'
import { useQuery } from '@apollo/client'
import { addApolloState, createApolloClient } from '~/lib/apolloClient'
import { signIn, signOut } from 'next-auth/client'
import getViewer from '~/graphql/query/getViewer'

const Home = () => {
  const { data = {} } = useQuery(getViewer)
  const { viewer } = data
  const loggedIn = Boolean(viewer)

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        {loggedIn ? (
          <button onClick={signOut}>Logout</button>
        ) : (
          <button onClick={signIn}>Login</button>
        )}

        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <Code>pages/index.js</Code>
        </p>

        <Grid>
          <Card href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/master/examples">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Card>
        </Grid>
      </Main>

      <Footer />
    </Layout>
  )
}

export const getServerSideProps = async context => {
  const client = createApolloClient(context)

  await client.query({ query: getViewer })

  return addApolloState(client, { props: {} })
}

export default Home
