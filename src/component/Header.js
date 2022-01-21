import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#cc7a00' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h4" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            AZZELYA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              <div className="hamburger">
                <Link to="/" className="btn">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </Link>
                <Link to="/about" className="btn">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">About</Typography>
                  </MenuItem>
                </Link>
                <Link to="/project" className="btn">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Project</Typography>
                  </MenuItem>
                </Link>
                <Link to="/contact" className="btn">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Contact</Typography>
                  </MenuItem>
                </Link>
              </div>
            </Menu>
          </Box>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            AZZELYA
          </Typography>
          <div className="hamburger">
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <div className="header">
                <Link to="/" className="btn">
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Home
                  </Button>
                </Link>
                <Link to="/about" className="btn">
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    About
                  </Button>
                </Link>
                <Link to="/project" className="btn">
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Project
                  </Button>
                </Link>
                <Link to="/contact" className="btn">
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Contact
                  </Button>
                </Link>
              </div>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
