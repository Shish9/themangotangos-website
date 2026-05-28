import type { Metadata, Viewport } from "next";
import { Fredoka, Plus_Jakarta_Sans, Caveat, Gloock } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const gloock = Gloock({
  subsets: ["latin"],
  variable: "--font-gloock",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://themangotangos.tv"),
  title: {
    default: "themangotangos — cozy gamer girl streaming on Twitch 🥭",
    template: "%s · themangotangos",
  },
  description:
    "Welcome to the Mango Garden — themangotangos streams hella variety on Twitch and Kick. cozy RPGs, horror nights, multiplayer chaos. Join the community on Discord.",
  keywords: [
    "themangotangos",
    "twitch streamer",
    "kick streamer",
    "cozy gamer girl",
    "variety streamer",
    "streamer portfolio",
    "mango",
    "streamer brand",
    "discord community",
    "horror gaming",
  ],
  authors: [{ name: "themangotangos" }],
  creator: "themangotangos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://themangotangos.tv",
    siteName: "themangotangos",
    title: "themangotangos — cozy gamer girl streaming on Twitch + Kick 🥭",
    description:
      "Join the Mango Garden — cozy RPGs, horror nights, multiplayer chaos. hella variety.",
  },
  twitter: {
    card: "summary_large_image",
    title: "themangotangos — cozy gamer girl streaming on Twitch + Kick",
    description: "Cozy RPGs, horror nights, multiplayer chaos. hella variety.",
    creator: "@themangotangos",
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🥭%3C/text%3E%3C/svg%3E",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0812",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${jakarta.variable} ${caveat.variable} ${gloock.variable}`}
    >
      <body className="font-sans relative">{children}</body>
    </html>
  );
}
