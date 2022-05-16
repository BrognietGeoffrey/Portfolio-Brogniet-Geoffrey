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
import preuve2 from '../../public/images/works/ephec/siep/preuvesiep2.png'
import preuve3 from '../../public/images/works/ephec/siep/preuvesiep3.png'
import preuve4 from '../../public/images/works/ephec/siep/preuvesiep4.png'
import preuve5 from '../../public/images/works/ephec/siep/preuvesiep5.png'
const Work = () => (

    <Layout title="SIEP" display="flex">
      <Container maxW='container.lg'>
        <Title>
          le salon du SIEP<Badge color="yellow.500">Salon/Représentation EPHEC</Badge>

        </Title>
        <P>
        En novembre 2019, j'ai eu l'occasion de représenter l'EPHEC dans le cadre du salon SIEP (Service d'Information sur les Etudes et les Professions). J'ai pu participer à orienter des étudiants de secondaire et autre dans leurs futures études, j'espère même avoir pu en convaincre certains de s'inscrire en Technologie de l'Informatique.
        Étant en binôme avec Matthieu Luycks, je pense que nous avons donné tout ce que nous avions en notre possession pour motiver les potentiels candidats à se laisser guider vers nos études. Une description objective des cours, du large panel informatique que propose l'EPHEC et de ses qualités,
        nous avons tout donné durant les 4 heures où nous représentions l'EPHEC.
        </P>
        <P>Le seul regret que j'ai par rapport à cette activité à été le très léger intérêt des étudiants présents. Sur les 4 heures où nous étions présents, nous avons pu répondre aux questions d'une dizaine de personnes, sans compter la majeure partie des questions de la part des étudiants qui pensaient être au stand pour la comptabilité à l'EPHEC. Mis à part ça, les quelques personnes s'intéressant à l'informatique avaient l'air vraiment satisfaites de nos explications, elles ont eu les réponses à leurs questions, et - j'espère - en sont repartis en ayant la potentialité de faire leurs études à l'EPHEC dans un coin de la tête.</P>

        <P>En novembre 2021, ce fut une toute autre histoire, je n'ai pas eu une seconde de repos tellement les étudiants étaient intéressés par notre section, ce qui fut rassurant et motivant. </P>

        <Heading as="h4" fontSize={20} my={10}>
          <Center><u>Les preuves de la réalisation pour cet activité :</u></Center>
        </Heading>

        <ImageGridItem my={7}
        title="Mail de preuve de participation pour l'année 2019"
        thumbnail={preuve3}
        href="/images/works/ephec/siep/preuvesiep3.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Photo de preuve de participation pour l'année 2019"
        thumbnail={preuve2}
        href="/images/works/ephec/siep/preuvesiep2.png" target="_blank"
        >
        </ImageGridItem>
        <ImageGridItem my={7}
        title="Mail de preuve de participation pour l'année 2021"
        thumbnail={preuve4}
        href="/images/works/ephec/siep/preuvesiep4.png " target="_blank"
        >
        </ImageGridItem>


        <ImageGridItem my={7}
        title="Photo de preuve de participation pour l'année 2021"
        thumbnail={preuve5}
        href="/images/works/ephec/siep/preuvesiep5.png" target="_blank"
        >
        </ImageGridItem>






      </Container>
    </Layout>
  )

  export default Work
