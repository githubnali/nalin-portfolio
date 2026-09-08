const TOKEN_PATTERN =
  /(\/\*[\s\S]*?\*\/)|(@[a-zA-Z-]+)|([a-zA-Z-]+)(\s*:\s*)([^;{}]+)(;)|([^{}\n;]+)(\{)|(\})/g;

export function highlightCss(raw: string): string {
  const escaped = raw.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return escaped.replace(
    TOKEN_PATTERN,
    (
      match: string,
      comment: string,
      atRule: string,
      prop: string,
      colon: string,
      value: string,
      semi: string,
      selector: string,
      openBrace: string,
      closeBrace: string
    ) => {
      if (comment) return `<span class="tok-comment">${comment}</span>`;
      if (atRule) return `<span class="tok-tag">${atRule}</span>`;
      if (prop) {
        return `<span class="tok-attr">${prop}</span><span class="tok-punct">${colon}</span><span class="tok-string">${value}</span><span class="tok-punct">${semi}</span>`;
      }
      if (selector) {
        return `<span class="tok-tag">${selector}</span><span class="tok-punct">${openBrace}</span>`;
      }
      if (closeBrace) return `<span class="tok-punct">${closeBrace}</span>`;
      return match;
    }
  );
}
