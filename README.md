Some code for generating `.XCompose` for linux and macOS. (no Windows sorry!)
This lets you insert unicode characters anywhere in the system by hitting the compose key (I map this to caps lock) and typing a code.
This is really just for personal use but issues and contributions are welcome.

# Usage Linux

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

# Usage Macs

1. Install [Karabiner](https://karabiner-elements.pqrs.org/)
2. Let Karabiner have full control of your computer
3. In the Karabiner app, add a rule mapping caps lock to F13.
4. `deno run mac.js > ~/Library/KeyBindings/DefaultKeyBinding.dict`

Another way that doesn't require Karabiner is to use a keyboard with an F13 key.
You can change to use a different key than F13 by changing the `"\UF710"` entry, see `mac.js`.
The mac version behaves slightly differently to the linux version in that some of the codes need to be terminated with spaces, for example `==`  to make `≡` needs to be terminated with a space because there is another superstring code `===` which inserts `≣`.

# See also

- https://github.com/rrthomas/pointless-xcompose/
- https://github.com/kragen/xcompose
- https://mike-fabian.github.io/ibus-typing-booster/
- Converting TeX to unicode https://www.unicodeit.net/
- Adding XCompose to OSX https://apple.stackexchange.com/questions/31487/add-compose-key-to-os-x

# todo

- Auto-generate an HTML cheat-sheet; a grid for 1-char and 2-char codes. Plus a table for the arrow-based codes and letter-like codes.
- A map from latex versions of the symbols to compose codes.
- emoji
- support for windows?
- dump whole translations file as a json.
- fix mkdoc.jsx