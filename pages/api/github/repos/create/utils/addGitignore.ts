import gitignoreTemplate from '../template/gitignore';
const addGitignore = async (octokit,owner,repo) => {
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        owner: owner,
        repo: repo,
        path: ".gitignore",
        message: "Add .gitignore",
        content: Buffer.from(gitignoreTemplate).toString("base64"),
    });
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        owner: owner,
        repo: repo,
        path: "src-tauri/.gitignore",
        message: "Add .gitignore",
        content: Buffer.from('/target/').toString("base64"),
    });

}

export default addGitignore;
    