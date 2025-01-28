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
  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
    {icon}
    {isLink && link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-blue-500"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

export default ContactItem;
