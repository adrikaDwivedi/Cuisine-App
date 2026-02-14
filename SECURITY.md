# Security and Secret Management

This project previously contained a hard-coded Spoonacular API key in `api.js`.
That value has been removed from the working tree, but if you have ever cloned
or pulled this repository it may still exist in your local Git history.

## What has been done already

* `api.js` now reads `API_KEY` from `expo-constants` (configured via
  `app.extra`), not from source.
* A `.env` file has been added to store sensitive values locally.
* `.env` is listed in `.gitignore` and new environment files will be ignored.
* `app.config.js` loads `dotenv` and injects the key into Expo's `extra` field.
* The `dotenv` package was installed (see `package.json`).
* Commit 4aa67670 removes the key from the repo's current state.

## Next required actions (you must perform these)

1. **Rotate the compromised API key** with Spoonacular. Replace it in your
   `.env` file after doing so:
   ```ini
   API_KEY=NEW_SECRET_KEY
   ```

2. **Purge the old key from Git history.**  See
   `scripts/clean-history.ps1` for commands using either
   `git-filter-repo` or the BFG Repo-Cleaner. Run one of those processes and
   then force-push the cleaned branches:
   ```powershell
   # example (git-filter-repo)
   pip install git-filter-repo        # if not already installed
   git filter-repo --replace-text filters.txt
   git push --force origin main
   ```
   > ⚠️ This rewrites history. Communicate to teammates and have them re-clone
   > or reset their local copies afterwards.

3. **Verify removal** by searching the log for the old key:
   ```bash
   git log -S"a8ecbd3a35794c988bd67de57ca940a4"
   ```
   The search should return no matches after a successful purge.

4. **Add preventive checks**:
   * Consider a pre-commit hook that scans for `API_KEY` strings.
   * Use tools like [git-secrets](https://github.com/awslabs/git-secrets)
     or `husky` + custom script.
   * Document secret usage and rotation policy in your team’s README.

For any other secrets in the future, always put them in `.env` or a proper
vault service and never commit them.
