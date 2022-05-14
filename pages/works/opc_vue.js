import {
    Container,
    Badge,
    Heading,
    Center
  } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import { ImageGridItem } from '../../components/grid-item'
import P from '../../components/paragraph'
import preuve1 from '../../public/images/works/openclassrooms/vue/preuvevue1.png'
import preuve2 from '../../public/images/works/openclassrooms/vue/preuvevue2.png'
import preuve3 from '../../public/images/works/openclassrooms/vue/preuvevue3.png'



  const Work = () => (

    <Layout title="Formation Vue.js">
      <Container maxW="container.lg">
        <Title>
          Formation Vue.js <Badge color="RGBA(0, 0, 0, 0.48)">Formation</Badge>
        </Title>
        <P>
          La formation "Creer une application web avec Vue.js" proposée également par OpenClassRoomsa été aussi d'une grande valeur ajoutée en parallèle de la formation de l'EPHEC.
          Cette formation m'a été fort utile pour le cours et le projet de DevWeb III durant le second quadrimestre de la deuxieme année.
          Grâce à cette formation, j'ai pu très vite apprendre les bases de ce langage de programmation et ensuite j'ai pu, grâce à des exercices proposés, approfondir mes connaissances.
        </P>
        <P>Cela m'a également montré les différences entre Javascript et React que je connaissais déjà.</P>
        <P>J'ai énormément apprécié cette formation encore une fois car elle a été à la hauteur de la formation qu'on a à l'EPHEC et cela m'a permis de facilement et rapidement concrétiser une application web Single Page.</P>


        <Heading as="h4" fontSize={20} my={10}>
          <Center><u>Les preuves de la réalisation pour cette formation</u></Center>
        </Heading>

        <ImageGridItem my={7}
        title="Information sur la formation"
        thumbnail={preuve1}
        href="/images/works/openclassrooms/vue/preuvevue1.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Progression"
        thumbnail={preuve2}
        href="/images/works/openclassrooms/vue/preuvevue2.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Preuve de réalisation personnelle"
        thumbnail={preuve3}
        href="/images/works/openclassrooms/vue/preuvevue3.png" target="_blank"
        >
        </ImageGridItem>




      </Container>
    </Layout>
  )

export default Work;
