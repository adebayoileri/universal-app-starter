# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

#### NativeWind v5 Migration (#15)

This major upgrade brings NativeWind v5 with Tailwind CSS v4.1+ support, offering improved performance and new features for both native and web platforms.

**Breaking Changes:**
- Upgraded NativeWind from v4 to v5 (preview)
- Upgraded Tailwind CSS from v3.4 to v4.1
- Added `react-native-css` as a new peer dependency
- Removed NativeWind Babel preset and JSX import source override
- Updated CSS syntax from `@tailwind` directives to `@import` statements

**Dependencies:**
- `nativewind`: ^4.0.36 → ^5.0.0-preview.1
- `tailwindcss`: ^3.4.1/^3.4.4 → ^4.1.0
- `react-native-css`: new dependency ^1.0.0
- `@tailwindcss/postcss`: new dev dependency ^4.1.0
- `postcss`: updated to ^8.4.49
- `lightningcss`: pinned to 1.30.1 (resolutions)

**Configuration Updates:**
- **Babel**: Removed `nativewind/babel` preset and `jsxImportSource: "nativewind"` option
- **Metro**: Simplified `withNativeWind()` call (no longer requires `input` option)
- **PostCSS**: Added `@tailwindcss/postcss` plugin to both native and web apps
- **Tailwind**: Removed `nativewind/preset` from config files
- **CSS Files**: Migrated to Tailwind v4 syntax with `@import` statements
- **TypeScript**: Updated type references from `nativewind/types` to `react-native-css/types`

**Migration Notes:**
- The JSX transform has been replaced with import rewrites for better compatibility with compiled libraries
- NativeWind v5 uses Reanimated CSS animations instead of the custom animation engine
- Several Tailwind v4 class name changes apply (e.g., `elevation` → `elevation-sm`)
- Line height numeric values now parse as `em` units

For detailed migration information, see the [NativeWind v5 Migration Guide](https://www.nativewind.dev/v5/guides/migrate-from-v4).

**Installation:**
After pulling these changes, run:
```bash
yarn install
# or if you encounter issues with yarn
npm install --legacy-peer-deps
```

Then clear Metro cache before running the native app:
```bash
cd apps/native
npx expo start --clear
```
