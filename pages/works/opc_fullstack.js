import {
    Container,
    Badge,

    Heading,
    Center
  } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import { ImageGridItem } from '/components/grid-item.js'
import preuve1 from '../../public/images/works/openclassrooms/fullstask/preuvefullstack1.png'
import preuve2 from '../../public/images/works/openclassrooms/fullstask/preuvefullstack2.png'
import preuve3 from '../../public/images/works/openclassrooms/fullstask/preuvefullstack3.png'
const Work = () => (

    <Layout title="Formation FullStack">
      <Container maxW="container.lg">
        <Title>
          Formation FullStack <Badge color='RGBA(0, 0, 0, 0.48)'>Formation</Badge>

        </Title>
        <P>
          La formation "Passez au Full Stack avec Node.js, Express et MongoDB" proposée également par OpenClassRooms a été aussi d'une grande valeur ajoutée en parallèle de la formation de l'EPHEC.
          Cette formation m'a été fort utile pour le projet d'intégration durant le premier quadrimestre de la troisième année.
          Grâce à cette formation, j'ai pu très vite revoir les bases des trois langages de programmation de cette formation et ensuite, j'ai pu, grâce à des exercices proposés, approfondir mes connaissances.
        </P>
        <P>Cela m'a également fort aidé pour mieux comprendre le Full Stack et surtout le backend où j'avais encore quelques difficultés.</P>
        <P>J'ai énormément apprécié cette formation encore une fois car elle a été à la hauteur de la formation qu'on a à l'EPHEC et cela m'a permis de facilement et rapidement concrétiser le projet d'intégration et d'en être fier.</P>




        <Heading as="h4" fontSize={20} my={10}>
          <Center><u>Les preuves de la réalisation pour cette formation</u></Center>
        </Heading>

        <ImageGridItem my={7}
        title="Informations sur la formation"
        thumbnail={preuve1}
        href="/images/works/openclassrooms/fullstask/preuvefullstack1.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Progression"
        thumbnail={preuve2}
        href="/images/works/openclassrooms/fullstask/preuvefullstack2.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Preuve de réalisation personnelle"
        thumbnail={preuve3}
        href="/images/works/openclassrooms/fullstask/preuvefullstack3.png" target="_blank"
        >
        </ImageGridItem>




      </Container>
    </Layout>
  )

  export default Work
