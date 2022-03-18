# What is SDT?
The SDT (**S**ound **D**a**t**a) file format is an archive format that contains one or many MPEG-2 Audio Layer II (`*.mp2`) files that are used for sound effects, speech, and music throughout the game.  These files are usually uncompressed (in the archive), and the archive format is relatively simple.

# File Format
## File header
* 4 bytes: File count

## For each file
* 4 bytes: File offset

## For each file (at offset)
* 4 bytes: Header size
* 4 bytes: Data size
* 16 bytes: File name (usually null terminated)
* 4 bytes: Sample rate
* 4 bytes: Resolution
* 4 bytes: Sound type
  * 0: None
  * 2: WAV
  * 3: "Old WAV" (see https://github.com/ufdada/dk2-tools/blob/master/Formats/Sound/sdt_struct.bt)
  * 36: MP2, 64kbps mono
  * 37: MP2, 112kbps stereo
* 4 bytes: Unknown
* 4 bytes: Samples
* 4 bytes: Unknown
* n bytes: File data