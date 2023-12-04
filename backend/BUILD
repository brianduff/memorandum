load("@rules_rust//rust:defs.bzl", "rust_binary", "rust_library", "rust_test")
load("@crate_index//:defs.bzl", "aliases", "all_crate_deps")

rust_binary(
    name = "backend",
    srcs = glob(["src/**/*.rs",]),
    deps = all_crate_deps(),
#    proc_macro_deps = all_crate_deps(proc_macro = True),
)

