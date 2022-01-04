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
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'


const Home = () => (
  <Layout  >
    <Container   maxW='container.lg'>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Bonjour, je suis en étudiant qui aime le frontend !
      </Box>

      <Box display={{ md: 'flex' }} align="center" my={4}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Brogniet Geoffrey
          </Heading>
          <p>Étudiant et futur diplomé en technologies de l&apos;informatique (cinéphile / développeur)</p>
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
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Étudiant de 22 ans qui décide de se lancer en tant que programmeur frontend.
        </Paragraph>
        <Box align="center" my={4}>

        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Ma scolarité
        </Heading>
        <BioSection>
          <BioYear>2018-Present </BioYear>
          Etude en technologies de l&apos;informatique à l&apos;EPHEC.
        </BioSection>
        <BioSection>
          <BioYear>2011-2018</BioYear>
          Secondaire,
          Étude de latin, de sciences-économique et d&apos;anglais
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
        Mes expériences professionnelles
        </Heading>
        <BioSection>
          <BioYear>2016-Present </BioYear>
          Job étudiant
          Carrefour Market Marius Renard
              (Anderlecht)
        </BioSection>
        <BioSection>
          <BioYear>2015-2016</BioYear>
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
