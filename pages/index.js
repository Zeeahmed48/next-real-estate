import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { fetchApi } from '../utils/fetchApi';

axios.defaults.baseURL = 'https://bayut.p.rapidapi.com';

const Banner = ({
  imageUrl,
  purpose,
  title1,
  title2,
  des1,
  des2,
  linkName,
  buttonText,
}) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} alt='Banner' />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>
        {purpose}
      </Text>
      <Text fontSize='3xl' fontWeight='bold'>
        {title1} <br /> {title2}
      </Text>
      <Text
        color='gray.700'
        fontSize='lg'
        fontWeight='medium'
        paddingTop='3'
        paddingBottom='3'
      >
        {des1} <br /> {des2}
      </Text>
      <Button fontSize='xl'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertyForSell, propertyForRent }) {
  return (
    <Box>
      <Banner
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        des1='Explore Apartments, Villas, Homes'
        des2='and more'
        linkName='/search?pupose=for-rent'
        buttonText='Explore Renting'
      />
      <Flex flexWrap='wrap'>
        {propertyForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        purpose='BUY A HOME'
        title1='Find, Buy & Own Your'
        title2='Dream House'
        des1='Explore Apartments, Villas, Homes'
        des2='and more'
        linkName='/search?pupose=for-sale'
        buttonText='Explore Buying'
      />
      <Flex flexWrap='wrap'>
        {propertyForSell.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSell = await fetchApi(
    '/properties/list?locationExternalIDs=5002&pupose=for-sale&hitsPerPage=6'
  );
  const propertyForRent = await fetchApi(
    '/properties/list?locationExternalIDs=5002&pupose=for-rent&hitsPerPage=6'
  );

  return {
    props: {
      propertyForSell: propertyForSell?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
