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
import preuve2 from '../../public/images/works/extra/carrefour/preuvecarrefour2.png'
import preuve3 from '../../public/images/works/extra/carrefour/preuvecarrefour3.png'
import preuve4 from '../../public/images/works/extra/carrefour/preuvecarrefour4.png'

const Work = () => (

    <Layout title="Job étudiant">
      <Container maxW="container.lg">
        <Title>
          Mon travail chez Carrefour<Badge color="purple.700">Job étudiant</Badge>

        </Title>
        <P>Depuis le début des grandes vacances scolaires de 2016 jusqu'à maintenant, j'ai travaillé dans ce grand magasin de distribution, malgré sa taille et son importante fréquentation de client, il s'agit d'un endroit
          sympathique, chaleureux et où je me suis fait beaucoup d'amis et de connaissances.
        </P>
        <P>Ce jod d'étudiant m'a permis d'aquérir beaucoup de compétences dans ma vie professionnelle comme la communication, la gestion du stress, la gestion des imprévus, les conflits entre collègues, la quantité de travail surprenantes et encore pleins de compétence.</P>
        <P> Toutes ces compétences sont un plus non mesurable en tant que futur informaticien où généralement la communication n'est pas le fort par exemple. J'en ai beaucoup appris et je n'en garde que des bons souvenirs. </P>

        <Heading as="h4" fontSize={20} my={10}>
          <Center><u>Les preuves de la réalisation pour cet emploi</u></Center>
        </Heading>

        <ImageGridItem my={7}
        title="Un de mes nombreux contrats"
        thumbnail={preuve4}
        href="/images/works/extra/carrefour/preuvecarrefour4.png " target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Preuve Student@Work de 2020"
        thumbnail={preuve3}
        href="/images/works/extra/carrefour/preuvecarrefour3.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Preuve Student@Work de 2021"
        thumbnail={preuve2}
        href="/images/works/extra/carrefour/preuvecarrefour2.png" target="_blank"
        >
        </ImageGridItem>





      </Container>
    </Layout>
  )

  export default Work
