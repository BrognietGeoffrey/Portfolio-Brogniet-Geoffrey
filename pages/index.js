import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Badge, 
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import {AttachmentIcon} from '@chakra-ui/icons'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'


const Home = () => (
  <Layout  >
    <Container   maxW='container.lg'>
      <Box
        borderRadius="lg"
        mb={6}
        mt={20}
        p={3}
        textAlign="center"
        bg="lightgrey"
      >
        Bonjour, je suis en étudiant qui aime le développement Web ! 
      </Box>

      <Box display={{ md: 'flex' }} align="center" my={4}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Brogniet Geoffrey
          </Heading>
          <p>Étudiant et futur diplomé en technologies de l&apos;informatique, passioné de cinéma</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/moi.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
      <Link href="https://drive.google.com/uc?export=download&id=1Y9sGfISdi7BhQf66rmadAogmrs6Bbmtl" download>
            <Button rightIcon={<AttachmentIcon />} colorScheme="teal">
              Télécharger mon CV
            </Button>
            </Link>
        <Heading as="h3" variant="section-title">
          Mon projet professionnel
        </Heading>
        <Paragraph align="justify">
        Après mes études, je souhaite devenir développeur frontend, donc développer toutes les parties visibles d'un site web ou d'une application.Je prévois également un avenir en tant qu'informaticien de terrain,  qui se déplace afin d'alterner mes activités. Et enfin, je souhaite également, après avoir acquis plus d'expériences, me lancer dans du freelance.
        </Paragraph>
        <Box align="center" my={4}>

        </Box>
      </Section>

      <Section delay={0.2}>
        
        <Heading as="h3" variant="section-title">
          Ma scolarité
        </Heading>
        <BioSection align="justify">
          <BioYear>2018-2022 </BioYear>
          Étude des technologies de l’informatique. Cela consiste à la création de site, à la maintenance ou création de réseaux ou encore de circuits électroniques.
        </BioSection>
        <BioSection align="justify">
          <BioYear>2011-2018 </BioYear>
          
          Enseignement général à l’Institut des Sœurs de Notre Dame dans la section sciences économique/anglais.
          
        </BioSection>
      </Section>

      <Section delay={0.2} align="justify">
        
        <Heading as="h3" variant="section-title">
        Mes expériences professionnelles
        </Heading>
        <BioSection align="justify">
          <BioYear>2016-Present </BioYear>
          Travail étudiant durant les samedis de l’année et les grandes vacances. L’objectif du travail est de remplir les rayons, de répondre aux besoins et questions des clients ainsi que de savoir encaisser les clients. Expérience en fruits et légumes, crèmerie, boulangerie et caisses.
      
          Carrefour Market Marius Renard
              (Anderlecht)
        </BioSection>
        <BioSection align="justify">
          <BioYear>2015-2016</BioYear>
          Travail étudiant durant les grandes vacances. L’objectif du travail est de remplir les machines d’ampoules vides, de vider les sas d’ampoules remplies et de vérifier et remplir les bidons de liquides.
          Job étudiant chez Sterop
        </BioSection>
      </Section>



      <Section delay={0.3} >
        <Heading as="h3" variant="section-title">
          Où peut-on me trouver ?
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @brognietgeoffrey
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/geof_bro" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @Brogniet Geoffrey
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/brognietgeoffrey" target="_blank">
              <Button
              variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}>
                  Brogniet Geoffrey 
              </Button>
            </Link>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>


        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/portfolio">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Voir mon portfolio
            </Button>
            </NextLink>
            
            
          
        </Box>
       
      </Section>
    </Container>
  </Layout>
)

export default Home
