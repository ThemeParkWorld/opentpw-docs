# BFMU (Bullfrog Multibyte to Unicode)

The BFMU (**B**ull**f**rog **M**ultibyte to **U**nicode, not to be confused with [BFUM](/formats/bfum.html)) file format is used in order to convert strings into multibyte-encoded strings so that they can be used in-game.  This is not typically done in-game.

There is typically one BFMU file in each Theme Park World installation called "MBtoUni.dat", located within the game's language folder.

The contents of this file may differ depending on the language that is being used and depending on which characters are required.  The offset of each of these characters is then specified within a BFST file and can then be used to display text in-game.

## File Format

### Header

* 4 bytes: Magic number - "BFMU"
* 2 bytes: Likely specifies the character encoding - usually 0x00
* 2 bytes: Character count

### For each character

* 2 bytes - The character itself in either Unicode or multibyte form
