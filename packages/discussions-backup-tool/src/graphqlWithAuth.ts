import { Octokit } from '@octokit/core';
import { paginateGraphQL } from '@octokit/plugin-paginate-graphql';
import process from 'node:process';

export const graphqlWithAuth = () => {
  const MyOctokit = Octokit.plugin(paginateGraphQL);

  if (!process.env.GH_DISCUSSIONS_TOKEN) {
    throw Error('GH_DISCUSSIONS_TOKEN is not set');
  }

  return new MyOctokit({ auth: process.env.GH_DISCUSSIONS_TOKEN });
};
