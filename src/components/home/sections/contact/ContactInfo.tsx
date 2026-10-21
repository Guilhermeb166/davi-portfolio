import { FaEnvelope, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { Reveal } from "@/components/shared/Reveal";
import { profile } from "@/data/profile";
import { ContactInfoItem } from "./ContactInfoItem";

export function ContactInfo() {
  return (
    <Reveal className="space-y-4">
      <ContactInfoItem
        icon={FaWhatsapp}
        label="WhatsApp"
        value={profile.phone}
        href={`https://wa.me/${profile.whatsapp}`}
      />
      <ContactInfoItem
        icon={FaEnvelope}
        label="E-mail"
        value={profile.email}
        href={`mailto:${profile.email}`}
      />
      <ContactInfoItem
        icon={FaLocationDot}
        label="Atuação"
        value={`${profile.location} e remoto`}
      />
    </Reveal>
  );
}
