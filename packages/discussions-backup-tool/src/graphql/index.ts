import 'dotenv/config';
import type { DiscussionComment } from '@octokit/graphql-schema';
import { graphqlWithAuth } from '../graphqlWithAuth.js';
import type { DiscussionsQueryResponse, MoreCommentsQueryResponse, MoreRepliesQueryResponse } from '../types.js';

let octokit: ReturnType<typeof graphqlWithAuth>;

const getOctokit = () => {
  if (!octokit) {
    octokit = graphqlWithAuth();
  }
  return octokit;
};

const discussionsQuery = `
  query($owner: String!, $repo: String!, $cursor: String) {
    repository(owner: $owner, name: $repo) {
      discussions(first: 50, after: $cursor) {
        nodes {
          id
          title
          body
          author { login }
          createdAt
          updatedAt
          url
          number
          category { name }
          labels(first: 10) {
            nodes { name }
          }
          comments(first: 50) {
            nodes {
              id
              body
              author { login }
              createdAt
              replies(first: 50) {
                nodes {
                  id
                  body
                  author { login }
                  createdAt
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

const moreCommentsQuery = `
  query($discussionId: ID!, $cursor: String) {
    node(id: $discussionId) {
      ... on Discussion {
        comments(first: 100, after: $cursor) {
          nodes {
            id
            body
            author { login }
            createdAt
            replies(first: 50) {
              nodes {
                id
                body
                author { login }
                createdAt
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  }
`;

const moreRepliesQuery = `
  query($commentId: ID!, $cursor: String) {
    node(id: $commentId) {
      ... on DiscussionComment {
        replies(first: 100, after: $cursor) {
          nodes {
            id
            body
            author { login }
            createdAt
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  }
`;

export const getDiscussions = async (owner: string, repo: string) => {
  console.log(`🔍 Fetching all discussions from ${owner}/${repo}...`);

  const allDiscussions = [];
  let hasNextPage = true;
  let cursor: string | null = null;

  while (hasNextPage) {
    const response: DiscussionsQueryResponse = await getOctokit().graphql<DiscussionsQueryResponse>(discussionsQuery, {
      owner,
      repo,
      cursor,
    });

    const discussions = response.repository.discussions.nodes ?? [];
    const validDiscussions = discussions.filter((d): d is any => d !== null);

    console.log(
      `  📄 Fetched ${validDiscussions.length} discussion(s) (total: ${allDiscussions.length + validDiscussions.length})`,
    );

    allDiscussions.push(...validDiscussions);

    hasNextPage = response.repository.discussions.pageInfo.hasNextPage;
    cursor = response.repository.discussions.pageInfo.endCursor ?? null;
  }

  return allDiscussions;
};

export const getMoreComments = async (discussionId: string, cursor: string): Promise<DiscussionComment[]> => {
  const allComments: DiscussionComment[] = [];
  let hasNextPage = true;
  let currentCursor: string | null = cursor;

  while (hasNextPage && currentCursor) {
    const response: MoreCommentsQueryResponse = await getOctokit().graphql<MoreCommentsQueryResponse>(
      moreCommentsQuery,
      {
        discussionId,
        cursor: currentCursor,
      },
    );

    const comments = response.node.comments.nodes ?? [];
    allComments.push(...comments.filter((c: any): c is DiscussionComment => c !== null));

    hasNextPage = response.node.comments.pageInfo.hasNextPage;
    currentCursor = response.node.comments.pageInfo.endCursor ?? null;
  }

  return allComments;
};

export const getMoreReplies = async (commentId: string, cursor: string): Promise<DiscussionComment[]> => {
  const allReplies: DiscussionComment[] = [];
  let hasNextPage = true;
  let currentCursor: string | null = cursor;

  while (hasNextPage && currentCursor) {
    const response: MoreRepliesQueryResponse = await getOctokit().graphql<MoreRepliesQueryResponse>(moreRepliesQuery, {
      commentId,
      cursor: currentCursor,
    });

    const replies = response.node.replies.nodes ?? [];
    allReplies.push(...replies.filter((r: any): r is DiscussionComment => r !== null));

    hasNextPage = response.node.replies.pageInfo.hasNextPage;
    currentCursor = response.node.replies.pageInfo.endCursor ?? null;
  }

  return allReplies;
};
