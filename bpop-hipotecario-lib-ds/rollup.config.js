import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import cssurl from "postcss-url";
import copy from "rollup-plugin-copy";
import image from "@rollup/plugin-image";

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
    typescript({ useTsconfigDeclarationDir: true, tsconfig: "./tsconfig.prod.json" }),
    postcss({ modules: true, plugins: [cssurl({ url: "inline" })] }),
    image(),
    copy({
      targets: [
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
