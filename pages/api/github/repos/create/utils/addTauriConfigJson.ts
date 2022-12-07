import tauriConfigJsonTemplate from '../template/src-tauri/taur.config.json'


const AddTauriConfigJson = async (octokit,owner,repo,name,fullscreen,width,height,description,version) => {
  // Populate the template with the necessary data
  tauriConfigJsonTemplate.package.productName = name;
  tauriConfigJsonTemplate.tauri.windows[0].title = name;
  tauriConfigJsonTemplate.tauri.windows[0].fullscreen = fullscreen;
  tauriConfigJsonTemplate.tauri.windows[0].width = width;
  tauriConfigJsonTemplate.tauri.windows[0].height = height ;
  tauriConfigJsonTemplate.tauri.bundle.shortDescription = description;
  tauriConfigJsonTemplate.tauri.bundle.longDescription = description;
  tauriConfigJsonTemplate.package.version = version;
  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: owner,
    repo: repo,
    path: "src-tauri/tauri.conf.json",
    message: "Add tauri.conf.json",
    content: Buffer.from(JSON.stringify(tauriConfigJsonTemplate)).toString(
      "base64"
    ),
  });
};

export default AddTauriConfigJson;