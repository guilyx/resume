# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Fixed

- Company favicons use Google's `faviconV2` with the full site URL so icons resolve for sites where domain-only lookup failed (e.g. sirb.ai).

### Added

- Optional `visible` flag on work experience entries; entries with `visible: false` are omitted from the rendered resume.
- SIRB.AI (2026–Present) Lead Robotics Engineer experience; TII role end-dated to 2026.

### Changed

- Polytech Nantes (Robotics Intern) is hidden from the resume output (`visible: false`).
