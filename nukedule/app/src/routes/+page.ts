import type { PageLoad } from "./$types";

export const load = (() => {
  // you can get this data  from any source
  // fetch call here
  // graphql client
  // manually change this object here whenever you want
  return {
    snippets: [
      {
        title: 'Cooper Codes Snippet',
        language: 'html',
        code: `<div>This is a div</div>`,
        favorite: false
      },
      {
        title: 'Cooper code Snippet',
        language: 'typescript',
        code: `console.log("ts")`,
        favorite: false
      }
    ]
  } as { snippets: CodeSnippet[] };
  // ロード関数が返すべきデータの型: PageLoad
}) satisfies PageLoad; // PageLoad -> PageData(in our frontend)