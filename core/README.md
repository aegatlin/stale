# Core

Core is an experiment in component reusability.

The idea is to have copy-and-pastable snippets of code that make for simple yet complete starting points for your component system.

The motivation is that component libraries are (hypothesis) fundamentally inadequate in that they don't ultimately give you control. At the end of the day, you will want to customize your components in some manner that your library won't let you. Or, if they let you, they have made the component so complicated and/or exposed so many APIs on it that it is unpleasant to work with. The solution is to "just" make your own components each time. This suffers from the problem of tedium. To solve the tedium problem, a living repo of "just components" that you do NOT install as a dependency, but instead copy the code from, means that (1) you get a sophisticated starting point for your basic components, and (2) it is not a static resource (because this repo will be maintained and upgraded over time).

## Questions

-[] Something like a `Blur` component is now implicit in Modal and Drawer, and they could drift, creating inconsistent user experience. Should a `Blur` component exist?
-[] A Button as a utility would support multiple types of buttons. Most websites have a few different buttons. Think about a _simple_ way to support this. E.g., a `Base` Button that needs more "parts", and then ancillary buttons with "parts included".

## Captain's Log

- (02/2023) Remove a `Menu` component that was essentially an inert shell around `Dropdown`. The motivation was I wanted a menu on my own website to be a drawer instead of a dropdown, and couldn't easily convert the `Menu` I got from here. These are utility components, and if they aren't easy to _use_, it's the wrong abstraction.
- (02/2023) No animations! Things can get a lot more "delightful", but where to stop becomes a problem. Plus, you can't just copy the file, you'd then have to copy the tailwind config, which might have _more_ config that you wanted. This increases complexity and so is not desirable. Rather, you can add your own animations on real projects.
- (prehistory) No `Link` component! The reasoning is that link optimization is becoming a "framework thing", e.g., `next/link` in Next.js. Simplicity says "no" to being framework-aware.