import type { Metadata } from "next";
import "./globals.css";
import { OriginalSiteScripts } from "@/components/original-site-scripts";

const inlineStyles = [
  `
  .detail-box p, .detail-box strong, .detail-box h2 { color: #d9fcd6; }
  .detail-box p { color: #3db28c; }
  #rating .comment-text, .section-title { border-bottom: 1px solid #00000080; }
  #rating .comment-text .like-box i, #rating .comment-text .sub-text { color: #000000; }
  #rating .comment-text .like-box span { color: #d9fcd6; }
  #rating .comment-text .like-box i.active { color: #d9fcd6; }
  #rating .comment-text { border-bottom: 1px solid #4949493b; }
  .rating-gallery img { padding: 10px 5px; }
  .gradient-y-overlay-landing { background-image: url(/media/cache/resolve/background/uploads/images/backgrounds/699579a02ca09357689060.jpg); }
  iframe { width: 95%; height: 380px; }
  .primaryColor { color: #d9fcd6; }
  .secondary-color { color: #3db28c; }
  .section-page a { color: #3db28c; }
  .section-page a:hover { color: #3db28c; }
  .control-label { color: #3db28c; }
  footer { background-color: #d9fcd6; color: #000000; }
  .section-page:nth-child(2n+1) { background-color: #f5fff5; }
  .section-page .tab-nav-landing .nav-item .nav-link.active { color: #3db28c; border-color: #3db28c; }
  .page-link.active, .section-page .btn { background-color: #3db28c; border-color: #3db28c; }
  .section-page .btn:hover { background-color: #d9fcd6; border-color: #3db28c; color: #3db28c; }
  .action-box #load_more_button { color: #3db28c; }
  .section-page .control-label.required:after { color: #3db28c; }
  .page-item.active .page-link { background-color: #3db28c; border-color: #3db28c; }
  .section-page .tab-nav-landing .nav-item:hover .nav-link { color: #3db28c; }
  .section-page .tab-nav-landing .nav-item:hover .nav-link.active { color: #3db28c; }
  .graduation-description p,
  .graduation-description ul,
  .graduation-description img,
  .graduation-description iframe,
  #contact {
    opacity: 1 !important;
  }
  .graduation-description img,
  .graduation-description iframe {
    max-width: 100%;
  }

  html,
  body {
    overflow-x: hidden;
  }

  .section-page {
    overflow: hidden;
  }

  .graduation-description,
  .graduation-description p,
  .graduation-description span,
  .graduation-description strong {
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  .graduation-description img.ckImg {
    height: auto !important;
    max-width: calc(100% - 20px) !important;
    object-fit: contain;
  }

  .gradient-y-overlay-landing::before {
    background: linear-gradient(180deg, rgba(0, 0, 0, .14), rgba(0, 0, 0, .2));
  }

  #home h1,
  #home .h1 {
    text-wrap: balance;
  }

  #home .vcard-profile-description .btn {
    background: rgba(255, 255, 255, .86) !important;
    color: #19272e !important;
    text-shadow: none;
  }

  #home .vcard-profile-description .btn:hover {
    background: #ffffff !important;
    color: #3db28c !important;
  }

  @media (max-width: 991px) {
    .graduation-description {
      font-size: 17px !important;
      line-height: 1.55;
    }

    .graduation-description p {
      width: 100% !important;
    }
  }

  @media (max-width: 575px) {
    #home h1,
    #home .h1 {
      font-size: 2.6rem !important;
      line-height: 1.08;
    }

    .section-page .container {
      padding-left: 22px;
      padding-right: 22px;
    }
  }
  `,
  `
  .header-bg-transparent:not(.js-header-fix-moment) .header-section {
    background-color: rgba(217, 252, 214, 0.95);
  }

  @media only screen and (max-width: 1050px) and (min-width: 991px) {
    .navbar-body { font-size: .607rem; }
  }

  @media only screen and (max-width: 1200px) and (min-width: 1051px) {
    .navbar-body { font-size: .637rem; }
  }

  @media only screen and (max-width: 1600px) and (min-width: 1201px) {
    .navbar-body { font-size: .737rem; }
  }
  `,
  `
  .cookie-content {
    background-color: #3db28c !important;
    font-size: 16px;
    color: #ffffff !important;
    right: 30px;
    bottom: 30px;
    position: fixed;
    border-radius: 10px;
    margin-left: -200px;
    width: 300px;
    z-index: 9999;
    padding: 10px 20px;
    box-shadow: 0 18px 45px rgba(0, 0, 0, .18);
  }

  .cookie-content h3 { font-size: 21px; }
  .cookie-content a {
    color: #ffffff !important;
    text-decoration: underline;
    cursor: pointer;
  }

  .cookie-content a:hover {
    color: #ffffff !important;
    text-decoration: none;
  }

  .cookie-content button {
    background-color: #ffffff !important;
    color: #3db28c !important;
    border: 0;
    margin-top: 8px;
  }

  .cookie-content button:hover::before {
    border: 4px solid #3db28c66 !important;
    background-color: #ffffff !important;
    color: #3db28c !important;
  }

  @media (max-width: 991px) {
    .cookie-content {
      padding: 20px;
      border-radius: 0;
      left: 0;
      font-size: 15px;
      right: 0;
      margin: 0;
      bottom: 0;
      position: fixed;
      width: 100%;
    }

    .cookie-content h3 { font-size: 18px; }
  }
  `
];

const styleSheets = [
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600;700;800&display=swap",
  "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-star-rating@4.1.2/css/star-rating.min.css",
  "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-star-rating@4.1.2/themes/krajee-svg/theme.css",
  "/build/216.983e016e.css",
  "/build/859.d03d224f.css",
  "/build/one_page.d7020dcb.css",
  "/build/themes.8c8bd307.css",
  "/build/fontAwesome.aac036fb.css"
];

export const metadata: Metadata = {
  title: "TERRA HUNGARY Olive trees and more- Hévíz",
  description: "Terra Hungary recreated in Next.js from the preserved original site snapshot.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        {styleSheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        {inlineStyles.map((style, index) => (
          <style key={index} dangerouslySetInnerHTML={{ __html: style }} />
        ))}
      </head>
      <body>
        {children}
        <OriginalSiteScripts />
      </body>
    </html>
  );
}
