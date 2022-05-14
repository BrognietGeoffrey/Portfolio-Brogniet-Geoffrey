import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'


export const Title = ({ children }) => (
  <Box mt={20}>
    <NextLink href="/portfolio">
      <Link> Retour au portfolio </Link>
      
    </NextLink>
      /
    <NextLink href="/recap">
      <Link> Retour au récapitulatif</Link>
      
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading as="h3" fontSize={20} mb={4} >
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  
  <Image boxSize="13em" borderRadius="lg" w="responsive"  src={src} alt={alt} mb={4}
/>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)



