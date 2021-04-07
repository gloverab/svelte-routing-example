import Home from './Home.svelte';
import About from './About.svelte';
import Contact from './Contact.svelte';
import { writable } from 'svelte/store';
const router = {
  '/': Home,
  '/home': Home,
  '/about': About,
  '/contact': Contact
}
export default router;
export const curRoute = writable('/home');