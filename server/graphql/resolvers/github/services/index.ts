import { unstable_getServerSession } from "next-auth";
import { Octokit } from "octokit";

const getSession = async () => {
    const session = await unstable_getServerSession();
    return session;
}

// const octokit = new Octokit({
//     auth: getSession().then((session) => {
//         // @ts-ignore
//         return session.user.accessToken as string;
//     })
// })
export class GithubService {
    async github() {
        // octokit.request('GET /user').then((response) => {
        //     return JSON.stringify(response.data);
        // })
        return 'github';
    }   
    async githubMutation() {
        return 'githubMutation';
    }

}