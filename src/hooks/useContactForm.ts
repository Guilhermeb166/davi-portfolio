"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { profile } from "@/data/profile";

type Fields = {
  name: string;
  email: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const initialFields: Fields = { name: "", email: "", service: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "Informe seu nome.";
  if (!emailPattern.test(fields.email))
    errors.email = "Informe um e-mail válido.";
  if (!fields.service) errors.service = "Escolha um serviço.";
  if (fields.message.trim().length < 10)
    errors.message = "Descreva sua necessidade (mín. 10 caracteres).";
  return errors;
}

function buildWhatsappUrl(fields: Fields) {
  const text = [
    `Olá, Davi! Meu nome é ${fields.name}.`,
    `Serviço de interesse: ${fields.service}.`,
    `${fields.message}`,
    `Contato: ${fields.email}`,
  ].join("\n");
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function useContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onChange =
    (key: keyof Fields) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((current) => ({ ...current, [key]: event.target.value }));
      setErrors((current) => ({ ...current, [key]: undefined }));
    };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    window.open(buildWhatsappUrl(fields), "_blank", "noopener,noreferrer");
    setFields(initialFields);
    setSent(true);
  };

  return {
    fields,
    errors,
    sent,
    onChange,
    onSubmit,
    closeSent: () => setSent(false),
  };
}
