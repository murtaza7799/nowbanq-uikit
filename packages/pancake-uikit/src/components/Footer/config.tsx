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
        href: "https://github.com/nowbanq",
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
    href: "https://twitter.com/nowbanq",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/+fwXZQaKD1AVkNmY8",
      },
      // {
      //   label: "Announcements",
      //   href: "https://nowbanq.com/announcements",
      // },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://www.reddit.com/u/nowbanq",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/nowbanq/",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/nowbanq",
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
