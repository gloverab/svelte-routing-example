<script>
import { HtmlTag } from "svelte/internal";

</script>
<h1>About</h1>

<div id='wrapper'>
  <h2>Using this Svelte routing implementation is very, very easy</h2>
  <p>To "register" the route, import the component for each page in `router.js`</p>
  <p>To use the route, use the RouterLink component instead of an `a` tag.</p>
  <p>Pass it an object like {`{ path: "/about", name: "About" }`}.` "name" is the text that will get dispayed, and path is what it where navigate the window.</p>
  <h4>Nearly all of this was lifted from <a href='https://medium.com/swlh/simple-svelte-3-app-with-router-44fe83c833b6'>Minh Turi on Medium</a></h4>
</div>

<style>
  #wrapper {
    width: 500px;
  }
  p {
    text-align: left;
  }
</style>