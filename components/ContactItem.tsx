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
  <div className="flex items-center gap-4 text-blue-800 dark:text-blue-500">
    {icon}
    {isLink && link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-blue-600"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

export default ContactItem;
