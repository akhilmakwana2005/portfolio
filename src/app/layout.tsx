import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Akhil Makwana | MERN Stack Developer & Software Engineer",
  description: "Portfolio of Akhil Makwana, a passionate Full Stack MERN Developer specializing in React.js, Node.js, Express, and MongoDB. Building scalable and modern web applications.",
  keywords: [
    "Akhil Makwana", 
    "Akhil Makwana Portfolio", 
    "MERN Stack Developer", 
    "Full Stack Developer", 
    "React Developer", 
    "Node.js Developer", 
    "Software Engineer India",
    "Frontend Developer"
  ],
  authors: [{ name: "Akhil Makwana", url: "https://github.com/akhilmakwana2005" }],
  creator: "Akhil Makwana",
  openGraph: {
    title: "Akhil Makwana | Full Stack MERN Developer",
    description: "Portfolio of Akhil Makwana, a passionate Full Stack MERN Developer building scalable web applications.",
    url: "https://your-domain.com", // update when deployed
    siteName: "Akhil Makwana Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhil Makwana | Full Stack Developer",
    description: "Portfolio of Akhil Makwana, a passionate Full Stack MERN Developer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akhil Makwana",
  jobTitle: "MERN Stack Developer",
  url: "https://your-domain.com", // update when deployed
  sameAs: [
    "https://github.com/akhilmakwana2005",
    "https://www.linkedin.com/in/akhil-makwana-700772305/"
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Gujarat University"
  },
  knowsAbout: ["React.js", "Node.js", "MongoDB", "Express.js", "Full Stack Development", "JavaScript", "TypeScript"]
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${kanit.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
