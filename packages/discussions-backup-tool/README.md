# GitHub Discussions Backup Tool

This tool allows you to back up GitHub Discussions from a specified repository. It fetches all discussions and saves them `json` format for backup and recovery purposes.

## How to use

### 1. Install dependencies

Make sure you have `node` and `pnpm` installed. Additionally, clone the repo if you are using the tool from a local environment rather than Github Actions.

Then, install the required packages by running:

```bash
pnpm install
```

### 2. Set up environment variables

Create a `.env` file in the root directory of the project, or add a GitHub Actions secret with the following variables:

- `GH_DISCUSSIONS_TOKEN`: Your GitHub fine-grained token with read access to your target repository discussions

### 3. Run the backup script

You can run the backup script using the following command:

Replace `{my-org}` with your GitHub organization or username, and `{repo-name}` with the name of the repository you want to back up discussions from.
i.e., if your target repository is `my-org/my-repo`

```bash
pnpm run backup-discussions -- {my-org} {my-repo}
```

### 4. Output

The discussions will be saved in the `out/discussions-backup.json` file within this package.
