# Gemara Schema

This directory contains CUE schema definitions from the [Gemara project](https://registry.cue.works/docs/github.com/gemaraproj/gemara).

## Source

- **Registry**: https://registry.cue.works/docs/github.com/gemaraproj/gemara
- **Source file**: https://registry.cue.works/source/github.com/gemaraproj/gemara/layer-2.cue

## Purpose

Gemara provides a structured schema for defining security and governance artifacts:

- **#Control** — Safeguards or countermeasures with objectives and assessment requirements
- **#Threat** — Opportunities for negative impact, linked to system capabilities
- **#Capability** — System features or components that threats can exploit

## Usage in This Project

We use Gemara schema types in the YAML front matter of our markdown files:

- `risks/*.md` — contain `gemara:` sections matching `#Threat`
- `practices/*.md` — contain `gemara:` sections matching `#Control`
- `capabilities/*.md` — contain `gemara:` sections matching `#Capability`

This allows tooling to validate and cross-reference threats, controls, and capabilities across the framework.

## Schema Status

The Gemara schema is marked as **experimental** (`@status("experimental")`). Structure may evolve.
