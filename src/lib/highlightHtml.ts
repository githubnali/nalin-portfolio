const TOKEN_PATTERN =
  /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s+[a-zA-Z_:][a-zA-Z0-9_:-]*(?:=(?:"[^"]*"|'[^']*'))?)*)(\s*\/?&gt;)/g;

const ATTR_PATTERN = /([a-zA-Z_:][a-zA-Z0-9_:-]*)(=)("[^"]*"|'[^']*')/g;

export function highlightHtml(raw: string): string {
  const escaped = raw.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return escaped.replace(
    TOKEN_PATTERN,
    (_match: string, comment: string, openBracket: string, tagName: string, attrs: string, closeBracket: string) => {
      if (comment) {
        return `<span class="tok-comment">${comment}</span>`;
      }

      const highlightedAttrs = attrs.replace(
        ATTR_PATTERN,
        (_m: string, name: string, eq: string, value: string) =>
          `<span class="tok-attr">${name}</span>${eq}<span class="tok-string">${value}</span>`
      );

      return `<span class="tok-punct">${openBracket}</span><span class="tok-tag">${tagName}</span>${highlightedAttrs}<span class="tok-punct">${closeBracket}</span>`;
    }
  );
}
