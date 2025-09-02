# LaTeX Thesis Template

A comprehensive LaTeX template for bachelor's and master's theses with extensive examples of commonly used LaTeX features.

## Features

- **Complete thesis structure** with all standard sections
- **Extensive LaTeX examples** organized from basic to advanced
- **Modern LaTeX setup** using XeLaTeX/LuaLaTeX with polyglossia
- **Professional typography** with microtype and fontspec
- **Code highlighting** with minted package
- **Smart references** using cleveref
- **Bibliography management** with biblatex/biber
- **Data visualization** with PGFPlots
- **Algorithm pseudocode** support
- **Acronym and glossary** management

## Quick Start

### Prerequisites

- LaTeX distribution (TeX Live, MiKTeX, or MacTeX)
- XeLaTeX or LuaLaTeX compiler
- Python with Pygments installed (for code highlighting)
- Biber (usually included with LaTeX distribution)

### Compilation

```bash
# Recommended: Using latexmk with XeLaTeX
latexmk -xelatex -shell-escape thesis.tex

# Alternative: Using LuaLaTeX
latexmk -lualatex -shell-escape thesis.tex

# Clean auxiliary files
latexmk -c
```

**Note:** The `-shell-escape` flag is required for the minted package to work properly.

## Project Structure

```
thesis-template/
├── thesis.tex              # Main document
├── literature.bib          # Bibliography
├── sections/              
│   ├── 01_introduction.tex # Introduction template
│   └── 02_examples.tex     # Comprehensive LaTeX examples
├── content/               
│   ├── abstract.tex        # Abstract
│   ├── acknowledgements.tex
│   ├── images/            # Image files
│   ├── scripts/           # Code examples
│   └── figures/           # PGFPlots definitions
├── metadata/              
│   ├── cover_page.tex     # Title page
│   ├── declaration.tex    # Declaration
│   ├── acronyms.tex       # Acronym definitions
│   ├── glossary.tex       # Glossary terms
│   ├── meta.tex           # Document metadata
│   └── packages.tex       # Package imports
└── appendix/              
    └── 01_dummy.tex       # Example appendix
```

## LaTeX Examples Included

The template includes practical examples of:

### Basic Features
- **Lists and Enumerations** - Nested lists, custom styles, inline lists
- **Cross-References** - Smart references with cleveref
- **Images** - Including, scaling, and transforming images
- **Tables** - Professional tables with booktabs

### Advanced Features  
- **Mathematical Equations** - Inline and display math
- **Subfigures** - Side-by-side image comparisons
- **Data Visualization** - Charts with PGFPlots
- **Code Listings** - Syntax-highlighted code with minted
- **Algorithm Pseudocode** - Formatted algorithms
- **Bibliography Citations** - Reference management
- **Footnotes** - Various footnote styles
- **Acronyms** - Automatic acronym expansion

## Customization

### Personal Information

Edit `metadata/meta.tex` to update:
- Author name
- Thesis title
- University/department
- Submission date
- Supervisor information

### Content

1. Replace content in `sections/01_introduction.tex` with your introduction
2. Use examples from `sections/02_examples.tex` as templates
3. Add your bibliography entries to `literature.bib`
4. Update `content/abstract.tex` with your abstract

### Language Settings

The template supports both English and German. To switch languages, modify the polyglossia settings in `metadata/packages.tex`:

```latex
\setdefaultlanguage{english}  % or {german}
```

## Common Issues

### Font Not Found
If you get OpenSans font errors, the font requirement is already commented out in `metadata/packages.tex`.

### Compilation Errors with Minted
Ensure you're using the `-shell-escape` flag when compiling.

### Bibliography Not Updating
Run the compilation twice or use latexmk for automatic dependency handling.

## Requirements

- **XeLaTeX or LuaLaTeX** (required for fontspec/polyglossia)
- **Python with Pygments** (for minted code highlighting)
- **Biber** (for bibliography processing)
- **latexmk** (recommended for automated compilation)

## Tips for Thesis Writers

1. **Start with the examples** - Review `sections/02_examples.tex` to learn LaTeX features
2. **Use the logical order** - Examples progress from basic to advanced
3. **Copy and adapt** - Use example code as templates for your content
4. **Compile frequently** - Check your changes compile correctly
5. **Use version control** - Track your thesis with Git

## License

This template is provided as-is for academic use. Feel free to modify and adapt it for your thesis.

## Contributing

Improvements and bug fixes are welcome. Please submit issues or pull requests on the project repository.