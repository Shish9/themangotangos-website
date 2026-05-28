import {
  Twitch,
  MessageCircle,
  Music2,
  Youtube,
  Instagram,
  Twitter,
} from "lucide-react";
import type { ComponentType } from "react";
import { KickIcon } from "@/components/icons/KickIcon";

// Loose icon type so both Lucide icons and custom SVG components fit
// (Lucide accepts strokeWidth, custom icons may not — using `any` deliberately).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = ComponentType<any>;

export const STREAMER = {
  name: "themangotangos",
  display: "mangotangos",
  tagline: "elo i'm selina · cozy variety chaos · don't be stopid 🥭",
  bio: "elo my name is selina ヽ(°〇°)ﾉ — i'm 27 and on this channel you'll see me play hella variety games c: first stream was january 31, 2023.",
  twitchUrl: "https://twitch.tv/themangotangos",
  kickUrl: "https://kick.com/themangotangos",
  discordUrl: "https://discord.gg/themangotangos",
  tipUrl: "https://streamelements.com/themangotangos/tip",
};

export type SocialPlatform = {
  name: string;
  handle: string;
  url: string;
  icon: IconComponent;
  gradient: string;
  shadow: string;
  followers: string;
};

export const SOCIALS: SocialPlatform[] = [
  {
    name: "Twitch",
    handle: "@themangotangos",
    url: "https://twitch.tv/themangotangos",
    icon: Twitch,
    gradient: "from-twitch via-twitch-light to-lavender-mango",
    shadow: "shadow-glow-purple",
    followers: "12.4K",
  },
  {
    name: "Kick",
    handle: "@themangotangos",
    url: "https://kick.com/themangotangos",
    icon: KickIcon,
    gradient: "from-emerald-400 via-green-400 to-lime-400",
    shadow: "shadow-glow-cyan",
    followers: "2.1K",
  },
  {
    name: "Discord",
    handle: "Mango Garden",
    url: "https://discord.gg/themangotangos",
    icon: MessageCircle,
    gradient: "from-indigo-500 via-twitch to-lavender-mango",
    shadow: "shadow-glow-purple",
    followers: "3.2K",
  },
  {
    name: "TikTok",
    handle: "@themangotangos",
    url: "https://tiktok.com/@themangotangos",
    icon: Music2,
    gradient: "from-pink-mango via-accent-cyan to-fuchsia-500",
    shadow: "shadow-glow-pink",
    followers: "48.9K",
  },
  {
    name: "YouTube",
    handle: "themangotangos",
    url: "https://youtube.com/@themangotangos",
    icon: Youtube,
    gradient: "from-red-500 via-pink-mango to-peach-mango",
    shadow: "shadow-glow-peach",
    followers: "8.7K",
  },
  {
    name: "Instagram",
    handle: "@themangotangos",
    url: "https://instagram.com/themangotangos",
    icon: Instagram,
    gradient: "from-peach-mango via-pink-mango to-fuchsia-500",
    shadow: "shadow-glow-pink",
    followers: "6.1K",
  },
  {
    name: "Twitter / X",
    handle: "@themangotangos",
    url: "https://x.com/themangotangos",
    icon: Twitter,
    gradient: "from-accent-cyan via-lavender-mango to-twitch",
    shadow: "shadow-glow-cyan",
    followers: "5.4K",
  },
];

export type ClipItem = {
  slug: string;
  title: string;
  game: string;
  views: number;
  duration: number; // seconds
  thumb: string;
  url: string;
};

/**
 * Real clips pulled live from her Twitch — last 30 days.
 * Source: https://www.twitch.tv/themangotangos/clips?range=30d
 */
