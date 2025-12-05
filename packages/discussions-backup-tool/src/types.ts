import type {
  Discussion,
  DiscussionComment,
  DiscussionCommentConnection,
  DiscussionConnection,
} from '@octokit/graphql-schema';

export interface DiscussionsQueryResponse {
  repository: {
    discussions: DiscussionConnection;
  };
}

export interface MoreCommentsQueryResponse {
  node: Discussion & {
    comments: DiscussionCommentConnection;
  };
}

export interface MoreRepliesQueryResponse {
  node: DiscussionComment & {
    replies: DiscussionCommentConnection;
  };
}

export interface ProcessedComment extends Omit<DiscussionComment, 'replies'> {
  replies: DiscussionComment[];
}

export interface ProcessedDiscussion extends Omit<Discussion, 'comments'> {
  comments: ProcessedComment[];
}
