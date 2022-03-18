# What is BFUM?

The BFUM (**B**ull**f**rog **U**nicode to **M**ultibyte, not to be confused with [BFMU](https://github.com/xezno/Meme-Park-World/wiki/BFMU)) file format is used in order to convert strings into multibyte-encoded strings so that they can be used in-game.  This is not typically done in-game.

There is typically one BFUM file in each Theme Park World installation called "UnitoMB.dat", located within the game's language folder.

The contents of this file may differ depending on the language that is being used and depending on which characters are required.  The offset of each of these characters is then specified within a BFST file.

# File Format
## Header
* 4 bytes: Magic number - "BFUM"
* 2 bytes: Likely specifies the character encoding - usually 0x09
* 2 bytes: Character count

## For each character
* 2 bytes - The character itself in either Unicode or multibyte form