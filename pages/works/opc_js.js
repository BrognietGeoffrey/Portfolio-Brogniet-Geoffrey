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
          Formation Javascript <Badge color="orange.900">Formation</Badge>

        </Title>
        <P>
        OpenClassrooms est un site web de formation en ligne, créé en 1999 sous le nom de Site du Zéro. Il propose à ses membres des cours certifiants et des parcours débouchant sur des métiers en croissance.
        </P>
        <P>Cette formation est venue en parallèle du cours de développement programmation de première année, lorsque nous apprenions les bases du javascript. </P>
        <P>J&apos;ai donc réalisé cette formation durant 15h et cela m&apos;a permis d&apos;apprendre beaucoup de chose en plus que les cours donnés ou alors d&apos;appronfondir ce qu&apos;on nous apprenais</P>
        <P>Bien sûr avec une formation de 15h on ne peut pas tout apprendre sur le Javascript mais c&apos;est déjà un bon début en plus des cours donnés. </P>
        <P>Cette formation m&apos;a donc été fort utile lors de mon apprentissage pour ce langage de programmation.</P>


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