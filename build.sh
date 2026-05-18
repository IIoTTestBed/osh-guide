#!/usr/bin/bash

zensical build --clean --config-file zensical.de.toml
zensical build --config-file zensical.en.toml

python -m http.server --directory site 8000