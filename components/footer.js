
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'


const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}
const Footer = (props) => {
  const { path } = props

  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Brogniet Geoffrey
      <Container >
      <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'fill', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 1 }}
        >

          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/why" path={path}>
            Pourquoi ce site ?
          </LinkItem>
          <LinkItem href="/recap" path={path}>
            Tableau récapitulatif
          </LinkItem>

          <LinkItem
            _target="_blank"
            href="https://github.com/brognietgeoffrey"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>

        </Stack>
        </Container>
    </Box>


  )}

export default Footer
