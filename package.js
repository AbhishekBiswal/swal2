Package.describe({
  name: "abhishekbiswal:swal2",
  version: "0.0.2",
  // Brief, one-line summary of the package.
  summary: "",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/AbhishekBiswal/swal2",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.1.0.2");
  api.addFiles(
    ["lib/client/sweetalert2.css", "lib/client/sweetalert2.min.js"],
    "client"
  );
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("abhishekbiswal:swal2");
  api.mainModule("swal2-tests.js");
});
