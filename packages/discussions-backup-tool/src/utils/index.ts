import type { DiscussionComment } from '@octokit/graphql-schema';
import { getMoreComments, getMoreReplies } from '../graphql/index.js';
import type { ProcessedComment } from '../types.js';

export const processDiscussions = async (discussions: any[]) => {
  console.log(`\n💬 Processing comments and replies...`);

  let totalComments = 0;
  let totalReplies = 0;
  let extraRequests = 0;

  for (const discussion of discussions) {
    const commentsData = discussion.comments;
    let allComments: DiscussionComment[] = [...(commentsData.nodes ?? [])];
    totalComments += allComments.length;

    // Fetch remaining comments if needed
    if (commentsData.pageInfo.hasNextPage && commentsData.pageInfo.endCursor) {
      console.log(`  🔄 Discussion #${discussion.number} has more comments, fetching...`);
      const moreComments = await getMoreComments(discussion.id, commentsData.pageInfo.endCursor);
      allComments.push(...moreComments);
      totalComments += moreComments.length;
      extraRequests++;
    }

    // Process each comment's replies
    const processedComments: ProcessedComment[] = [];
    for (const comment of allComments) {
      const repliesData = comment.replies;
      const initialReplies = repliesData.nodes ?? [];
      let allReplies: DiscussionComment[] = initialReplies.filter((r: any): r is DiscussionComment => r !== null);
      totalReplies += allReplies.length;

      // Fetch remaining replies if needed
      if (repliesData.pageInfo.hasNextPage && repliesData.pageInfo.endCursor) {
        console.log(`  🔄 Comment ${comment.id.substring(0, 20)}... has more replies, fetching...`);
        const moreReplies = await getMoreReplies(comment.id, repliesData.pageInfo.endCursor);
        allReplies.push(...moreReplies);
        totalReplies += moreReplies.length;
        extraRequests++;
      }

      processedComments.push({
        ...comment,
        replies: allReplies,
      });
    }

    discussion.comments = processedComments;
  }

  console.log(`  ✓ Fetched ${totalComments} comments and ${totalReplies} replies`);
  console.log(`  ✓ Made ${extraRequests} extra request(s) for pagination`);

  return discussions;
};
