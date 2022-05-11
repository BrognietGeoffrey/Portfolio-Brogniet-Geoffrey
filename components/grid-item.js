import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Button, Center } from '@chakra-ui/react'
import { Global } from '@emotion/react'
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

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="80%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w='90%' alignItems='center' color='black.500' m={4} bg="facebook"
  fontWeight='semibold'
  letterSpacing='wide'
  fontSize='l'
  textTransform='uppercase'
  ml='2'
  minHeight='10em'>
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          


        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={1} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const ImageGridItem = ({ children, href, title, thumbnail }) => (
  <Box  textAlign="center" mb={20}>
    <LinkBox cursor="pointer">

      <LinkOverlay href={href} target="_blank" m={6}>
        <Text m={3} fontSize='15px' color='messenger.500' as="i">{title}</Text>
      </LinkOverlay>
      <Center>
    
      <Popover  placement='auto-end'>
  <PopoverTrigger>
    <Button>Afficher la preuve</Button>
  </PopoverTrigger>
  <PopoverContent width="50%" ml='20em'>


    <Center>
    <PopoverBody  ><Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
       
       
       
        
      /></PopoverBody>
      </Center>
  </PopoverContent>
</Popover>
</Center>
      
      <Text fontSize={30} m={6}>{children}</Text>
    </LinkBox>
  </Box>
)
export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
       
      }
      .grid-item-thumbnail :hover {
        width : 100em;
      }
    `}
  />
)
