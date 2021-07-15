import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

import packageJson from "./package.json";

export default {
  input: "./src/lib.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: false,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({ modules: true }),
    copy({
      targets: [
        {
          src: "src/styles/tokens.css",
          dest: "dist",
        },
        {
          src: "src/icons/",
          dest: "dist",
        },
        {
          src: "src/index.d.ts",
          dest: "dist",
        },
        {
          src: "src/types",
          dest: "dist",
        },
      ],
    }),
  ],
};
