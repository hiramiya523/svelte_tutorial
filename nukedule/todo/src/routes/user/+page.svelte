<script>
  import {onMount} from 'svelte';
  import User from '$lib/Domain/User.js';
  /**
   * @type {User[]}
   */
  let users =[];

  onMount(async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await res.json();
  })

 const a = new User('kaito');
//  a.name = 'a';
 console.log(a.name);

</script>

<h1>ユーザ一覧</h1>

<ul>
  {#each users as user}
    <li>{user.name}</li>
  {/each}
</ul>