Some code for generating `.XCompose` for linux.
This lets you insert unicode characters anywhere in the system by hitting the compose key (I map this to caps lock) and typing a code.
This is really just for personal use but issues and contributions are welcome.

# Usage

I use Arch Linux's `gnome` package. I haven't tried anything else. Seems to work for both X and Wayland systems.

## To generate the file

You can directly download the given dotXCompose file in this repo. To make it yourself:

- Install [deno](https://deno.land).
- `deno run XComposeGen.js > ~/.XCompose`.

## To use the file

- Place the compose file at `~/.XCompose`.
- Map compose key. Eg: `dconf write /org/gnome/desktop/input-sources/xkb-options "['compose:caps']"`.
- Restart X or Wayland.
- Hit caps lock and start typing the keywords given in `translations.js` to insert those symbols.

# See also

- https://github.com/rrthomas/pointless-xcompose/
- https://github.com/kragen/xcompose
- https://mike-fabian.github.io/ibus-typing-booster/
