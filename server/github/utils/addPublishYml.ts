import publishYmlTemaplate from "../template/.github/workflows/publish.yml";

const addPublishYml = async (octokit, owner: string, repo: string) => {
  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: owner,
    repo: repo,
    path: ".github/workflows/publish.yml",
    message: "Add publish.yml",
    content: Buffer.from(publishYmlTemaplate).toString("base64"),
  });
};

export default addPublishYml;
