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
import preuve1 from '../../public/images/works/openclassrooms/reactnative/preuvereact1.png'
import preuve2 from '../../public/images/works/openclassrooms/reactnative/preuvereact2.png'
import preuve3 from '../../public/images/works/openclassrooms/reactnative/preuvereact3.png'



  const Work = () => (

    <Layout title="Formation React Native">
      <Container maxW="container.lg">
        <Title>
          Formation React Native  <Badge color="orange.900">Formation</Badge>
        </Title>
        <P>
        La formation "Développez une application mobile React Native" proposée également par Openclassrooms a été une grande valeur ajoutée en parallèle de la formation de l'EPHEC. En effet, cette formation m'a aidé à me préparer pour le cours "Projet d'intégration", pour lequel mon groupe et moi-même avons utilisé React Native pour créer notre application mobile. </P>
        <P> Grâce à cette formation, j'ai eu l'occasion d'apprendre dans un premier temps les bases nécessaires au commencement d'une application, et dans un second temps, j'ai pu approfondir cela afin de créer une application de plus en plus complète.</P> <P>Ça m'a également permis de comprendre la majorité des subtilités propres à React Native, qui n'auraient pas été instinctives sans avoir un minimum de bases dans cette technologie.</P>

<P>Encore une fois, j'ai énormément apprécié cette formation créée par Openclassrooms. Elle a véritablement été à la hauteur, et m'a permis de pouvoir rapidement concrétiser une application mobile (certes, basique dans un premier temps) pour le projet d'intégration, et d'améliorer celle-ci au fur et à mesure.</P>



        <Heading as="h4" fontSize={20} my={10}>
          <Center><u>Les preuves de la réalisation pour cette formation</u></Center>
        </Heading>
        <ImageGridItem my={7}
        title="Information sur la formation"
        thumbnail={preuve3}
        href="/images/works/openclassrooms/reactnative/preuvereact3.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Progression "
        thumbnail={preuve1}
        href="/images/works/openclassrooms/reactnative/preuvereact1.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Preuve de réalisation personnelle"
        thumbnail={preuve2}
        href="/images/works/openclassrooms/reactnative/preuvereact2.png" target="_blank"
        >
        </ImageGridItem>





      </Container>
    </Layout>
  )

export default Work;
