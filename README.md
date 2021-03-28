Some code for generating `.XCompose` for linux.
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

# See also

- https://github.com/rrthomas/pointless-xcompose/
- https://github.com/kragen/xcompose
- https://mike-fabian.github.io/ibus-typing-booster/

- Adding XCompose to OSX https://apple.stackexchange.com/questions/31487/add-compose-key-to-os-x