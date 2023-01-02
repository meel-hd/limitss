import indexHtmlTemplate from "../template/src/index.html";

const addIndexHtml = async (octokit, owner, repo) => {
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        owner: owner,
        repo: repo,
        path: "src/index.html",
        message: "Add index.html",
        content: Buffer.from(indexHtmlTemplate).toString("base64"),
    });
}
export default addIndexHtml;