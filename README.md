Blogs using [Astro Paper](https://github.com/satnaing/astro-paper)

## Google Analytics

Set the GA4 measurement ID when creating the production build:

```dotenv
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

The Google tag is omitted when the variable is unset and during local development.
This site uses Astro's client-side router, so ensure **Enhanced measurement → Page
views → Page changes based on browser history events** is enabled for the GA4 web
stream to track internal navigation.
