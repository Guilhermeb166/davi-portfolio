"use client";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import { FaPaperPlane } from "react-icons/fa6";
import { Reveal } from "@/components/shared/Reveal";
import { services } from "@/data/services";
import { useContactForm } from "@/hooks/useContactForm";
import { inputSx, primaryButtonSx } from "@/lib/muiInput";

export function ContactForm() {
  const { fields, errors, sent, onChange, onSubmit, closeSent } =
    useContactForm();

  return (
    <Reveal delay={0.1}>
      <form
        onSubmit={onSubmit}
        noValidate
        className="grid gap-5 rounded-3xl border border-border bg-surface p-6 shadow-card sm:grid-cols-2 sm:p-8"
      >
        <TextField
          label="Seu nome"
          value={fields.name}
          onChange={onChange("name")}
          error={!!errors.name}
          helperText={errors.name}
          sx={inputSx}
          fullWidth
        />
        <TextField
          label="E-mail"
          type="email"
          value={fields.email}
          onChange={onChange("email")}
          error={!!errors.email}
          helperText={errors.email}
          sx={inputSx}
          fullWidth
        />
        <TextField
          select
          label="Serviço de interesse"
          value={fields.service}
          onChange={onChange("service")}
          error={!!errors.service}
          helperText={errors.service}
          sx={inputSx}
          fullWidth
          className="sm:col-span-2"
        >
          {services.map((service) => (
            <MenuItem key={service.title} value={service.title}>
              {service.title}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Conte sobre o seu projeto"
          value={fields.message}
          onChange={onChange("message")}
          error={!!errors.message}
          helperText={errors.message}
          sx={inputSx}
          fullWidth
          multiline
          minRows={5}
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <Button
            type="submit"
            sx={primaryButtonSx}
            endIcon={<FaPaperPlane size={14} />}
          >
            Enviar mensagem
          </Button>
        </div>
      </form>

      <Snackbar
        open={sent}
        autoHideDuration={5000}
        onClose={closeSent}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={closeSent} severity="success" variant="filled">
          Abrindo o WhatsApp para finalizar o envio!
        </Alert>
      </Snackbar>
    </Reveal>
  );
}
