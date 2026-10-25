# Vraid Systems

[Jekyll](https://jekyllrb.com/) on GitHub Pages builds this site from pushes to this repository.

## Where things live

- `index.html`, `es.html`, `ru.html`: page copy per language.
- `_data/i18n.yml`: shared UI strings (nav, CTA, terms, entity labels) per language.
- `_data/entities.yml`: contracting entities shown on the site and in the JSON-LD.
  Only public-record identifiers go here. Never add EINs, insurance policy numbers, or bank details.
- `_includes/`: nav, terms, and entity sections shared by all three languages.

## Development

1. `sudo apt install build-essential ruby ruby-bundler ruby-dev nodejs npm`
1. `bundle install && npm install`
1. `npm run watch:css` in one terminal, `bundle exec jekyll serve` in another.

## CSS

Tailwind is compiled, not loaded from the CDN. GitHub Pages does not run npm, so
`assets/css/site.css` is committed. After adding or changing Tailwind classes, run
`npm run build:css` and commit the updated `site.css`.
