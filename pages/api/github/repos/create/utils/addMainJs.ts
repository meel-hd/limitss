import mainJsTemplate from "../template/src/main.js";
const addMainJs =  async (octokit, owner, repo,link) => {
    const finalTemplate = `const link = "${link}";
        ${mainJsTemplate}
    `
     await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        owner: owner,
        repo: repo,
        path: "src/main.js",
        message: "Add main.js",
        content: Buffer.from(finalTemplate).toString("base64"),
    });
}
export default addMainJs;