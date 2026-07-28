# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-07-28

### Security

- **backend**: bumped transitive dependencies flagged by Dependabot to patched
  versions via `overrides` — `tar`, `brace-expansion`, `uuid`, `qs`,
  `@protobufjs/utf8`, `picomatch`, `path-to-regexp`, `jws`, `sha.js`, `semver`,
  `minimatch`, `body-parser`, `diff`.
- **backend**: bumped `nodemon` 2.x → 3.x (dev-only) to drop a vulnerable
  `brace-expansion`/`minimatch`/`glob`/`rimraf` chain.
- **backend**: added middleware rejecting requests whose `Content-Type`
  contains `message/*`, mitigating [GHSA-9q82-xgwf-vj6h](https://github.com/advisories/GHSA-9q82-xgwf-vj6h)
  (Apollo Server CSRF/XS-Search bypass). `apollo-server-express` v3 is
  end-of-life with no upstream patch; this is the workaround documented in the
  advisory. Full remediation requires migrating to `@apollo/server` v5+.
- **frontend**: bumped `vite` 6.1.0 → 6.4.3 and `react-router-dom` 7.1.5 →
  7.18.0, resolving several `react-router` open-redirect and DoS advisories
  and pulling in patched `esbuild`/`rollup`/`turbo-stream`.
- **frontend**: bumped transitive dependencies via `overrides` —
  `brace-expansion`, `js-yaml`, `picomatch`, `flatted`, `@babel/runtime`,
  `minimatch` (both the direct and `@typescript-eslint/typescript-estree`
  copies), `rollup`, `turbo-stream`, `esbuild`.
- **frontend**: ran `npm audit fix` to pick up patched `@eslint/plugin-kit`
  and `ajv`.

### Known accepted risk

- `apollo-server-core`/`apollo-server-express` v3 has no available patch for
  [GHSA-9q82-xgwf-vj6h](https://github.com/advisories/GHSA-9q82-xgwf-vj6h);
  mitigated in code (see above). Tracked for a future `@apollo/server`
  migration.
- `react-router` has an unpatched advisory, [GHSA-qwww-vcr4-c8h2](https://github.com/advisories/GHSA-qwww-vcr4-c8h2),
  fixed only in the not-yet-adopted v8 line. It affects unstable RSC-mode
  APIs only, which this app does not use. Tracked for a future v7 → v8
  migration.
