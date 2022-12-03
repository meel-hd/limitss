const addCargoToml = async (octokit,owner,repo,name,description,license) => {
    const cargoToml = `
    [package]
    name = "${name}"
    version = "1.0.0"
    description = "${description}"
    authors = ["${owner}"]
    license = "${license}"
    repository = ""
    edition = "2021"
    rust-version = "1.57"
    
    [build-dependencies]
    tauri-build = { version = "1.1", features = [] }

    [dependencies]
    serde_json = "1.0"
    serde = { version = "1.0", features = ["derive"] }
    tauri = { version = "1.1", features = ["api-all"] }

    [features]
    default = [ "custom-protocol" ]
    custom-protocol = [ "tauri/custom-protocol" ]
    `;

    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        owner: owner,
        repo: repo,
        path: "src-tauri/Cargo.toml",
        message: "Add Cargo.toml",
        content: Buffer.from(cargoToml).toString("base64"),
    });

}
export default addCargoToml;