import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://nowbanq.com/contactus",
      },
      {
        label: "Blog",
        href: "https://nowbanq.com/blog",
      },
      {
        label: "Community",
        href: "https://nowbanq.com/community",
      },
      {
        label: "CAKE",
        href: "https://nowbanq.com/cake",
      },
    
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://nowbanq.com/customer",
      },
      {
        label: "Troubleshooting",
        href: "https://nowbanq.com/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://nowbanq.com/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://nowbanq.com/github",
      },
      {
        label: "Documentation",
        href: "https://nowbanq.com/documentation",
      },
    
      {
        label: "Audits",
        href: "https://nowbanq.com/audits",
      },
      {
        label: "Careers",
        href: "https://nowbanq.com/careers",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://nowbanq.com/twitter",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://nowbanq.com/telegram",
      },
      {
        label: "Announcements",
        href: "https://nowbanq.com/announcements",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://nowbanq.com/reddit",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://nowbanq.com/instagram",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://nowbanq.com/github",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://nowbanq.com/discord",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
