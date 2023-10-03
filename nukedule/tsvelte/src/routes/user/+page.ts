// import type: 型のみimport
import type { PageLoad } from "./$types";

type User = {
  id: number;
  name: string;
}

// load()は非同期関数で、fetch関数を引数に受け取る。
export const load = (async({fetch}) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users:User[] = await res.json();
  return {
    users
  };
}) satisfies PageLoad

// satisfies オペレータ
