// svelte/store モジュールを利用することでコンポーネント間でのデータの共有を行うことができます
import { get, writable } from "svelte/store";
export const snippetStore = writable<CodeSnippet[]>([]);

// addSnippet
export function addSnippet(input: CodeSnippetInput) {
  let snnipets = get(snippetStore) // $snippetStore -> lisen to change to the value of snippetStore
  snippetStore.update(() => {
    return [{ ...input, favorite: false }, ...snnipets]
  })
}

// delete
export function deleteSnippet(index: number) {//if you have a db, delete by ID?
  let snippets = get(snippetStore)
  snippets.splice(index, 1)
  snippetStore.update(() => {
    return snippets;
  })
}


// Favorite
export function toggleFavorite(index: number) {
  let snippets = get(snippetStore)

  snippetStore.update(() => {
    return snippets.map((snippet, snippetIndex) => {
      if (snippetIndex === index) {
        return { ...snippet, favorite: !snippet.favorite }
      }
      return snippet
    })
  })
}
