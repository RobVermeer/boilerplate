import styled from '@emotion/styled'

const Wrapper = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  margin-left: 0.5rem;
  height: 1em;
`

const Footer = () => (
  <Wrapper>
    <Link
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by <Image src="/vercel.svg" alt="Vercel Logo" />
    </Link>
  </Wrapper>
)

export default Footer
