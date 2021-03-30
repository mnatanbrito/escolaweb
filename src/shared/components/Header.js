import React, { useContext } from 'react';
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
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';

import { formatDisplayName } from '../utils/strings';
import AuthContext from '../../components/auth/AuthContext';
import UserInfoContext from '../../components/auth/UserInfoContext';

export default function Header() {
  const authContext = useContext(AuthContext);
  const userInfo = useContext(UserInfoContext);
  const mutation = useMutation(() => authContext.signOut());

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
                  {formatDisplayName(userInfo.displayName)}
                </>
              )}
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to="/perfil">Perfil</Link>
            </MenuItem>
            <MenuItem onClick={() => mutation.mutate()}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Stack>
  );
}
