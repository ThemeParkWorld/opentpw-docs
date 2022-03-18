# BFST (Bullfrog String)

The BFST (**B**ull**f**rog **St**ring) file format is used in order to specify strings for each piece of in-game text.  This aids with localization and translation.  BFST files don't have their own character encoding; instead, they use the two BFST files within the BFST's directory in order to specify each character.

## File Format

### Header

* 4 bytes: Magic number - "BFST"
* 4 bytes: Unknown
* 4 bytes: String count

### For each string

* 4 bytes - String offset (from the end of the string count)

### For each string (at offset)

* 1 byte - Unknown, always 0x01
* 3 bytes - String length
* n bytes - Each character, specified with an offset in a BFMU file.
* 4 bytes - Padding (may be longer?)
