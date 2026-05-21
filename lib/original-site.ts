import fs from "node:fs";
import path from "node:path";

let cachedBodyHtml: string | null = null;

function stripScripts(html: string) {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
}

function normalizeAnchors(html: string) {
  return html
    .replace(/href="index\.html#/g, 'href="#')
    .replace(/href='index\.html#/g, "href='#");
}

function normalizeLocalAssetPaths(html: string) {
  return html
    .replace(
      /\b(src|href|action)=("|\')(?![a-z]+:|\/\/|#|mailto:|tel:|javascript:|\/)([^"']+)\2/gi,
      (_match, attr, quote, value) => `${attr}=${quote}/${value}${quote}`
    )
    .replace(/\bloading=("|\')lazy\1/gi, 'loading="eager"')
    .replace(/url\((?!['"]?(?:[a-z]+:|\/\/|\/))(['"]?)([^'")]+)\1\)/gi, (_match, quote, value) => {
      const safeQuote = quote || "";
      return `url(${safeQuote}/${value}${safeQuote})`;
    });
}

export function getOriginalBodyHtml() {
  if (cachedBodyHtml) {
    return cachedBodyHtml;
  }

  const filePath = path.join(process.cwd(), "public", "index.html");
  const documentHtml = fs.readFileSync(filePath, "utf8");
  const match = documentHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);

  if (!match) {
    throw new Error("Unable to extract <body> content from public/index.html");
  }

  cachedBodyHtml = normalizeLocalAssetPaths(normalizeAnchors(stripScripts(match[1])));
  return cachedBodyHtml;
}
