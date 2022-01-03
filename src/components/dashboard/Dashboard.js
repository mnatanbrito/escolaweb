import React from 'react'
import {VStack} from '@chakra-ui/react'

import ContentLayout from '../../shared/components/ContentLayout'
import MinhasEscolas from '../escola/MinhasEscolas'
import MenuRapido from './MenuRapido'

export default function Dashboard() {
  return (
    <ContentLayout title="Dashboard">
      <VStack justifyContent="flex-start" alignItems="flex-start" spacing={3}>
        <MenuRapido />
        <MinhasEscolas />
      </VStack>
    </ContentLayout>
  )
}
