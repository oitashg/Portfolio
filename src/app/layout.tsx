import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Oitash Ghosh, Software Engineer. Ex-Amazon intern building systems that stay correct under failure, from Raft consensus and LSM storage engines to Spark/EMR pipelines at billion-record scale.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Oitash Ghosh",
    "Software Engineer",
    "Data Engineer",
    "Spark",
    "Python",
    "React",
    "Django",
    "Jadavpur University",
    "Amazon",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} | ${site.role}`,
    description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description,
  },
  robots: { index: true, follow: true },
};

// Applies the stored theme before first paint so there's no light/dark flash.
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark' : true;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-fg">{children}</body>
    </html>
  );
}
