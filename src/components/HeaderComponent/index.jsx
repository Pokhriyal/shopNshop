import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import logo from './Logo.svg';

const pages = [
  { title: 'Cash Loan', url: '#' },
  { title: 'Home Loan', url: '#' },
  { title: 'Health Insurance', url: '#' },
  { title: 'Mutual Fund', url: '#' },
  { title: 'Calculators', url: '#' },
  { title: 'Blogs', url: 'http://167.71.233.181:5656/', target: '_blank' },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#10162c',
        height: 80,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img src={logo} alt="logo" />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              position: 'absolute',
              right: '0',
              top: '12px',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', color: 'white' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link
                    color="inherit"
                    noWrap
                    key={page.title}
                    variant="body2"
                    href={page.url}
                    sx={{ p: 1, flexShrink: 0 }}
                    target={page.target}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {page.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{
                  m: 1,
                  color: 'white',
                  display: 'block',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                }}
                type="link"
                href={page.url}
                target={page.target}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
