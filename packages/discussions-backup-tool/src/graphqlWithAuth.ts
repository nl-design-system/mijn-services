import { Octokit } from '@octokit/core';
import { paginateGraphQL } from '@octokit/plugin-paginate-graphql';
import process from 'node:process';

const PaginatedOctokit = Octokit.plugin(paginateGraphQL);

export type OctokitWithPagination = InstanceType<typeof PaginatedOctokit>;

export const graphqlWithAuth = (): OctokitWithPagination => {
  if (!process.env.GH_DISCUSSIONS_TOKEN) {
    throw Error('GH_DISCUSSIONS_TOKEN is not set');
  }

  return new PaginatedOctokit({ auth: process.env.GH_DISCUSSIONS_TOKEN });
};
