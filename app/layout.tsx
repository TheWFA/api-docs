import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { Fira_Mono, JetBrains_Mono, Lato } from 'next/font/google';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import type { ReactNode } from 'react';
import './index.css';

const font = Lato({
    weight: ['100', '300', '400', '700', '900'],
    variable: '--lato',
    subsets: ['latin'],
});

const codeFont = Fira_Mono({
    weight: ['400', '500', '700'],
    variable: '--code',
    subsets: ['latin'],
});

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
    <Navbar
        logo={<b>WFA API Documentation</b>}
        // ... Your additional navbar options
    />
);
const footer = <Footer>MIT {new Date().getFullYear()} © The WFA.</Footer>;

export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <Head
            // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body className={`${font.className} ${codeFont.className}`}>
                <Layout
                    // banner={banner}

                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
                    footer={footer}
                    // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    );
}
