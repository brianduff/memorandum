load("@rules_rust//rust:defs.bzl", "rust_binary", "rust_library", "rust_test")
load("@crate_index//:defs.bzl", "aliases", "all_crate_deps")
load("@rules_pkg//pkg:tar.bzl", "pkg_tar")
load("@rules_oci//oci:defs.bzl", "oci_image", "oci_tarball", "oci_push")

rust_binary(
    name = "backend",
    srcs = glob(["src/**/*.rs",]),
    deps = all_crate_deps(),
#    proc_macro_deps = all_crate_deps(proc_macro = True),
)

pkg_tar(
    name = "backend_layer",
    srcs = [":backend"],
    stamp = 1
)


# Step 3: Build image and add built layer to it
oci_image(
    name = "backend_image",
    base = "@distroless_cc12",
    tars = [":backend_layer"],
    entrypoint = ["/backend"],
)

oci_tarball(
  name = "backend_image_tar",
  image = ":backend_image",
  repo_tags = ["dubh/memorandum_backend:latest"]
)

oci_push(
  name = "push_backend",
  image = ":backend_image",
  repository = "gcr.io/dubh-cloud/memorandum-backend",
#  remote_tags = [ "latest" ]
)
