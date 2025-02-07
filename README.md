# Next.js 15 - Next/Link Issue

This repository demonstrates an unexpected behavior encountered with the `next/link` component in Next.js 15.  The issue involves the link not navigating as expected.  Sometimes the navigation works, other times it remains on the same page, and in other cases it throws an error.  The solution provides a workaround using client-side routing to ensure reliable navigation.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the 'About Us' link. Observe the inconsistent behavior.