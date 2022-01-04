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
import preuve2 from '../../public/images/works/extra/alumni/preuvealumni2.png'
import preuve3 from '../../public/images/works/extra/alumni/preuvealumni3.png'
import preuve4 from '../../public/images/works/extra/alumni/preuvealumni4.png'

const Work = () => (

    <Layout title="Alumni" style={{ position: 'relative' }}>
      <Container maxW="container.lg">
        <Title>
          L&apos;atelir Alumni<Badge color="blue.500">Atelier</Badge>

        </Title>
        <P>L'atelier organisé par l'EPHEC Alumni avait pour vocation d'amener des témoignages d'anciens étudiants de l'ephec. Nous avons pu voir donc voir beaucoup d'anciens étudiants nous parler de leurs entreprises,leurs réussites, leurs echecs.</P>
        <P> Ce fut un atelier riche en conseils et cela m'a fortement encouragé pour le futur, mon futur. </P>

        <Heading as="h4" fontSize={20} my={10}>
          <Center><u>Les preuves de la réalisation pour cet emploi</u></Center>
        </Heading>

        <ImageGridItem my={7}
        title="Ma preuve de participation"
        thumbnail={preuve4}
        href="/images/works/extra/alumni/preuvealumni4.png " target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Le mail de preuve de participation"
        thumbnail={preuve3}
        href="/images/works/extra/alumni/preuvealumni3.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Le mail regroupant tous les participants de la réunion Teams"
        thumbnail={preuve2}
        href="/images/works/extra/alumni/preuvealumni2.png" target="_blank"
        >
        </ImageGridItem>





      </Container>
    </Layout>
  )

  export default Work
