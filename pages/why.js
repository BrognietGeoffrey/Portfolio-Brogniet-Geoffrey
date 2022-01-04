import NextLink from 'next/link'
import {

  Container,

  Box,

  useColorModeValue
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
       Ce site présentant mon portfolio a été réalisé dans le cadre de l&apos;Unité d&apos;enseignement Stage et Portfolio en 3ème année du bachelier de Technologie de l&apos;Informatique. <hr></hr>
       C&apos;est donc sur ce site que vous retrouverez une présentation de moi, une explication de mon projet professionnel ainsi que mon portfolio, reprenant l&apos;ensemble des activités externes aux cours de l&apos;EPHEC que j&apos;ai réalisées au cours des 3 dernières années.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>

          <p></p>
        </Box>
        </Box>
    </Container>


  </Layout>
)

export default Home
