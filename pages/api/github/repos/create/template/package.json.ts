const packageJsonTemplate = {
    name: "create-limitss-app",
    private: true,
    version: "0.0.0",
    type: "module",
    license:'MIT',
    description:'This is a template for a new project',
    scripts: {
      tauri: "tauri"
    },
    devDependencies: {
      '@tauri-apps/cli': "^1.1.0"
    }
  }
  export default packageJsonTemplate;