import React, { useState } from "react";
import { Link } from "react-router-dom";
import accIcon from "../../../static/icons/acc.png";
import LinkTags from "./LinkTags";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, Box, IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const headerLinks = [
  {
    name: "About Us",
    link: "/officers",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Sponsors",
    link: "/sponsors",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const headerContainerStyle = {
    width: "100vw",
    position: "sticky",
    top: "0",
    backgroundColor: "white",
    zIndex: 1000,
    marginLeft: "calc(-50vw + 50%)",
    marginRight: "calc(-50vw + 50%)",
  };

  const flexRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 0",
    width: "95%",
    maxWidth: "75%",
    margin: "0 auto",
    "@media (min-width: 640px)": {
      width: "75%",
    },
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

  const joinButtonStyle = {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "50px",
    padding: "10px 20px",
    textDecoration: "none",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontWeight: 500,
    transition: "all 0.3s ease",
    display: "inline-block",
    marginLeft: "20px",
    whiteSpace: "nowrap",
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box sx={headerContainerStyle}>
      <Box
        sx={{
          ...flexRow,
          width: "95%",
          maxWidth: "75%",
          margin: "0 auto",
          "@media (min-width: 640px)": {
            width: "75%",
          },
        }}
      >
        <div className="py-3">
          <Link to="/" style={{ display: "inline-block" }}>
            <img
              src={accIcon}
              alt="ACC Icon"
              width={125}
              style={{
                transition: "transform 0.3s ease, opacity 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.opacity = "1";
              }}
            />
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {isMd ? (
            <>
              <LinkTags linkData={headerLinks} />
              <Link
                to="/join"
                style={joinButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor =
                    theme.palette.primary.dark || "#2a4f8a";
                  e.target.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = theme.palette.primary.main;
                  e.target.style.opacity = "1";
                }}
              >
                Join
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/join"
                style={joinButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor =
                    theme.palette.primary.dark || "#2a4f8a";
                  e.target.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = theme.palette.primary.main;
                  e.target.style.opacity = "1";
                }}
              >
                Join
              </Link>
              <IconButton
                onClick={toggleMobileMenu}
                sx={{ color: theme.palette.text.primary, marginLeft: "10px" }}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              {isMobileMenuOpen && (
                <Box sx={mobileMenuStyle}>
                  {headerLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.link}
                      className="header-link"
                      style={mobileMenuItemStyle}
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              )}
            </>
          )}
        </div>
      </Box>
    </Box>
  );
}
