import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next Notes",
    description: "Simple notes app with Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/notes">Notes</Link>
                    </nav>
                    {children}
                </main>
            </body>
        </html>
    );
}
