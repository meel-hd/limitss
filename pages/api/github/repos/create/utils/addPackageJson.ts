import packageJsonTemplate from "../template/package.json";

const addPackageJsonToRepo = async (
  octokit,
  {
    name,
    description,
    version,
    license,
  }: { name: string; description: string; version: string; license: string },
  owner: string,
  repo: string
) => {
  // Populate the package.json template with the necessary data
  packageJsonTemplate.name = name;
  packageJsonTemplate.description = description;
  packageJsonTemplate.version = version;
  packageJsonTemplate.license = license;

  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: owner,
    repo: repo,
    path: "package.json",
    message: "Add package.json",
    content: Buffer.from(JSON.stringify(packageJsonTemplate)).toString(
      "base64"
    ),
  });
};

export default addPackageJsonToRepo;
