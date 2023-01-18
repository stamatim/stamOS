# Useful Resources

- [https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e](Setup a monorepo with PNPM workspaces and speed it up with Nx)

# Useful Commands

- `pnpm --filter example-ui-lib build` – Execute `pnpm` script `build` in `./lib/example-ui-lib`
- `pnpm add example-ui-lib --filter example-nextjs-app --workspace` – Add `./lib/example-ui-lib` as a dependency to `./apps/example-nextjs-app`