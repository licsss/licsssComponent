import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json" assert { type: "json" };

const conf = [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      commonjs({
        include: ["node_modules/**"],
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/__tests__/**"],
      }),
      postcss({
        extract: "css/main.css",
        sourceMap: true,
      }),
    ],
    external: [
      "react",
      "react-dom",
      "bootstrap",
      "react-bootstrap",
      "react/jsx-runtime",
    ],
  } /*
  {
    input: "dist/cjs/types/index.d.ts",
    output: [{ file: "dist/cjs/index.d.ts", format: "cjs" }],
    plugins: [dts()],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/esm/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },*/,
];

export default conf;
