Some code for generating `.XCompose` for linux.
This is really just for personal use.

# Usage

- install [deno](https://deno.land)
- `deno run XComposeGen.js > ~/.XCompose`
- map compose key. Eg: `dconf write /org/gnome/desktop/input-sources/xkb-options "['compose:caps']"`
- restart X or Wayland
- hit caps lock and start typing the keywords given in `translations.js` to insert those symbols

# Issues

- XCompose doesn't let you insert multiple code points with one sequence in some apps.
  So this means that inserting `⁻¹` is annoying.
- [ ] add emoji
- [ ] add abbreviations, eg "btam" ⟶ "be that as it may,"

# See also

- https://github.com/rrthomas/pointless-xcompose/
- https://github.com/kragen/xcompose
- https://mike-fabian.github.io/ibus-typing-booster/