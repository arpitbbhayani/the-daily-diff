# Project Instructions

This document outlines team-shared architecture, conventions, and workflows for this repository.

## Pre-Commit Verification

Verify that the build is functional before committing any changes.

- Run the `npm run build` command to check for build errors.
- Resolve any build errors that occur during the build process.
- If a build error is caused by a specific file in the `src/content/stories/` directory, delete that file and its corresponding infographic image if it exists.
