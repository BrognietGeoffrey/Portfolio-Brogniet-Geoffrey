import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Image } from '@chakra-ui/react'
import { Center, Square, Circle ,Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box, Tooltip} from '@chakra-ui/react'




import { WorkGridItem } from '../components/grid-item'

      {/** ----------- LES IMAGES DES GRID -------------------- */}

import preuvejs1 from '../public/images/works/openclassrooms/js/preuvejs1.jpeg'
import preuvenative1 from '../public/images/works/openclassrooms/reactnative/preuvenative1.png'
import preuvevue1 from '../public/images/works/openclassrooms/vue/preuvevue1.jpeg'
import preuvefullstack1 from '../public/images/works/openclassrooms/fullstask/preuvefullstack1.jpeg'
import preuvehtml1 from '../public/images/works/openclassrooms/html/preuvehtml1.jpeg'
import preuvecarrefour1 from '../public/images/works/extra/carrefour/preuvecarrefour1.png'
import preuvegimp1 from '../public/images/works/extra/gimp/preuvegimp1.png'
import preuvegalumni1 from '../public/images/works/extra/alumni/preuvealumni1.png'
import preuvesiep1 from '../public/images/works/ephec/siep/preuvesiep1.jpeg'
import preuvecsc1 from '../public/images/works/extra/csc/preuvecsc1.png'
      {/** ----------- LES POSTS -------------------- */}

const Posts = () => (
  <Layout title="Portfolio" >
    <Center>
      
      <Heading mt={20}>Mon Portfolio</Heading>
    </Center>
    <Container maxW='container.md' alignItems="center" mt={20}>
    <Accordion defaultIndex={[0]} allowMultiple >
    
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'lightgrey', color: 'white' }}>
        <Box flex='1' textAlign='left'>
        <Heading as="h2" fontSize={30} mb={4} color="orange.800" >
        <u>Mes formations openclassrooms</u>
      </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Section delay={0.1} >
        <SimpleGrid columns={[1, 1, 2]} gap={4}>

          {/** FORMATION JAVASCRIPT */}
          <WorkGridItem
            title="Ma formation Javascript"
            thumbnail={preuvejs1}
            id="opc_js"
          />

          {/** FORMATION REACT NATIVE */}
          <WorkGridItem
            title="Ma formation React Native "
            thumbnail={preuvenative1}
            id="opc_native"
          />

          {/** FORMATION VUE.JS */}
          <WorkGridItem
          title = "Ma formation Vue.js"
          thumbnail={preuvevue1}
          id ="opc_vue"
          ></WorkGridItem>

          {/** FORMATION FULLSTACK */}
          <WorkGridItem
          title = "Ma formation FullStack"
          thumbnail={preuvefullstack1}
          id ="opc_fullstack"
          ></WorkGridItem>

          {/** FORMATION HTML CSS */}
          <WorkGridItem
          title = "Ma formation HTML ET CSS"
          thumbnail={preuvehtml1}
          id ="opc_html"
          ></WorkGridItem>
        </SimpleGrid>
      </Section>
    </AccordionPanel>
  </AccordionItem>
 

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Heading as="h2" fontSize={30} mb={4} color="orange.800">
        <u>Mes activités extra-scolaires</u>
      </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Section delay={0.3}>
        <SimpleGrid columns={[1, 1, 2]} gap={10}>
          <WorkGridItem
          title="Mon job étudiant"
          thumbnail={preuvecarrefour1}
          id="extra_carrefour"
          />

          <WorkGridItem
          title="L'atelier GIMP"
          thumbnail={preuvegimp1}
          id="extra_gimp"
          />
          <WorkGridItem
          title="L'atelier Alumni"
          thumbnail={preuvegalumni1}
          id="extra_alumni"
          />
          <WorkGridItem
          title="Cyber Security Challenge"
          thumbnail={preuvecsc1}
          id="extra_cyber"
          />
        </SimpleGrid>
      </Section>
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Heading as="h2" fontSize={30} mb={4} color="orange.800">
        <u>Mes activités pour l&apos;EPHEC</u>
      </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Section delay={0.5}>
        <SimpleGrid columns={[1, 1, 2]} gap={1}>
            <WorkGridItem
            title="Représentation active au SIEP"
            thumbnail={preuvesiep1}
            id="ephec_siep"
            />
        </SimpleGrid>
      </Section>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

     
    </Container>
  </Layout>
)

export default Posts