export const CLIPS: ClipItem[] = [
  { slug: "LongTenderRutabagaFUNgineer-E5dzHrsQjMf98Fr1", title: "ILL HOLD YOU!!!!",                    game: "Just Chatting",      views: 160, duration: 21, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/f482b377-007f-49e3-9e15-4fc73e8d6d94/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/LongTenderRutabagaFUNgineer-E5dzHrsQjMf98Fr1" },
  { slug: "DiligentAnnoyingAmazonHoneyBadger-dA74Nxat4r4VEiyh", title: "ABDUL LOVES .... HIMSELF???",   game: "Just Chatting",      views: 82,  duration: 19, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/96b37f32-1545-4cab-8985-53401e1e70a5/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/DiligentAnnoyingAmazonHoneyBadger-dA74Nxat4r4VEiyh" },
  { slug: "PowerfulSarcasticFungusTwitchRaid-PGgnOXZab2puqrAB",  title: "evil eye (volume warning)",   game: "R.E.P.O.",           views: 34,  duration: 59, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/fa2a29de-db32-4804-9f91-6a5941a25382/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/PowerfulSarcasticFungusTwitchRaid-PGgnOXZab2puqrAB" },
  { slug: "UglyDeafMallardPRChase-0GknzovPthCbqzwJ",            title: "WAIT! they dont love u like i love u", game: "Just Chatting", views: 9,  duration: 21, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/dd3e5bf7-30e9-4247-ac7a-166c1629cf28/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/UglyDeafMallardPRChase-0GknzovPthCbqzwJ" },
  { slug: "SlickInventiveCheesecakeCmonBruh-miovGZZPSXh3FYtF",  title: "chat moment #2",                game: "Just Chatting",      views: 4,   duration: 59, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/7ec72372-3a6f-4c34-a98c-e83b39062ff7/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/SlickInventiveCheesecakeCmonBruh-miovGZZPSXh3FYtF" },
  { slug: "ArborealDullWrenDansGame-A8BuMBLWx5Nj_1j_",          title: "GTA shenanigans #3",            game: "Grand Theft Auto V", views: 4,   duration: 59, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/82727046-dcf9-4e36-9f78-9a0720e18319/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/ArborealDullWrenDansGame-A8BuMBLWx5Nj_1j_" },
  { slug: "SincerePlumpBibimbapOSfrog-Z4JLQOjJMAJWcfV5",        title: "da fam mango",                  game: "Just Chatting",      views: 4,   duration: 14, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/a7274a4b-0aa5-4782-b3ee-7849acbf3c04/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/SincerePlumpBibimbapOSfrog-Z4JLQOjJMAJWcfV5" },
  { slug: "ScaryWanderingHornetLeeroyJenkins-0FeKQRQyP3dUIEJt",  title: "GTA shenanigans #2",            game: "Grand Theft Auto V", views: 3,   duration: 59, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/5c3bdc06-d5d9-43a7-b958-58aaef69e336/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/ScaryWanderingHornetLeeroyJenkins-0FeKQRQyP3dUIEJt" },
  { slug: "ApatheticObeseCakePrimeMe-TcFsOfnNJlY2-Gri",          title: "chat moment #5",                game: "Just Chatting",      views: 3,   duration: 59, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/5608486f-9e06-4bfd-ab38-06801f4a1641/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/ApatheticObeseCakePrimeMe-TcFsOfnNJlY2-Gri" },
  { slug: "FrozenObeseHorseCmonBruh-4gLJ8HQJ3ITN1sog",          title: "chat moment #1",                game: "Just Chatting",      views: 3,   duration: 59, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/4b4dc4ec-d295-430b-b5d1-c15e66a7ae92/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/FrozenObeseHorseCmonBruh-4gLJ8HQJ3ITN1sog" },
  { slug: "GentleMoistBananaAliens-xYazut8I6duqrvgz",            title: "GTA shenanigans #6",            game: "Grand Theft Auto V", views: 2,   duration: 59, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/aaeae19c-2c1e-4bf2-a05e-264b33ae9caf/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/GentleMoistBananaAliens-xYazut8I6duqrvgz" },
  { slug: "BeautifulManlyEndiveVoHiYo-OiX_fgFughkH59CS",         title: "GTA shenanigans #1",            game: "Grand Theft Auto V", views: 2,   duration: 59, thumb: "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/41d1d4bd-b273-451c-a44d-5f3b29cc5a1a/landscape/thumb/thumb-0000000000-1920x1080.jpg", url: "https://www.twitch.tv/themangotangos/clip/BeautifulManlyEndiveVoHiYo-OiX_fgFughkH59CS" },
];

/**
 * Build the Twitch clip embed URL with the current host as `parent`.
 * Call this client-side, e.g. `clipEmbedUrl(clip.slug)` inside a useEffect.
 */
export function clipEmbedUrl(slug: string, parent?: string) {
  const host = parent ?? (typeof window !== "undefined" ? window.location.hostname : "localhost");
  return `https://clips.twitch.tv/embed?clip=${slug}&parent=${host}&autoplay=false&muted=false`;
}

export type Emote = {
  name: string;
  src: string;
  alt: string;
  rotation: number;
};

/**
 * Real mango emotes — themangotangos' actual Twitch emotes.
 * Files live in /public/emotes/.
 */
export const EMOTES: Emote[] = [
  { name: "mangoHeart", src: "/emotes/sadge_112_x_112_px_6.png",     alt: "mango holding pink heart", rotation: -6 },
  { name: "mangoLOL",   src: "/emotes/sadge_112_x_112_px_7.png",     alt: "mango laughing",           rotation: 4  },
  { name: "mangoHelly", src: "/emotes/sadge_112_x_112_px_14.png",    alt: "WHAT THE HELLY",           rotation: -3 },
  { name: "mangoOop",   src: "/emotes/sadge_112_x_112_px_15.png",    alt: "mango facepalm",           rotation: 8  },
  { name: "mangoRaid",  src: "/emotes/sadge_112_x_112_px_16.png",    alt: "mango raid sign",          rotation: -5 },
  { name: "mangoHype",  src: "/emotes/sadge_112_x_112_px_17.png",    alt: "mango hype",               rotation: 2  },
  { name: "mangoSob",   src: "/emotes/sadge_112_x_112_px_20.png",    alt: "mango crying",             rotation: -7 },
  { name: "mangoPop",   src: "/emotes/sadge_112_x_112_px_21.png",    alt: "mango eating popcorn",     rotation: 6  },
  { name: "mangoHmm",   src: "/emotes/sadge_112_x_112_px_23.png",    alt: "mango thinking",           rotation: -4 },
  { name: "mangoBloom", src: "/emotes/sadge_112_x_112_px_24.png",    alt: "mango with sunflower",     rotation: 5  },
  { name: "mangoAww",   src: "/emotes/sadge_112_x_112_px_26.png",    alt: "mango cute pose",          rotation: -2 },
  { name: "mangoYay",   src: "/emotes/sadge_112_x_112_px_27_1.png",  alt: "mango confetti cheer",     rotation: 3  },
  { name: "mangoBoo",   src: "/emotes/sadge_112_x_112_px_34_4_1.png", alt: "mango with ghost",        rotation: -8 },
];

export type Vibe = {
  title: string;
  desc: string;
  icon: string;
  gradient: string;
  size: "tall" | "wide" | "square";
};

export const VIBES: Vibe[] = [
  {
    title: "Cozy & Chaotic",
    desc: "One stream we're farming turnips in Stardew, the next we're getting jumpscared in Phasmophobia. The duality is the whole point.",
    icon: "🥭",
    gradient: "from-twitch via-pink-mango to-peach-mango",
    size: "wide",
  },
  {
    title: "Variety First",
    desc: "RPGs, horror, multiplayer, indie gems, the occasional rage game when chat dares me.",
    icon: "🎮",
    gradient: "from-accent-cyan to-twitch",
    size: "square",
  },
  {
    title: "Community Built",
    desc: "Mango Garden = where chat raises the streamer. We meme, we cry, we vote on what game I play next.",
    icon: "🌸",
    gradient: "from-pink-mango to-fuchsia-500",
    size: "square",
  },
];

/**
 * Rules pulled from her actual stream about (don't be weird etc.).
 */
export const RULES: string[] = [
  "don't be weird",
  "no political stuff",
  "english or arabic only",
];

