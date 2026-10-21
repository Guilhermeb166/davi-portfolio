import type { SxProps, Theme } from "@mui/material/styles";

export const inputSx: SxProps<Theme> = {
  "& .MuiInputLabel-root": {
    color: "var(--muted)",
    fontFamily: "inherit",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--primary)",
  },
  "& .MuiOutlinedInput-root": {
    color: "var(--foreground)",
    fontFamily: "inherit",
    borderRadius: "1rem",
    backgroundColor: "var(--surface)",
    transition: "box-shadow 0.25s ease, background-color 0.25s ease",
    "& fieldset": {
      borderColor: "var(--border)",
    },
    "&:hover fieldset": {
      borderColor: "var(--primary)",
    },
    "&.Mui-focused": {
      boxShadow: "0 0 0 4px var(--glow)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--primary)",
    },
    "&.Mui-error fieldset": {
      borderColor: "var(--accent)",
    },
  },
  "& .MuiFormHelperText-root": {
    color: "var(--muted)",
    fontFamily: "inherit",
  },
};

export const primaryButtonSx: SxProps<Theme> = {
  borderRadius: "9999px",
  textTransform: "none",
  fontWeight: 700,
  fontFamily: "inherit",
  padding: "0.85rem 1.75rem",
  color: "var(--on-primary)",
  backgroundImage:
    "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
  boxShadow: "0 12px 30px -10px var(--glow)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 18px 36px -10px var(--glow)",
  },
};

export const outlinedButtonSx: SxProps<Theme> = {
  borderRadius: "9999px",
  textTransform: "none",
  fontWeight: 700,
  fontFamily: "inherit",
  padding: "0.85rem 1.75rem",
  color: "var(--foreground)",
  borderColor: "var(--border)",
  backgroundColor: "var(--surface)",
  "&:hover": {
    borderColor: "var(--primary)",
    backgroundColor: "var(--primary-soft)",
  },
};
