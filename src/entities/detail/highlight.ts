import "server-only";

import { createHighlighter, type HighlighterGeneric } from "shiki";

let highlighterPromise: Promise<HighlighterGeneric<any, any>> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: [
        "plaintext",
        "text",
        "bash",
        "shell",
        "sh",
        "javascript",
        "typescript",
        "jsx",
        "tsx",
        "json",
        "css",
        "scss",
        "html",
        "markdown",
        "yaml",
        "sql",
        "python",
        "java",
        "kotlin",
        "swift",
        "go",
        "rust",
      ],
    });
  }

  return highlighterPromise;
}

const languageAliases: Record<string, string> = {
  plain: "plaintext",
  text: "plaintext",
  "plain-text": "plaintext",
  "plain text": "plaintext",
  shell: "bash",
  "powershell": "powershell",
  "power-shell": "powershell",
  "power shell": "powershell",
  "objective-c": "objc",
  "c#": "csharp",
  "c++": "cpp",
  "dockerfile": "docker",
  "html/xml": "html",
  "java/c/c++/c#": "java",
};

function inferLanguage(code: string) {
  if (/<[A-Z][\w.]*(\s|>)/.test(code) || /<\/[A-Z][\w.]*>/.test(code)) {
    return "tsx";
  }
  if (
    /\binterface\s+\w+/.test(code) ||
    /\btype\s+\w+\s*=/.test(code) ||
    /\bimport\s+type\b/.test(code) ||
    /:\s*[A-Z][A-Za-z0-9_<>{}\[\]|&?, ]+/.test(code)
  ) {
    return "typescript";
  }
  if (
    /\bconst\b|\blet\b|\bfunction\b|\bexport\b|\bimport\b|=>/.test(code)
  ) {
    return "javascript";
  }
  if (/^\s*def\s+\w+\(/m.test(code) || /^\s*import\s+\w+/m.test(code)) {
    return "python";
  }
  if (/^\s*SELECT\b|^\s*WITH\b|^\s*INSERT\b|^\s*UPDATE\b|^\s*DELETE\b/im.test(code)) {
    return "sql";
  }
  if (/^\s*</m.test(code) && /<\/\w+>/.test(code)) {
    return "html";
  }

  return "plaintext";
}

export async function highlightCode(code: string, language?: string) {
  try {
    const highlighter = await getHighlighter();
    const normalizedLanguage = (
      languageAliases[language ?? ""] ??
      language ??
      "plaintext"
    )
      .toLowerCase()
      .replace(/[_\s]+/g, "-");
    const loadedLanguages = highlighter.getLoadedLanguages().map(String);
    const fallbackLanguage =
      normalizedLanguage === "plaintext" ? inferLanguage(code) : "plaintext";
    const lang = loadedLanguages.includes(normalizedLanguage)
      ? normalizedLanguage
      : loadedLanguages.includes(fallbackLanguage)
        ? fallbackLanguage
        : "plaintext";

    return highlighter.codeToHtml(code, {
      lang,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    });
  } catch {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return `<pre class="shiki"><code>${escaped}</code></pre>`;
  }
}
