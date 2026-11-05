# Vraid Systems

[Jekyll](https://jekyllrb.com/) on GitHub Pages builds this site from pushes to this repository.

## Where things live

- `index.html`, `es.html`, `fr.html`, `ru.html`: home page copy per language.
- `en/`, `es/`, `fr/`, `ru/`: policy pages (privacy, conduct) as Markdown, using `_layouts/policy.html`.
- `_data/i18n.yml`: shared UI strings (nav, CTA, terms, entity labels, month names) per language.
- `_data/entities.yml`: contracting entities shown on the site and in the JSON-LD.
  Only public-record identifiers go here. Never add EINs, insurance policy numbers, or bank details.
- `_includes/`: nav, terms, and entity sections shared by all languages.

## Languages and translations

Languages are listed in `languages:` in `_config.yml`. The first one is the source
language and the `x-default`.

Pages that are translations of each other share a `ref` in front matter, and each
sets its `lang`. The hreflang tags, the footer language switcher, the footer policy
links and `sitemap.xml` all find translations by `ref`, so nothing lists URLs by hand.
A language with no translation of a page links to that language's home page instead.

To translate a policy page, copy `en/<page>.md` to `<lang>/<page>.md`, keep `ref`
and the `{#anchor}` heading IDs, and translate the rest.

`revised` on an English policy page is the date its text last changed. On a
translation, `revised` is the date of the English text it was translated from.
When the English page is revised and a translation is not, the translation shows
a notice saying so until its `revised` catches up. Every translation also says
the English version prevails.

To add a language: add it to `languages:`, add its block to `_data/i18n.yml`,
and add a home page (`<lang>.html` with `ref: home`).

## Development

1. `sudo apt install build-essential ruby ruby-bundler ruby-dev nodejs npm`
1. `bundle install && npm install`
1. `npm run watch:css` in one terminal, `bundle exec jekyll serve` in another.

## CSS

Tailwind is compiled, not loaded from the CDN. GitHub Pages does not run npm, so
`assets/css/site.css` is committed. After adding or changing Tailwind classes, run
`npm run build:css` and commit the updated `site.css`.
