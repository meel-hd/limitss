const publishYmlTemaplate = `
name: 'publish'
on:
  repository_dispatch

jobs:
  publish-tauri:
    permissions: write-all
    strategy:
      fail-fast: false
      matrix:
        platform: [macos-latest, ubuntu-20.04, windows-latest]

    runs-on: ${"${{ matrix.platform }}"}
    steps:
      - uses: actions/checkout@v3
      - name: setup node
        uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: install Rust stable
        uses: dtolnay/rust-toolchain@stable
      - name: install dependencies (ubuntu only)
        if: matrix.platform == 'ubuntu-20.04'
        run: |
          sudo apt-get update
          sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev libappindicator3-dev librsvg2-dev patchelf
      - name: install app dependencies, create icons, and build it
        run: yarn && yarn tauri icon && yarn tauri build
      - uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: ${"${{ secrets.GITHUB_TOKEN }}"}
        with:
          tagName: app-v__VERSION__ # the action automatically replaces \_\_VERSION\_\_ with the app version
          releaseName: 'App v__VERSION__'
          releaseBody: 'See the assets to download this version and install.'
          releaseDraft: true
          prerelease: false
`
export default publishYmlTemaplate