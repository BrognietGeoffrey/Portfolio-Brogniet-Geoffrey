import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'




const Main = ({ children, router }) => {
  return (
    <Box  as="main" pb={7}  >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio de Brogniet Geoffrey" />
        <meta name="author" content="Brogniet Geoffrey" />
        <meta name="author" content="Brogniet Geoffrey" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />

        <meta property="og:site_name" content="Brogniet Geoffrey Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Portfolio - Brogniet Geoffrey</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container  maxW='container.xl' pt={14}>
     

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
