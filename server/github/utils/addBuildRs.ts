const addBuildRs = async (octokit, owner: string, repo: string) => {
  const buildRs = `fn main() {
    tauri_build::build()
  }
  `;
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: owner,
    repo: repo,
    path: "src-tauri/build.rs",
    message: "Add build.rs",
    content: Buffer.from(buildRs).toString("base64"),
  });
  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: owner,
    repo: repo,
    path: "src-tauri/src/main.rs",
    message: "Add main.rs",
    content: Buffer.from(`
    #![cfg_attr(
        all(not(debug_assertions), target_os = "windows"),
        windows_subsystem = "windows"
    )]
    
    
    fn main() {
        tauri::Builder::default()
            .run(tauri::generate_context!())
            .expect("error while running tauri application");
    }
    
    `).toString("base64"),
    });

};
export default addBuildRs;
