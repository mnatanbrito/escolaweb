import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

import Container from '../../shared/components/Container';
import LabeledPanel from '../../shared/components/LabeledPanel';
import MinhasEscolas from '../escola/MinhasEscolas';

export default function Dashboard() {
  return (
    <Flex flex={1} flexDirection="column">
      <Flex bg="blue.600" height="180px" p={3}>
        <Container>
          <Heading color="white">Dashboard</Heading>
        </Container>
      </Flex>
      <Flex flex={1} flexGrow={1} p={3}>
        <Container>
          <LabeledPanel label="Minhas escolas">
            <MinhasEscolas />
          </LabeledPanel>
        </Container>
      </Flex>
    </Flex>
  );
}
