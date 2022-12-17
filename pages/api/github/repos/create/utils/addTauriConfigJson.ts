import tauriConfigJsonTemplate from "../template/src-tauri/taur.config.json";

 export type configValues = {
  octokit: any;
  owner: string;
  repo: string;
  name: string;
  width: number;
  height: number;
  description: string;
  version: string;
  // Advanced options
  focus: boolean;
  alwaysOnTop: boolean;
  maximized: boolean;
  center: boolean;
  resizable: boolean;
  visible: boolean;
  hiddenTitle: boolean;
  theme: null |  "Dark" | "Light";
  titleBarStyle: undefined | 'Visible' | 'Transparent';
  minWidth: null | number;
  minHeight: null | number;
  maxWidth: null | number;
  maxHeight: null | number;
  y: null | number;
  x: null | number;
};

const AddTauriConfigJson = async ({
  octokit,
  owner,
  repo,
  name,
  width,
  height,
  description,
  version,
  focus,
  alwaysOnTop,
  maximized,
  center,
  resizable,
  visible,
  hiddenTitle,
  theme,
  titleBarStyle,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  y,
  x,
}: configValues) => {
  // Populate the template with the necessary data
  tauriConfigJsonTemplate.package.productName = name
    .split(" ")
    .join("_")
    .toLowerCase();
  tauriConfigJsonTemplate.tauri.windows[0].title = name;
  tauriConfigJsonTemplate.tauri.windows[0].maximized = maximized;
  tauriConfigJsonTemplate.tauri.windows[0].focus = focus;
  tauriConfigJsonTemplate.tauri.windows[0].alwaysOnTop = alwaysOnTop;
  tauriConfigJsonTemplate.tauri.windows[0].width = width;
  tauriConfigJsonTemplate.tauri.windows[0].height = height;
  tauriConfigJsonTemplate.tauri.bundle.shortDescription = description;
  tauriConfigJsonTemplate.tauri.bundle.longDescription = description;
  tauriConfigJsonTemplate.package.version = version;
  tauriConfigJsonTemplate.tauri.windows[0].center = center;
  tauriConfigJsonTemplate.tauri.windows[0].resizable = resizable;
  tauriConfigJsonTemplate.tauri.windows[0].visible = visible;
  tauriConfigJsonTemplate.tauri.windows[0].hiddenTitle = hiddenTitle;
  tauriConfigJsonTemplate.tauri.windows[0].theme = theme;
  tauriConfigJsonTemplate.tauri.windows[0].titleBarStyle = titleBarStyle;
  tauriConfigJsonTemplate.tauri.windows[0].minWidth = minWidth;
  tauriConfigJsonTemplate.tauri.windows[0].minHeight = minHeight;
  tauriConfigJsonTemplate.tauri.windows[0].maxWidth = maxWidth;
  tauriConfigJsonTemplate.tauri.windows[0].maxHeight = maxHeight;
  tauriConfigJsonTemplate.tauri.windows[0].y = y;
  tauriConfigJsonTemplate.tauri.windows[0].x = x;
  
 console.log('template.window',tauriConfigJsonTemplate.tauri.windows[0]);
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
