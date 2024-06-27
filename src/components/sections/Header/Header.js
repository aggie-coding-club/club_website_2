import React, { useState } from 'react';
import accIcon from "../../../static/icons/acc.png";
import LinkTags from "./LinkTags";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, Box, IconButton } from "@mui/material";
import { useMediaQuery } from '@mui/material';

const headerLinks = [
  {
    name: "Join",
    link: "#how-to-join",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Officers",
    link: "#officer-team",
  },
  {
    name: "Sponsors",
    link: "#sponsors",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const flexRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 0",
    position: "sticky",
    top: "0",
    backgroundColor: "white",
    zIndex: 1000,
  };

  const mobileMenuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "60px",
    width: "100%",
    backgroundColor: "white",
    zIndex: 1001,
  };

  const mobileMenuItemStyle = {
    color: theme.palette.text.primary,
    margin: "10px 0",
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={flexRow}>
      <div className="py-3">
        <a href="#">
          <img src={accIcon} alt="ACC Icon" width={125} />
        </a>
      </div>
      {isMd ? (
        <LinkTags linkData={headerLinks} />
      ) : (
        <>
          <IconButton onClick={toggleMobileMenu} sx={{ color: theme.palette.text.primary }}>
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          {isMobileMenuOpen && (
            <Box sx={mobileMenuStyle}>
              {headerLinks.map((link) => (
                <a key={link.name} href={link.link} className="header-link" style={mobileMenuItemStyle} onClick={toggleMobileMenu}>
                  {link.name}
                </a>
              ))}
            </Box>
          )}
        </>
      )}
    </div>
  );
}

