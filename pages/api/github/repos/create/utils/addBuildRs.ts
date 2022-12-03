const addBuildRs = async (octokit, owner: string, repo: string) => {
  const buildRs = `
    fn main() {
        tauri_build::bundle();
    }
    `;
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: owner,
    repo: repo,
    path: "src-tauri/build.txt",
    message: "Add build.rs",
    content: Buffer.from(buildRs).toString("base64"),
  });
};
export default addBuildRs;
