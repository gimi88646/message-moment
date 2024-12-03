// أَعُوْذُ بِاللّٰهِ مِنَ الشَّيْطٰانِ الرَّجِيْمِ  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ

// Google Font
import { Inter } from "next/font/google";

// Style Css
import "@/styles/Globals.css";
import "@/styles/Scrollbars.css";
import "@/styles/FireFox.css";
import "@/styles/MacOperatingSystem.css";
import "swiper/css";

const inter = Inter({ subsets: ["latin"] });

// Meta Data
export const metadata = {
  title: "MessageMoment - The real meaning to personal!",
  description: "MessageMoment - The real meaning to personal!",
  creator: "Ali",
  applicationName: "MessageMoment",
  siteName: "MessageMoment",
  appleWebApp: {
    title: "MessageMoment",
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },
};

// View Port
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
