import { useEffect, useState } from "react";
import { Download, LoaderCircle } from "lucide-react";
import cvAsset from "@/assets/cv.pdf.asset.json";
import { Button } from "@/components/ui/button";

// The asset-serving path exists on Lovable, not on external hosts such as Vercel.
const cvSource = new URL(cvAsset.url, "https://diellmorina.lovable.app").href;

export function CvDownload() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let objectUrl: string | undefined;

    async function prepareDownload() {
      try {
        const response = await fetch(cvSource, { signal: controller.signal });
        if (!response.ok || !response.headers.get("content-type")?.includes("application/pdf")) {
          throw new Error("CV unavailable");
        }
        const blob = await response.blob();
        if (controller.signal.aborted) return;
        objectUrl = URL.createObjectURL(blob);
        setDownloadUrl(objectUrl);
      } catch {
        if (!controller.signal.aborted) setFailed(true);
      }
    }

    void prepareDownload();
    return () => {
      controller.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  const className = "magnetic-link h-12 rounded-full bg-background/70 px-6";

  if (!downloadUrl && !failed) {
    return <Button variant="outline" size="lg" className={className} disabled aria-busy="true"><LoaderCircle className="animate-spin motion-reduce:animate-none" />Preparing CV…</Button>;
  }

  return (
    <Button asChild variant="outline" size="lg" className={className}>
      {downloadUrl ? (
        <a href={downloadUrl} download="Diell Morina - CV.pdf"><Download />Download My CV</a>
      ) : (
        <a href={cvSource} target="_blank" rel="noreferrer" title="Open the PDF to save a copy"><Download />Open My CV</a>
      )}
    </Button>
  );
}