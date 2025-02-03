import { ReactNode } from "react";

const ContactItem = ({
  icon,
  text,
  isLink = false,
  link,
}: {
  icon: ReactNode;
  text: string;
  isLink?: boolean;
  link?: string;
}) => (
  <div className="flex items-center gap-4">
    {icon}
    {isLink && link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

export default ContactItem;
