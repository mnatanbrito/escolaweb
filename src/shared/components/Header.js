import React from 'react'
import {
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Avatar,
  HStack,
} from '@chakra-ui/react'
import {FaChevronDown} from 'react-icons/fa'
import {useMutation} from 'react-query'
import {Link} from 'react-router-dom'

import useUserInfoContext from '../../components/auth/useUserInfoContext'
import useAuthContext from '../../components/auth/useAuthContext'

export default function Header() {
  const authContext = useAuthContext()
  const userInfo = useUserInfoContext()
  const mutation = useMutation(() => authContext.signOut())

  const onSignOut = async () => {
    await mutation.mutateAsync()
  }

  return (
    <Stack isInline justify="space-between" align="center" flex={1}>
      <Link to="/dashboard">
        <Text>Escola Web</Text>
      </Link>
      <Stack isInline align="center" justify="center">
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />} bg="gray.50">
            <HStack>
              {userInfo && (
                <>
                  {userInfo.photoURL && (
                    <Avatar
                      size="sm"
                      name={userInfo.displayName}
                      src={userInfo.photoURL}
                    />
                  )}
                  {userInfo.displayName}
                </>
              )}
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to="/perfil">Perfil</Link>
            </MenuItem>
            <MenuItem onClick={onSignOut}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Stack>
  )
}
