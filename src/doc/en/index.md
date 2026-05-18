# Open Source Hardware Guide

**Guide for the Development of Open Source Hardware**

With this guide, we attempt to identify and interconnect all relevant aspects of Open Source Hardware development. Excellent recommendations already exist; however, they often leave too much room for maneuver, especially for newcomers, leaving them alone with the question of "what fits best for them." This guide describes *one* possible path in detail to facilitate getting started.
The goal is to provide concrete recommendations, for example on licensing, structuring, versioning, or documentation of OSH projects.

![OSH-Guide Concept](https://raw.githubusercontent.com/IIoTTestBed/osh-guide/refs/heads/gh-pages-src/gen/osh-guide_concept.png)

---


## Contents

| Chapter | Topic |
| --- | --- |
| [Preliminary Remarks](vorbemerkungen.md) | Context and goals of this guide |
| [1. Version Control & Versioning](01-versionsverwaltung.md) | Git, Semantic Versioning |
| [2. Folder Structure & Naming](02-ordnerstruktur.md) | OSH Directory Standard, naming conventions |
| [3. Documentation](03-dokumentation.md) | Readme, Markdown |
| [4. Licensing](04-lizenzierung.md) | CERN-OHL, AGPL, REUSE tool |
| [5. Compatibility & Modularization](05-kompatibilitaet.md) | License compatibility |
| [6. Liability & Warranty](06-haftung.md) | e.g., Product Liability Directive |
| [7. Principles](07-prinzipien.md) | Unix philosophy, design rules |
| **Appendix** | |
| [OSH Directory Standard](anhang_osh-dir-std.md) | Complete directory structure of the OSH Directory Standard |
| [OSH Contributors License Agreement](anhang_osh-cla.md) | Template for a Contributors License Agreement |

---


## Status

This guide is actively developed within the framework of the [OSHOP project](https://www.oshop-network.de/) at HTW Dresden.


## Standards

There are a number of already existing standards applied here:

- `DIN EN 81346-1:2010-05`: "Industrial systems, installations and equipment and industrial products – Structuring principles and reference designations – Part 1: Basic rules (IEC 81346-1:2009)"
- `OSH-DIR-STD`: "OSH project directory structure standards"
    - <https://gitlab.fabcity.hamburg/software/template-osh-repo-structure-minimal/>
- `Semantic Versioning`: "Semantic Versioning 2.0.0", a versioning scheme for meaningful version numbers to avoid dependency conflicts
    - <https://semver.org/>
- `ISO IEC 5692:2021 (SPDX)`: "System Package Data Exchange", standard for licensing open and free software, hardware, data, or documentation
    - <https://spdx.dev/>


## OSH Guidelines

There are already a number of guidelines that influenced the development of this OSH Guide. However, the evaluation of the individual guides is not yet complete. This list is initially intended to pool the available resources.

- `Best Practices for Open Source Hardware`: <https://oshwa.org/resources/sharing-best-practices/>
- `Open-Documentation-Guide` of #ASKnet by r0g_agency: <https://github.com/opencultureagency/Open-Documentation-Guide>
- `Open-Hardware-Guide` of #ASKnet by r0g_agency: <https://github.com/opencultureagency/Open-Hardware-Guide>, <https://openculture.agency/outcomes/open-hardware-guide/>, <https://asknet.community/tools>
- `Hardware Documentation Guide`: <https://open-make.github.io/Hardware-template-guide/>
- Hardware Research Template: <https://codeberg.org/openmake/Hardware-template-guide>
- `Open Hardware Design Guide`: <https://hardware.prototypefund.de/open-hardware-design-guide/>
- `How to Open Source Hardware` by the Open Hardware Alliance: <https://open-hardware-allianz.de/oer.html>
- Open Hardware Promotional (Poster) by TU Delft: <https://gitlab.tudelft.nl/nemoandrea/poster-open-hardware>
- The Turing Way handbook to reproducible, ethical and collaborative data science/Open Source Hardware: <https://book.the-turing-way.org/reproducible-research/open/open-hardware>
- Best Practices for OSH-Projects by the CERN Open Source Program Office: <https://ospo.docs.cern.ch/recommendations/hw-best-practices/>


## License

This guide itself is provided under the `GPL-3.0-or-later`.

??? info "License"
    Since this guide is not a direct component of an OSH project's documentation but represents an independent project, the application of the `CERN-OHL-2.0` here may be misleading under certain circumstances. The `GPL` has also been applied to documentation in the past.


## Funding

This OSH Guide was created as part of the Open Source Hardware Innovation Platform project (OSHOP) at HTW Dresden and is funded by the Federal Ministry for Research, Technology and Space Flight as part of the T!Raum initiative.

<img height="100" style="height: 100px" alt="BMFTR Logo" src="https://raw.githubusercontent.com/IIoTTestBed/osh-guide/refs/heads/gh-pages-src/assets/images/bmftr_logo.png" />
<img height="100" style="height: 100px" alt="T!Raum Logo" src="https://raw.githubusercontent.com/IIoTTestBed/osh-guide/refs/heads/gh-pages-src/assets/images/traum_logo.png" />
<img height="100" style="height: 100px" alt="OSHOP Logo" src="https://raw.githubusercontent.com/IIoTTestBed/osh-guide/refs/heads/gh-pages-src/assets/images/oshop_logo.png" />


!!! info "Living Document"
    This guide must be continuously adapted to the changing requirements of Open Source Hardware. Contributions and suggestions for improvement are expressly welcome.
