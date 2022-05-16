import {
    Container,
    Badge,

    Heading,
    Tooltip,
    Center
  } from '@chakra-ui/react'
  import {
    QuestionOutlineIcon
  } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import { ImageGridItem } from '/components/grid-item.js'
import preuve2 from '../../public/images/works/extra/gimp/preuvegimp2.png'
import preuve3 from '../../public/images/works/extra/gimp/preuvegimp3.png'
import preuve4 from '../../public/images/works/extra/gimp/preuvegimp4.png'

const Work = () => (

    <Layout title="GIMP" display="flex">
      <Container  maxW='container.lg'>
        <Title>
          L&apos;atelier GIMP<Badge color="blue.500">Atelier</Badge>

        </Title>
        <P>GIMP est la version gratuite et Open Source<Tooltip placement='top' label="Tout le monde peut avoir accès au code et y rajouter des fonctionnalités."><QuestionOutlineIcon width={3} mt={-5}></QuestionOutlineIcon></Tooltip> de Photoshop. Ils s'agit d'un incontournable dans le monde du développement Open Source.</P>
        <P>J'ai décidé de faire cet atelier organisé par le Louvain-Li-Nux pour voir toutes les différences qu'il y a entre Photoshop et GIMP. Mise à part le prix, il n'y a aucune différence. J'ai pu, grâce aux cours d'inition aux ordinateurs, m'y retrouver très facilement car
          ces deux logiciels sont très similaires.
        </P>
        <P>J'ai particulièrement apprécié cet atelier car il est original, très animé et avec pas mal de rigolades.</P>


        <Heading as="h4" fontSize={20} my={10}>
          <Center><u>Les preuves de la réalisation pour cette atelier :</u></Center>
        </Heading>

        <ImageGridItem my={7}
        title="Informations sur l'atelier"
        thumbnail={preuve2}
        href="/images/works/extra/gimp/preuvegimp2.png" target="_blank"
        >
        </ImageGridItem>


        <ImageGridItem my={7}
        title="Invitation Facebook de l'atelier (Partagée par Madame Vroman)"
        thumbnail={preuve3}
        href="/images/works/extra/gimp/preuvegimp3.png" target="_blank"
        >
        </ImageGridItem>

        <ImageGridItem my={7}
        title="Preuve de participation"
        thumbnail={preuve4}
        href="/images/works/extra/gimp/preuvegimp4.png " target="_blank"
        ></ImageGridItem>






      </Container>
    </Layout>
  )

  export default Work
