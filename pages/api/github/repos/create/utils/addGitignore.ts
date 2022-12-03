import gitignoreTemplate from '../template/gitignore';
const addGitignore = async (octokit,owner,repo) => {
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        owner: owner,
        repo: repo,
        path: ".gitignore",
        message: "Add .gitignore",
        content: Buffer.from(gitignoreTemplate).toString("base64"),
    });

}

export default addGitignore;
    