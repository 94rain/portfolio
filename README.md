[![Deploy to CPanel](https://github.com/94rain/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/94rain/portfolio/actions/workflows/deploy.yml)

# Brief Introduction

This portfolio is built upon [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) with the [starter template](https://github.com/timlrx/tailwind-nextjs-starter-blog).

The deployment of the portfolio used Github actions including [borales/actions-yarn](https://github.com/Borales/actions-yarn) and [easingthemes/ssh-deploy](https://github.com/easingthemes/ssh-deploy).

## Development

Development:
`yarn start`

Production:
`next build && node ./scripts/generate-sitemap; next export`
