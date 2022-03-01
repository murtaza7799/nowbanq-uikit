import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "http://nowbanq.com/contactus",
      },
      {
        label: "Blog",
        href: "http://nowbanq.com/blog",
      },
      {
        label: "Community",
        href: "http://nowbanq.com/community",
      },
      {
        label: "CAKE",
        href: "http://nowbanq.com/cake",
      },
    
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support http://nowbanq.com/customer",
      },
      {
        label: "Troubleshooting",
        href: "http://nowbanq.com/troubleshooting",
      },
      {
        label: "Guides",
        href: "http://nowbanq.com/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "http://nowbanq.com/github",
      },
      {
        label: "Documentation",
        href: "http://nowbanq.com/documentation",
      },
    
      {
        label: "Audits",
        href: "http://nowbanq.com/audits",
      },
      {
        label: "Careers",
        href: "http://nowbanq.com/careers",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "http://nowbanq.com/twitter",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "http://nowbanq.com/telegram",
      },
      {
        label: "Announcements",
        href: "http://nowbanq.com/announcements",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "http://nowbanq.com/reddit",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "http://nowbanq.com/instagram",
  },
  {
    label: "Github",
    icon: "Github",
    href: "http://nowbanq.com/github",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "http://nowbanq.com/discord",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
