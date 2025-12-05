import { mkdir, writeFile } from 'node:fs/promises';
import process from 'node:process';
import { getDiscussions } from './graphql/index.js';
import { processDiscussions } from './utils/index.js';

const init = async () => {
  const owner = process.argv[2];
  const repo = process.argv[3];

  if (!owner || !repo) {
    throw new Error('Usage: node index.js <owner> <repo>');
  }

  try {
    await mkdir('./out', { recursive: true });
  } catch {
    console.error('Could not create output directory');
  }

  const discussions = await getDiscussions(owner, repo);
  const processedDiscussions = await processDiscussions(discussions);

  const output = {
    repository: { owner, name: repo },
    fetchedAt: new Date().toISOString(),
    summary: { totalDiscussions: processedDiscussions.length },
    discussions: processedDiscussions,
  };

  await writeFile('./out/discussions-backup.json', JSON.stringify(output, null, 2)).catch(() =>
    console.error('Could not create discussions-backup.json'),
  );

  console.log(`\n✓ Backed up ${processedDiscussions.length} discussion(s) from ${owner}/${repo}`);
};

init();
