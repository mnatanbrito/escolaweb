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

import { formatDisplayName } from '../utils/strings';
import AuthContext from '../../components/auth/AuthContext';
import UserInfoContext from '../../components/auth/UserInfoContext';

export default function Header() {
  const authContext = useContext(AuthContext);
  const userInfo = useContext(UserInfoContext);

  const onSignOut = async () => {
    try {
      await authContext.signOut();
    } catch (err) {
      console.error(`não foi possível realizar o sign out: ${err.message}`);
    }
  };

  return (
    <Stack isInline justify="space-between" align="center" flex={1}>
      <Text>Escola Web</Text>
      <Stack isInline align="center" justify="center">
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />} bg="gray.50">
            <HStack>
              {userInfo && (
                <>
                  {userInfo.photoURL && (
                    <Avatar
                      size="sm"
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                    />
                  )}
                  {formatDisplayName(userInfo.displayName)}
                </>
              )}
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem>Perfil</MenuItem>
            <MenuItem onClick={onSignOut}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Stack>
  );
}
