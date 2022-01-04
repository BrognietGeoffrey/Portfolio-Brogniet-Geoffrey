import {
    Table,
    Thead,
    Tbody,

    Tr,
    Th,
    Td,

    Container,
    Link
  } from '@chakra-ui/react'

import Layout from '../components/layouts/article'


const Posts = () => (

<Layout>
  <Container  maxW='container.xl' m={2}>
    <Table variant='simple' size="sm" colorScheme='blackAlpha'>

      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Type </Th>
          <Th>Nom</Th>
          <Th>Heure prestées</Th>
          <Th>Heure valorisées</Th>
          <Th>Domaine/Cours concerné</Th>
        </Tr>
      </Thead>
      <Tbody>
        {/** LES FORMATIONS */}
        <Tr>
          <Td><b>1</b></Td>
          <Td><Link color="orange.900" href="https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript" target="_blank">Formation </Link></Td>
          <Td><Link color='teal.500' href="/works/opc_js"> Apprenez à programmer en Javascript</Link></Td>
          <Td>15h</Td>
          <Td color='red'>Non valorisé</Td>
          <Td>Programmation</Td>
        </Tr>
        <Tr>
          <Td><b>2</b></Td>
          <Td><Link color="orange.900" href="https://openclassrooms.com/fr/courses/4902061/next-page-to-do" target="_blank">Formation </Link></Td>
          <Td><Link color='teal.500' href="/works/opc_native"> Développez une application mobile React Native</Link></Td>
          <Td>30h</Td>
          <Td>10h</Td>
          <Td>Projet d'intégration</Td>
        </Tr>
        <Tr>
          <Td><b>3</b></Td>
          <Td><Link color="orange.900" href="https://openclassrooms.com/fr/courses/1603881/next-page-to-do" target="_blank">Formation </Link></Td>
          <Td><Link color='teal.500' href="/works/opc_html"> Apprenez à créer votre site web avec HTML5 et CSS3</Link></Td>
          <Td>20h</Td>
          <Td color='red'>Non valorisé</Td>
          <Td>Programmation</Td>
        </Tr>
        <Tr>
          <Td><b>4</b></Td>
          <Td><Link color="orange.900" href="https://openclassrooms.com/fr/courses/6390246/next-page-to-do" target="_blank">Formation </Link></Td>
          <Td><Link color='teal.500' href="/works/opc_fullstack"> Passez au Full Stack avec Node.js, Express et MongoDB</Link></Td>
          <Td>10h</Td>
          <Td>10h</Td>
          <Td>Dev III - Projet d'intégration</Td>
        </Tr>
        <Tr>
          <Td><b>5</b></Td>
          <Td><Link color="orange.900" href="https://openclassrooms.com/fr/courses/6390311/next-page-to-do" target="_blank">Formation </Link></Td>
          <Td><Link color='teal.500' href="/works/opc_vue"> Créez une application web avec Vue.js</Link></Td>
          <Td>30h</Td>
          <Td>10h</Td>
          <Td>Dev III</Td>
        </Tr>
        {/** LES EXTRAS */}
        <Tr size="lg">
          <Td><b>6</b></Td>
          <Td><Link color="purple.700" href="https://www.carrefour.be" target="_blank">Job étudiant </Link></Td>
          <Td><Link color='teal.500' href="/works/extra_carrefour"> Carrefour</Link></Td>
          <Td>+475h</Td>
          <Td>10h</Td>
          <Td>Communication, approche de l'entreprise</Td>
        </Tr>
        <Tr>
          <Td><b>7</b></Td>
          <Td><Link color="blue.500" href="https://www.gimp.org/" target="_blank">Atelier </Link></Td>
          <Td><Link color='teal.500' href="/works/extra_gimp"> GIMP</Link></Td>
          <Td>2h</Td>
          <Td>2h</Td>
          <Td>Technologies des ordinateurs</Td>
        </Tr>
        <Tr>
          <Td><b>8</b></Td>
          <Td><Link color="blue.500" href="https://ephec-alumni.be/" target="_blank">Atelier </Link></Td>
          <Td><Link color='teal.500' href="/works/extra_alumni"> Alumni</Link></Td>
          <Td>2h</Td>
          <Td>2h</Td>
          <Td>Communication, approche de l'entreprise</Td>
        </Tr>
        {/** POUR L'EPHEC */}
        <Tr>
          <Td><b>9</b></Td>
          <Td><Link color="yellow.500" href="https://www.siep.be" target="_blank">Représentation EPHEC </Link></Td>
          <Td><Link color='teal.500' href="/works/ephec_siep"> Salon Siep</Link></Td>
          <Td>8h</Td>
          <Td>8h</Td>
          <Td>Communication</Td>
        </Tr>
        <Tr>
          <Td><b>10</b></Td>
          <Td><Link color="whatsapp.500" href="https://www.cybersecuritychallenge.be/" target="_blank">Capture The Flag </Link></Td>
          <Td><Link color='teal.500' href="/works/extra_cyber"> Cyber Security Challenge</Link></Td>
          <Td>64h</Td>
          <Td>10h</Td>
          <Td>Télécommunication, réseaux, sécurité</Td>
        </Tr>
        <Tr>
          <Td><b>TOTAL</b></Td>
          <Td>

          </Td>
          <Td></Td>
          <Td><b>+500h</b></Td>
          <Td><b>62h</b></Td>
        </Tr>
      </Tbody>


    </Table>
    </Container>
    </Layout>
    )

export default Posts