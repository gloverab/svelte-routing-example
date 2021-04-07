<script>
  import { curRoute } from './router.js'
  export let page = {
    path: '/home',
    name: 'Home'
  }
  export let ref

  function redirectTo(event){
    // change current router path
    curRoute.set(event.target.pathname);
    // push the path into web browser history API
    window.history.pushState({path: page.path}, '', window.location.origin + page.path);
  }
</script>

<a {ref} href={page.path} class:selected={$curRoute === page.path} on:click|preventDefault={redirectTo}>{page.name}</a>

<style>
  a {
    position: relative;
  }

  a:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform: scale3d(0,1,1);
    border-bottom: 1px solid black;
    transition: .1s ease all;
  }

  a:hover::after {
    transform: scale3d(1,1,1);
  }

</style>