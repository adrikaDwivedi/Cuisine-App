# Remove sensitive API key from Git history using BFG or git-filter-repo

# Option 1: using git-filter-repo (Python)
# 1. Install git-filter-repo if you have Python: pip install git-filter-repo
# 2. Run from repo root:
#    git filter-repo --replace-text filters.txt
#    where filters.txt contains a line like:
#      a8ecbd3a35794c988bd67de57ca940a4==>REMOVED
# 3. Force-push the cleaned branch:
#    git push --force origin main

# Option 2: using BFG Repo-Cleaner
# 1. Download BFG jar from https://rtyley.github.io/bfg-repo-cleaner/.
# 2. Create a file `replacements.txt` with the API key, e.g.:
#      a8ecbd3a35794c988bd67de57ca940a4
# 3. Run:
#      java -jar bfg.jar --replace-text replacements.txt
# 4. Follow BFG instructions (git reflog expire, git gc --prune=now --aggressive).
# 5. git push --force origin main

# IMPORTANT: rewriting history affects every collaborator. Notify your team and
# make sure everyone reclones or resets their clones after this process.

Write here your actual new key after rotating, and update the filters accordingly.
