export const removeHtmlFromString = (html: string) => {
  return html.replace(/(<([^>]+)>)/gi, '');
};
