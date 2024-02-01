# BFRI (Bullfrog Resource Index)

The BFRI (**B**ull**f**rog **R**esource **I**ndex) file format contains pointers to others Bullfrog string files such as [BF4](/formats/bf4.html), [BFMU](/formats/bfmu.html), [BFST](/formats/bfst.html) and [BFUM](/formats/bfum.html).

## File Format

BFRI files are composed of an global header of 8 bytes, containing the number of files in the index, followed by a list of entries, on for each files.
Entries are sorted in increasing order for identifier.

### File header

* 4 bytes: Magic number - "BFRI"
* 4 bytes: File count

### For each file

* 4 bytes: Identifier
* 2 bytes: File Type
* 2 bytes: Filename offset
* 4 bytes: Reserved - a pointer to object used internally

### Identifiers

For each file entry, the identifier can be one of the following:

|  Identifier          | Value   |
|:---------------------|:-------:|
| MB2UNICODE           |  0x1    |
| UNICODE2MB           |  0x2    |
| ERRORMSG             |  0x3e8  |
| INGREDIENTS          |  0x3e9  |
| TAG_SYSTEM           |  0x3ea  |
| KIDSTATES            |  0x3ec  |
| STAFFSTATES          |  0x3ed  |
| UITEXT               |  0x3ee  |
| UIHELPTEXT           |  0x3ef  |
| CHAT_COMMANDS        |  0x3f0  |
| THEMENAMES           |  0x3f1  |
| OBJECT_NAMES         |  0x3f2  |
| HANDYMAN_NAMES       |  0x3f3  |
| MECHANIC_NAMES       |  0x3f4  |
| ENTERTAINER_NAMES    |  0x3f5  |
| GUARD_NAMES          |  0x3f6  |
| RESEARCHER_NAMES     |  0x3f7  |
| FEMALE_NAMES         |  0x3f8  |
| ITEMTYPES            |  0x3f9  |
| LENDER_NAMES         |  0x3fa  |
| STAFF_TYPES          |  0x3fb  |
| KEYBOARD             |  0x3fc  |

### File types

File type identify a type of resource and can be one of the following:

| File type                  | Value | Comment                               |
|----------------------------|-------|---------------------------------------|
| [BFMU](/formats/bfmu.html) |  0x0  |                                       |
| BFMH                       |  0x0  | Looks like [BFMU](/formats/bfmu.html) |
| [BFUM](/formats/bfum.html) |  0x1  |                                       |
| BFMB                       |  0x2  |                                       |
| [BFST](/formats/bfst.html) |  0x3  |                                       |
| [BF4F](/formats/bf4.html)  |  0x4  |                                       |
