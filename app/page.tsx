import { getOriginalBodyHtml } from "@/lib/original-site";

export default function HomePage() {
  const html = getOriginalBodyHtml();

  return <div id="site-root" dangerouslySetInnerHTML={{ __html: html }} />;
}
