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
} from '@chakra-ui/react';

import AuthContext from '../../components/auth/AuthContext';

export default function Header() {
  const authContext = useContext(AuthContext);

  const onSignOut = async () => {
    try {
      console.log('signing out');
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
          <MenuButton as={Button} rightIcon="chevron-down" bg="gray.50">
            <Avatar
              size="sm"
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
            />
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
