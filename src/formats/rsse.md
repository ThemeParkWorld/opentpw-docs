# RSSE (Ride / Sideshow Script Engine)

The RSSE (**R**ide / **S**ideshow **S**cript **E**ngine) format consists of two different types of file: RSE, and RSS.  It is used in order to give rides and sideshows their appropriate functionality, and includes audio, animation, and ride functions.

## RSS

RSS is a source file that is used in order to define a ride's behaviour before it is compiled into an RSE file.  These files use assembly-styled syntax; for example:

```assembly
; *** Gate Closes ***
.closed     TEST        VAR_STATUS
            BRANCH_Z    loop
            TRIGANIM    ANIM_Main         0           0
            WAIT        500
            EVENT       OBJ_SOUND_LOC_AMB 1           EVT_UI_GATECLOSENORMAL
            WAIT4ANIM
            COPY        VAR_STATUS        0
            BRANCH      loop
```

### Preprocessor Directives

The following preprocessor directives are known:

- `#setstack` - the ride's stack size
- `#setlimbo` - the ride's limbo size
- `#setbounce` - the ride's bounce size
- `#setwalk` - the number of people that can walk around at any given time
- `#include` - includes macros / definitions from external C / C++ header files.

## RSE

RSE is a file that encompasses compiled bytecode, the contents of which are decided by the appropriate RSS file. These files follow a simple layout:

### File Format

#### Header

- 8 bytes: Magic number - `RSSEQ` (`52 53 53 45 51 0F 01 00`)
- 4 bytes: variable count (see [String / variable table](#string--variable-table))
- 4 bytes: stack size (defined by [`#setstack`](#preprocessor-directives))
- 4 bytes: time slice - almost always `50` (`0x32`), preprocessor directive is unknown
- 4 bytes: limbo size (defined by [`#setlimbo`](#preprocessor-directives))
- 4 bytes: bounce size (defined by [`#setbounce`](#preprocessor-directives))
- 4 bytes: walk size (defined by [`#setwalk`](#preprocessor-directives))
- 16 bytes: Padding - `Pad Pad Pad Pad` (includes a trailing space)

#### Body

- 4 bytes: Instruction count
- n bytes: [Instructions](#instructions)

##### Instructions

Instructions are written in little endian, and take the following form:

- 4 bytes: Operand
- n bytes: Opcodes

Instructions can have as many opcodes as necessary (and can also have none at all), however most instructions only require 1 to 3 opcodes.

Opcodes and operands follow a specific format:

- 2 bytes: Value
- 2 bytes: Flags

Flags are currently as follows:

- `00 00` - Literal value
- `00 10` - String (see [String / variable table](#string--variable-table))
- `00 20` - Branch / subroutine
- `00 40` - Variable name (see [String / variable table](#string--variable-table))
- `00 80` - Opcode

#### String / variable table

At the end of the file, a list of strings and variables used within instructions is inserted. Strings are added in order for string literals to be usable within a ride sequence; variables were likely included for debugging purposes, however they have little to no use while in-game.

The format of the string table is as follows:

- 4 bytes: String length
- n bytes: Null-terminated string of characters

The first entry within this table will typically contain a list of null-terminated strings, one after another, that are used within the file (if any).  The remaining entries will simply be variable names.
