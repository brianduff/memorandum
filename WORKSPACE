load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
  name = "rules_rust",
  sha256 = "36ab8f9facae745c9c9c1b33d225623d976e78f2cc3f729b7973d8c20934ab95",
  urls = ["https://github.com/bazelbuild/rules_rust/releases/download/0.31.0/rules_rust-v0.31.0.tar.gz"],
)

load("@rules_rust//rust:repositories.bzl", "rules_rust_dependencies", "rust_register_toolchains")

rules_rust_dependencies()

rust_register_toolchains(edition="2021")

load("@rules_rust//crate_universe:repositories.bzl", "crate_universe_dependencies")

crate_universe_dependencies()

load("@rules_rust//crate_universe:defs.bzl", "crates_repository", "crate")

crates_repository(
    name = "crate_index",
    cargo_lockfile = "//backend:Cargo.lock",
    isolated = False,
    lockfile = "//backend:cargo-bazel-lock.json",
    manifests = ["//backend:Cargo.toml"],
)

load("@crate_index//:defs.bzl", "crate_repositories")

crate_repositories()


# Add rules_oci
http_archive(
    name = "rules_oci",
    sha256 = "d41d0ba7855f029ad0e5ee35025f882cbe45b0d5d570842c52704f7a47ba8668",
    strip_prefix = "rules_oci-1.4.3",
    url = "https://github.com/bazel-contrib/rules_oci/releases/download/v1.4.3/rules_oci-v1.4.3.tar.gz",
)

load("@rules_oci//oci:dependencies.bzl", "rules_oci_dependencies")

rules_oci_dependencies()

load("@rules_oci//oci:repositories.bzl", "LATEST_CRANE_VERSION", "oci_register_toolchains")

oci_register_toolchains(
    name = "oci",
    crane_version = LATEST_CRANE_VERSION,
    # Uncommenting the zot toolchain will cause it to be used instead of crane for some tasks.
    # Note that it does not support docker-format images.
    # zot_version = LATEST_ZOT_VERSION,
)

# Pull distroless image

load("@rules_oci//oci:pull.bzl", "oci_pull")

oci_pull(
    name = "distroless_cc12",
    digest = "sha256:a9056d2232d16e3772bec3ef36b93a5ea9ef6ad4b4ed407631e534b85832cf40",
    image = "gcr.io/distroless/cc-debian12",
    platforms = ["linux/amd64", "linux/arm64/v8"],
)


http_archive(
    name = "rules_pkg",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_pkg/releases/download/0.9.1/rules_pkg-0.9.1.tar.gz",
        "https://github.com/bazelbuild/rules_pkg/releases/download/0.9.1/rules_pkg-0.9.1.tar.gz",
    ],
    sha256 = "8f9ee2dc10c1ae514ee599a8b42ed99fa262b757058f65ad3c384289ff70c4b8",
)
load("@rules_pkg//:deps.bzl", "rules_pkg_dependencies")
rules_pkg_dependencies()
