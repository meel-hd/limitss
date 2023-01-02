const tauriConfigJsonTemplate = {
  build: {
    beforeDevCommand: "",
    beforeBuildCommand: "",
    devPath: "../src",
    distDir: "../src",
    withGlobalTauri: true,
  },
  package: {
    productName: "Limitss",
    version: "1.0.0",
  },
  tauri: {
    allowlist: {
      all: true,
    },
    bundle: {
      active: true,
      category: "DeveloperTool",
      copyright: "",
      deb: {
        depends: [],
      },
      externalBin: [],
      icon: [
        "icons/32x32.png",
        "icons/128x128.png",
        "icons/128x128@2x.png",
        "icons/icon.icns",
        "icons/icon.ico",
      ],
      identifier: "com.limitss.dev",
      longDescription: "",
      macOS: {
        entitlements: null,
        exceptionDomain: "",
        frameworks: [],
        providerShortName: null,
        signingIdentity: null,
      },
      resources: [],
      shortDescription: "",
      targets: "all",
      windows: {
        certificateThumbprint: null,
        digestAlgorithm: "sha256",
        timestampUrl: "",
      },
    },
    security: {
      csp: null,
    },
    updater: {
      active: false,
    },
    windows: [
      {
        maximized: false,
        alwaysOnTop: false,
        focus: true,
        height: 600,
        title: "Limitss App",
        width: 800,
        // Advanced options
        center: false,
        resizable: true,
        visible: true,
        hiddenTitle: false,
        theme: null,
        titleBarStyle: "Visible",
        minWidth: 0,
        minHeight: 0,
        maxHeight: 0,
        maxWidth: 0,
        y: 0,
        x: 0,
      },
    ],
  },
};
export default tauriConfigJsonTemplate;
