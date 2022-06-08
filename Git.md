## Setup and Config

| Command                                            | Action                     |
| -------------------------------------------------- | -------------------------- |
| `git config --global alias.[alias] 'git command' ` | Setup alias on git command |

## Basic Snapshotting

| Command                             | Action                                                     |
| ----------------------------------- | ---------------------------------------------------------- |
| `git add [file-name.txt]`           | Add a file to the staging area                             |
| `git add -A`                        | Add all new and changed files to the staging area          |
| `git commit -am `                   | Add and commit changes                                     |
| `git diff`                          | Show changes between commits, commit and working tree, etc |
| `git rm -r [file-name.txt]`         | Remove a file (or folder)                                  |
| `git commit --amend -m "message"  ` | change message of last commit                              |
| `git revert `                       | undo a commit with a new commit                            |

## Branching and Merging

| Command          | Action                                     |
| ---------------- | ------------------------------------------ |
| `git stash`      | Stash changes in a dirty working directory |
| `git stash pop`  | Bring back changes                         |
| `git stash list` | View changes that stashed away             |

## Inspection

| Command               | Action                                     |
| --------------------- | ------------------------------------------ |
| `git log`             | View changes                               |
| `git log --oneline`   | View changes (briefly)                     |
| `git log --graph`     | View changes(graph)                        |
| `git log --decorate`  | View changes(in a more human-friendly way) |
| `git log -S "[file]"` | Search commit                              |

## Debugging

| Command      | Action                                                       |
| ------------ | ------------------------------------------------------------ |
| `git bisect` | Use binary search to find the commit that introduced a bug   |
| `git blame`  | Show what revision and author last modified each line of a file |
| `git grep`   | Print lines matching a pattern                               |

