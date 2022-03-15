import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFreqquency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    // <Link href={`/property/${externalID}`} passHref>
    <div>
      <Flex
        flexWrap='wrap'
        w='420px'
        p='5'
        paddingTop='0'
        justifyContent='flex-start'
        cursor='pointer'
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            width='400'
            height='260'
            alt='House'
          />
        </Box>
        <Box w='full'>
          <Flex
            paddingTop='2'
            justifyContent='space-between'
            alignItems='center'
          >
            <Flex alignItems='center'>
              <Box paddingRight='3' color='green.300'>
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight='bold' fontSize='lg'>
                AED {millify(price)}
                {rentFreqquency && `/${rentFreqquency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size='sm' src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            alignItems='center'
            padding='1'
            w='250px'
            justifyContent='space-between'
            color='blue.400'
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
            <BsGridFill />
          </Flex>
          <Text fontSize='lg'>
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Flex>
    </div>
    // </Link>
  );
};

export default Property;
