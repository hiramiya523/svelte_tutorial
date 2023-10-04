import type {PageServerLoad} from './$types'

export const load =(async({params, fetch})=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await res.json();
  return {
    user
  }
}) satisfies PageServerLoad 