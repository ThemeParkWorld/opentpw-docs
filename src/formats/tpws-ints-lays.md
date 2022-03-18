# TPWS (Theme Park World Save)

TPWS (**T**heme **P**ark **W**orld **S**ave) is the main save format used within Theme Park World, alongside INTS (**In**i**t**ial **S**ave?) and LAYS (Online-related save file, usually named "upload.LAYS"). This file is used to store game progress and likely contains, among other things, a serialized copy of all objects, entities, etc. within a single game level. This file is read from when the level starts in order to carry progress between game sessions.

# File format

## Header

* 4 bytes: Magic number - F4 01 00 00
* Copyright notice - 0x0004 to 0x033B
* Padding - 0x033C to 0x0603

## File info

* 4 bytes: File type (00 01 22 19)
* 1 byte: File version (85)
* 1 byte: Online flag (00 = offline save, 01 = upload.LAYS)
* 2 bytes: Padding

If online flag set:
* Unknown data - 0x060C to 0x0846

## Data

### ZLIB Header:

* 4 bytes: Magic number - BILZ
* 4 bytes: Unknown
* 4 bytes: Compressed length
* 16 bytes: Unknown
* ZLIB stream begins after this point, continues to end of file