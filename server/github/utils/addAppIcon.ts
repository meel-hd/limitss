import axios from "axios";

const addAppIcon = async (octokit,owner,repo,iconURL) => {  
    const response = await axios.get(iconURL,  { responseType: 'arraybuffer' })
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        owner: owner,
        repo: repo,
        path: "app-icon.png",
        message: "Add app icon",
        content: Buffer.from(response.data, 'utf-8').toString("base64"),
    });
}
export default addAppIcon;