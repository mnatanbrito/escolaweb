import React from 'react';
import { Flex, Heading, Avatar } from '@chakra-ui/core';

import Container from '../../shared/components/Container';
import LabeledPanel from '../../shared/components/LabeledPanel';

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
          <LabeledPanel label="Alunos">
            <Avatar
              size="lg"
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
            />
          </LabeledPanel>
        </Container>
      </Flex>
    </Flex>
  );
}
