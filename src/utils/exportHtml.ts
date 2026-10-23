/**
 * Utility to provide the standalone single-file HTML for GitHub Pages.
 * When called, it loads the consolidated single-file HTML or generates it.
 */

export async function getStandaloneHtmlString(): Promise<string> {
  // If pre-bundled file exists in public/ekonomi_sma_lengkap.html, fetch it;
  // otherwise fallback to generating a clean HTML string.
  try {
    const res = await fetch('/ekonomi_sma_lengkap.html');
    if (res.ok) {
      const html = await res.text();
      if (html && html.includes('<!DOCTYPE html>')) {
        return html;
      }
    }
  } catch (err) {
    // ignore
  }

  // Fallback: return a rich self-contained template
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>E-Modul Ekonomi SMA Terpadu (Bab 1 - 4)</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Silakan unduh file melalui tombol Unduh index.html di dashboard aplikasi.</h1>
</body>
</html>`;
}

export function downloadHtmlFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
