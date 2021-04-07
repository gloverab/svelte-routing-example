# Svelte App with Routing

You can either clone my repo down or copy the changes I made. If you clone it, just do a `npm i` and a `npm run dev` and you'll be off to the races.

If you want to copy my changes, only things here that differ from the basic svelte template are the following:
* Added `router.js` - a writable store for managing Nav state.
* Added `RouterLink.svelte` - a wrapper on a `<a>` with a function to handle routing. I also added a `{ref}` so this can be styled from anywhere.
* Added an `onMount` function and a `handleBackNav` function to `App.svelte`
* Added `<svelte:window on:popstate={handleBackNav} />` to `App.svelte`

To see this in action, and for instructions on use, check out the About page in [the example app](https://svelte-routing-example.vercel.app/home).