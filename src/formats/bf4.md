# BF4 (Bullfrog Font File Format)

The **B**ull**f**rog **F**ont **F**ile **F**ormat is used in order to store various fonts and font information.

## File Format

### Header

- 4 bytes: magic number
- 1 byte: max width
- 1 byte: max height
- 2 bytes: offset count
- n bytes: offset list

### Font entry

- 2 bytes: character
- 2 bytes: unknown
- 4 bytes: data size
- 4 bytes: unknown
- 2 bytes: width
- 2 bytes: height
- 1 byte: offset X
- 1 byte: offset Y
- 2 bytes: outer width
