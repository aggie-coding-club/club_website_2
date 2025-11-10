import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";

export default function ComboUnlockedDialog({ open, onClose }) {
  const theme = useTheme();

  // Import images - using Andrew Beketov and Christion Bradley
  const andrewImage = require("../../static/images/officers/andrew_beketov.jpg");
  const christionImage = require("../../static/images/officers/christion_bradley.jpg");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          padding: "20px",
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.text.secondary} 100%)`,
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          color: "white",
          fontSize: "32px",
          fontWeight: 700,
          padding: "20px 0",
        }}
      >
        🎉 Combo Unlocked! 🎉
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            padding: "20px 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <Box
              component="img"
              src={andrewImage}
              alt="Andrew"
              sx={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid white",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            />
            <Typography
              sx={{
                fontSize: "48px",
                lineHeight: 1,
              }}
            >
              ❤️
            </Typography>
            <Box
              component="img"
              src={christionImage}
              alt="Christion"
              sx={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid white",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{
              marginBottom: "20px",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            You found the secret! 💕
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              opacity: 0.95,
            }}
          >
            Andrew and Christion are forever inseparable!
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
