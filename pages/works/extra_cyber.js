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

    <Layout title="Cyber Security Challenge">
      <Container maxW='container.lg'>
        <Title>
          Cyber Security Challenge<Badge color="whatsapp.500">Capture The Flag</Badge>

        </Title>
        <P>
        Le Cyber Security Challenge est une compétition de cyber sécurité comme son nom l'indique, et consiste en un "Capture the Flag", ayant comme but de trouver un "flag" confirmant la réussite de l'épreuve au terme d'une énigme plus ou moins longue. Ayant eu l'occasion de participer aux trois éditions proposées durant mon cursus à l'EPHEC, j'ai pu apprendre énormément de choses grâce à ce challenge. Tout d'abord, celui-ci proposant des épreuves extrèmement diverses et variées, allant de la sécurité des réseaux à la logique mathématique, en passant par la programmation, le traitement des signaux, les connaissances de Linux et j'en passe, c'est vraiment très enrichissant sur tous les domaines, car nous sommes obligés de creuser, d'en apprendre toujours plus pour faire face à l'épreuve avec un maximum d'efficacité. De base, je m'étais inscrit au CSC en 1ère année, en ayant très peu d'ambition au vu de mes faibles connaissances en informatique, mais finalement c'était tellement varié, accessible à tout le monde et ludique que je me suis pris au jeu et j'y ai participé les 2 premières années en finissant toujours avec une grande fierté, bien que n'étant pas allé en finale.
        </P>
        <P>Cette compétition a donc été, comme je l'ai dit plus haut, extrèmement enrichissante dans beaucoup de domaines. Chaque édition durant 32 heures (de 10h un jour à 18h le lendemain), c'est une des épreuves pour laquelle je me suis le plus investi, faisant à chaque fois des nuits assez courtes pour valoriser chaque minute, qui peut être cruciale au terme de ces 32 heures. J'aimerais d'ailleurs pouvoir y participer à nouveau, que ce soit le CSC en tant que tel, ou une activité similaire. J'avais effectivement déjà participé à des Capture the Flag en ligne, ce qui m'a bien préparé au Cyber Security Challenge, mais ce sont souvent des épreuves mondiales, ouvertes à tous, donc en tant qu'étudiants, nous avons que très peu de chances d'arriver à un bon classement. Si l'opportunité se présente à nouveau, je la prendrai donc bien évidement.</P>


        <Heading as="h4" fontSize={16} my={6}>
          <Center>Les preuves de la réalisation pour ce challenge</Center>
        </Heading>







      </Container>
    </Layout>
  )

  export default Work