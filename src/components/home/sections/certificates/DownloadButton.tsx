"use client";

import Button from "@mui/material/Button";
import { FaDownload } from "react-icons/fa6";
import { outlinedButtonSx } from "@/lib/muiInput";

type DownloadButtonProps = {
  file: string;
  title: string;
};

export function DownloadButton({ file, title }: DownloadButtonProps) {
  return (
    <Button
      href={file}
      download
      fullWidth
      variant="outlined"
      aria-label={`Baixar certificado de ${title}`}
      startIcon={<FaDownload size={14} />}
      sx={{
        ...outlinedButtonSx,
        padding: "0.6rem 1.25rem",
        "&:hover": {
          color: "var(--on-primary)",
          borderColor: "var(--primary)",
          backgroundColor: "var(--primary)",
        },
      }}
    >
      Baixar certificado
    </Button>
  );
}
