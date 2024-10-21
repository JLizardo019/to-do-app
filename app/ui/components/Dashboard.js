'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import PersonIcon from '@mui/icons-material/Person';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Chip from '@mui/material/Chip';

import CallIcon from '@mui/icons-material/Call';

import ViewList from './ViewList';
import NewList from './NewList';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

const NAVIGATION = [
  {
    segment: 'new-list',
    title: 'Create New List',
    icon: <LibraryAddIcon />,
  },
  { kind: 'header', title: 'Your Lists' },  
  {kind: 'divider'},
  {
    segment: 'contacts',
    title: 'Contacts',
    icon: <PersonIcon />,
    action: <Chip label={7} color="primary" size="small" />,
  },
  {
    segment: 'calls',
    title: 'Calls',
    icon: <CallIcon />,
    
  },
      // children: CALLS_NAVIGATION,
      // action: popoverMenuAction,


];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  
  if (pathname === '/new-list') {
    return <NewList />;
  }
  else if (pathname.includes('/list')) {
    return <ViewList listId=""/>;
  }
  else {
    return (
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1>Welcome to To-Do</h1>
        <p>
          Click on the <strong>Create New List</strong> button to get started.
        </p>
      </Box>
    );
  }

}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBranding(props) {
  const { window } = props;

  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      branding={{
        logo: <img src="/images/logo.svg" alt="To-Do logo" />,
        title: 'To-Do',
      }}
      router={router}
      theme={demoTheme}
      
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>  );
}



export default DashboardLayoutBranding;
