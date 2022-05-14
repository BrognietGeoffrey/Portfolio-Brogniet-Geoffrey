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
import preuve1 from '../../public/images/works/openclassrooms/js/preuvejs1.png'
import preuve2 from '../../public/images/works/openclassrooms/js/preuvejs2.png'
import preuve3 from '../../public/images/works/openclassrooms/js/preuvejs3.png'

  const Work = () => (

    <Layout title="Formation Javascript" >
      <Container maxW='container.lg'>
        <Title>
          Formation Javascript <Badge color="RGBA(0, 0, 0, 0.48)">Formation</Badge>

        </Title>
        <P>OpenClassrooms est un site web de formation en ligne, créé en 1999 sous le nom de Site du Zéro. Il propose à ses membres des cours certifiant et des parcours débouchant sur des métiers en croissance.</P>

        <P>Cette formation est venue en parallèle du cours de développement programmation de première année, lorsque nous apprenions les bases du JavaScript.</P>

<P>J'ai donc réalisé cette formation durant 15 h et cela m'a permis d'apprendre beaucoup de choses en plus que les cours donnés ou alors d'approfondir ce qu'on nous apprenait.</P>

<P>Bien sûr, avec une formation de 15 h, on ne peut pas tout apprendre sur le JavaScript, mais c'est déjà un bon début en plus des cours donnés.</P>

<P>Cette formation m'a donc été fort utile lors de mon apprentissage pour ce langage de programmation.</P>


        <Heading as="h4" fontSize={20} my={10}>
          <Center><u>Les preuves de la réalisation pour cette formation</u></Center>
        </Heading>
        <ImageGridItem my={7}
        title="Information sur la formation"
        thumbnail={preuve3}
        href="/images/works/openclassrooms/js/preuvejs3.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Progression"
        thumbnail={preuve1}
        href="/images/works/openclassrooms/js/preuvejs1.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Preuve de réalisation personnelle"
        thumbnail={preuve2}
        href="/images/works/openclassrooms/js/preuvejs2.png" target="_blank"
        >
        </ImageGridItem>





      </Container>
    </Layout>
  )

  export default Work
