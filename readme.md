# LaTeX Thesis Template

This is a reusable LaTeX template for Bachelor's, Master's, or PhD theses. It provides a complete structure with placeholders for all personal information and content.

## Quick Start

1. **Clone or download this template**
2. **Edit `config.tex`** - Fill in all your personal information and thesis details
3. **Replace content placeholders** in the section files
4. **Update bibliography** - Replace `literature_template.bib` with your own references
5. **Compile** - Use `latexmk -pdf thesis.tex` or your preferred LaTeX compiler

## Template Structure

```
.
├── config.tex                 # ⚙️ Main configuration file (EDIT THIS FIRST!)
├── thesis.tex                 # Main LaTeX document
├── literature_template.bib    # Bibliography template
├── sections/                  # Main content chapters
│   ├── 01_introduction.tex
│   ├── 02_literature_review.tex
│   ├── 03_methodology.tex
│   ├── 04_results.tex
│   ├── 05_discussion.tex
│   ├── 06_recommendations.tex
│   └── 07_conclusion.tex
├── Content/                   # Additional content
│   ├── abstract.tex
│   ├── acknowledgements.tex
│   └── appendices.tex
└── Metadata/                  # Document metadata
    ├── cover_page.tex
    ├── declaration.tex
    ├── acronyms.tex
    └── glossary.tex
```

## Configuration Placeholders

All placeholders that need to be filled are defined in `config.tex`:

### Personal Information
- `\studentName` - Your full name
- `\studentID` - Your student ID/matriculation number  
- `\studentEmail` - Your email address

### Thesis Information
- `\titel` - Your thesis title
- `\art` - Document type (Bachelor's Thesis, Master's Thesis, PhD Dissertation)
- `\fachgebiet` - Field of study

### University Information
- `\universityName` - Name of your university
- `\studienbereich` - Faculty/Department name
- `\ort` - University location

### Supervisors
- `\erstgutachter` - First supervisor name
- `\zweitgutachter` - Second supervisor name

### Dates
- `\abgabedatum` - Submission date (DD.MM.YYYY)
- `\jahr` - Year
- `\semester` - Semester (e.g., Winter Semester 2024/2025)

## Compilation Instructions

### Basic Compilation
```bash
pdflatex thesis.tex
```

### Full Compilation (with bibliography)
```bash
pdflatex thesis.tex
bibtex Thesis
pdflatex thesis.tex
pdflatex thesis.tex
```

### Using latexmk (recommended)
```bash
latexmk -pdf thesis.tex
```

### Clean auxiliary files
```bash
latexmk -c
```

## Required LaTeX Packages

This template requires a full LaTeX distribution (TeX Live or MiKTeX) with the following key packages:

- **Document Class**: KOMA-Script (`scrartcl`)
- **Bibliography**: `natbib`, `bibtex`
- **Graphics**: `graphicx`, `pgfplots`
- **Code Listings**: `minted` (requires Python Pygments)
- **Tables**: `booktabs`, `longtable`, `tabularx`
- **References**: `hyperref`
- **Math**: `amsmath`, `amssymb`
- **Glossary**: `glossaries`, `acronym`

## Content Guidelines

### Abstract
- 150-300 words summarizing your research
- Include: problem statement, methodology, key findings, conclusions

### Introduction
- Context and motivation
- Problem statement
- Research objectives and questions
- Scope of study
- Thesis structure overview

### Literature Review
- Theoretical foundations
- Current state of research
- Identified gaps in knowledge
- Positioning of your research

### Methodology
- Research design
- Data collection methods
- Analysis techniques
- Tools and software used
- Ethical considerations
- Limitations

### Results
- Present findings for each research question
- Use tables, figures, and charts
- Report statistical analyses (if applicable)

### Discussion
- Interpret your findings
- Compare with existing literature
- Discuss implications
- Address limitations
- Suggest future research

### Recommendations
- Actionable suggestions based on findings
- Implementation strategies
- Resource requirements

### Conclusion
- Summarize key findings
- State contributions to the field
- Final reflections

## Customization Tips

1. **Chapter Structure**: You can add/remove chapters by modifying the `\include{}` commands in `thesis.tex`
2. **Formatting**: Style settings are in `Metadata/page_style.tex`
3. **Packages**: Additional packages can be added in `Metadata/Packages.tex`
4. **Bibliography Style**: Currently uses `natdin` - change in `thesis.tex` if needed

## Common Issues

### Compilation Errors
- Missing citations: Run bibtex and recompile
- Undefined references: Compile twice to resolve cross-references
- Minted errors: Ensure Python and Pygments are installed

### Unicode Characters
- All special characters (β, χ², etc.) should use LaTeX math mode
- Use `$\beta$` instead of β, `$\chi^2$` instead of χ²

## Support

This template was created for academic use. For issues or questions:
1. Check LaTeX documentation for package-specific questions
2. Consult your university's thesis guidelines
3. Ask your supervisor for content-related guidance

## License

This template is provided as-is for academic use. Feel free to modify and adapt it to your needs.

---

Good luck with your thesis! 📚✨