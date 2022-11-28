import 'reflect-metadata';
import { Mutation, Query, Resolver } from 'type-graphql';
import { GithubService } from './services';

@Resolver()
export class GithubResolver {
    // @Authorized()
    @Query(() => String)
    async github() {
        return new GithubService().github();
    }

    // @Authorized()
    @Mutation(() => String)
    async githubMutation() {
        return new GithubService().githubMutation();
    }
}