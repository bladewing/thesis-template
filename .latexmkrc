# latexmkrc configuration file for lualatex compilation
# This configuration sets up latexmk to use lualatex as the primary compiler

# Set the primary PDF generation method to use lualatex
$pdf_mode = 4;  # 4 = lualatex

# Specify the lualatex command with necessary options
$lualatex = 'lualatex -synctex=1 -interaction=nonstopmode -file-line-error -shell-escape %O %S';

# Set the output directory (optional, can be commented out if not needed)
# $out_dir = 'build';

# Configure bibtex/biber if needed
$bibtex_use = 2;  # Use bibtex
$bibtex = 'bibtex %O %B';

# Clean up auxiliary files
$clean_ext = 'aux bbl blg fdb_latexmk fls log out synctex.gz toc lof lot glg glo gls idx ilg ind ist acn acr alg glsdefs run.xml bcf';

# Additional clean files for minted (if used)
push @generated_exts, 'minted';
$clean_ext .= ' _minted-%R/* _minted-%R';

# Preview configuration (optional)
# $preview_continuous_mode = 1;  # Uncomment for continuous preview
# $preview_mode = 1;  # Uncomment for preview mode
# $pdf_previewer = 'evince %O %S';  # Change to your preferred PDF viewer

# Custom dependency handling for glossaries if needed
add_cus_dep('glo', 'gls', 0, 'makeglossaries');
add_cus_dep('acn', 'acr', 0, 'makeglossaries');
sub makeglossaries {
    system("makeglossaries $_[0]");
}

# Ensure proper handling of unicode and fontspec with lualatex
$ENV{'TEXINPUTS'} = './/:' . ($ENV{'TEXINPUTS'} // '');

# Set max repeat to handle complex documents
$max_repeat = 5;

# Enable recorder for better dependency tracking
$recorder = 1;
