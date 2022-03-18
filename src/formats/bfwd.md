# BFWD (Bullfrog World Asset Directory)

The BFWD (**B**ull**f**rog **W**A**D**) file format contains compressed (or uncompressed) data for rides, textures, UI elements, and more.  The data within these files is typically compressed using [RefPack](http://wiki.niotso.org/RefPack) (see below).  A variant of this file format, known as WAD (FKNL), is used in the PlayStation 2 version of Theme Park World, however is not compatible with DWFB.

## File Format

### File header

* 4 bytes: Magic number - "DWFB"
* 4 bytes: Version
* 64 bytes: Padding
* 4 bytes: File count
* 4 bytes: File list offset
* 4 bytes: File list length
* 4 bytes: Padding

### For each file

* 4 bytes: Unknown
* 4 bytes: Filename offset
* 4 bytes: Filename length
* 4 bytes: Data offset
* 4 bytes: File length
* 4 bytes: Compression type - "4" for [RefPack](http://wiki.niotso.org/RefPack), "0" for uncompressed
* 4 bytes: Decompressed size
* 12 bytes: Padding
