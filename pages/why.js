import NextLink from 'next/link'
import {

  Container,
  Link,
  Box,
  ExternalLinkIcon,

  useColorModeValue
} from '@chakra-ui/react'
import P from '../components/paragraph'

import Layout from '../components/layouts/article'


const Home = () => (
  <Layout>
    <Container mt={20} maxW='2xl'   fontSize='2xl' justify>
      
      
       <P> Le site sur lequel vous êtes actuellement a été réalisé dans le cadre de l&apos;unité d&apos;enseignement "Stage et Portfolio". Cette unité est la dernière des unités de bachelier en Technologies de l'informatique proposé par l&apos;<a href="https://ephec.be">Ephec</a>.
       </P>
       
       
       <P>
       C&apos;est donc sur ce site que vous retrouverez une présentation de moi-même, une explication de mon projet professionnel ainsi que mon portfolio, reprenant l&apos;ensemble des activités externes réalisés en dehors des cours de l&apos;EPHEC. Ces activités ont été réalisés durant les trois années du cursus mouvementées par le Covid. C'est pour cela que vous retrouverez beaucoup d'activités réalisées en distanciel.
       </P>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>

          <P>Je tiens à remercier <Link href="https://www.youtube.com/channel/UC7yZ6keOGsvERMp2HaEbbXQ" target="_blank">devaslife</Link> pour sa réalisation de ce template dont je me suis fortement inspiré. Vous pouvez retrouver sa création <Link href="https://www.youtube.com/watch?v=bSMZgXzC9AA&t=1872s&ab_channel=devaslife" target="_blank">ici</Link>.</P>
        </Box>
        </Box>
    </Container>


  </Layout>
)

export default Home
