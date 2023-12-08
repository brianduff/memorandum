load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")
load("@npm//frontend:vite/package_json.bzl", vite_bin = "bin")

# This macro expands to a link_npm_package for each third-party package in package.json
npm_link_all_packages(name = "node_modules")

CONFIGS = [
    "vite.config.ts",
    "package.json",
    "tsconfig.json",
    "tsconfig.node.json",
    "index.html",
]

BUILD_DEPS = [":node_modules/" + d for d in [
    "@blueprintjs/core",
    "@blueprintjs/icons",
    "@emotion/react",
    "@mdxeditor/editor",
    "@swc/plugin-emotion",
    "@vitejs/plugin-react-swc",
    "vite",
    "react",
    "react-dom",
    "react-query",
    "react-router-dom",
    "typescript",
    "@emotion/babel-plugin",
    "@types/jest",
    "@types/react",
    "@types/react-dom",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser",
    "eslint",
    "eslint-plugin-react-hooks",
    "eslint-plugin-react-refresh",
    "jest",
    "jest-environment-jsdom",
    "ts-jest",
    "ts-node",
    "style-mod",
]]


copy_to_bin(
    name = "vite_srcs_export",
    srcs = glob([
        "src/**/*.css",
        "src/**/*.svg",
        "src/**/*.ts",
        "src/**/*.tsx",
        "utils/**/*.ts",
        "utils/**/*.tsx",
        "public/**/*.svg",
    ]),
)

vite_bin.vite(
    name = "vite",
    srcs = BUILD_DEPS + CONFIGS + [":vite_srcs_export"],
    args = ["build"],
    chdir = package_name(),
    out_dirs = ["dist"],
)
