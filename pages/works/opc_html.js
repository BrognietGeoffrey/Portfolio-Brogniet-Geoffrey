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
import preuve1 from '../../public/images/works/openclassrooms/html/preuvehtml1.png'
import preuve2 from '../../public/images/works/openclassrooms/html/preuvehtml2.png'
import preuve3 from '../../public/images/works/openclassrooms/html/preuvehtml3.png'
const Work = () => (

    <Layout title="Formation HTML/CSS">
      <Container maxW="container.lg">
        <Title>
          Formation HTML/CSS <Badge color="orange.900">Formation</Badge>

        </Title>
        <P>
        La formation "Apprenez à créer votre vite web avec HTML et CSS3" proposée également par OpenClassRoomsa été aussi d'une grande valeur ajoutée en parallèle de la formation de l'EPHEC.
        </P>
        <P>Cette formation est venue en parallèle du cours de développement programmation de première année, lorsque nous apprenions les bases de l'HTML et du CSS. </P>
        <P>J&apos;ai donc réalisé cette formation durant 20h et cela m&apos;a permis d&apos;apprendre beaucoup de chose en plus que les cours donnés ou alors d&apos;appronfondir ce qu&apos;on nous apprenais</P>
        <P>Bien sûr avec une formation de 20h on ne peut pas tout apprendre sur ces langages mais c&apos;est déjà un bon début en plus des cours donnés. </P>
        <P>Cette formation m&apos;a donc été fort utile lors de mon apprentissage pour ces langage de programmation.</P>



        <Heading as="h4" fontSize={20} my={6}>
          <Center><u>Les preuves de la réalisation pour cette formation</u></Center>
        </Heading>

        <ImageGridItem my={7}
        title="Informations sur la formation"
        thumbnail={preuve3}
        href="/images/works/openclassrooms/html/preuvehtml3.png" target="_blank"
        >
        </ImageGridItem>

        <ImageGridItem my={7}
        title="Progression"
        thumbnail={preuve1}
        href="/images/works/openclassrooms/html/preuvehtml1.png" target="_blank"
        >
        </ImageGridItem>

        <ImageGridItem my={7}
        title="Preuve de réalisation personnelle"
        thumbnail={preuve2}
        href="/images/works/openclassrooms/html/preuvehtml2.png" target="_blank"
        >
        </ImageGridItem>





      </Container>
    </Layout>
  )

  export default Work
