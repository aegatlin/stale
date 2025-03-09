import { ICheatSheet } from '../../src/code/cheat-sheet/CheatSheet'
import { DescriptionType } from '../../src/code/cheat-sheet/CheatSheetDatum'

export const gitCheatSheet: ICheatSheet = {
  title: 'Git Cheat Sheet',
  groups: [
    {
      title: 'Setup',
      contents: [
        {
          title:
            'set a name that is identifiable for credit when review version history',
          description: {
            type: DescriptionType.Code,
            text: 'git config --global user.name “[firstname lastname]”'
          }
        },

        {
          title:
            'set an email address that will be associated with each history marker',
          description: {
            type: DescriptionType.Code,
            text: 'git config --global user.email “[valid-email]”'
          }
        },
        {
          title:
            'set automatic command line coloring for Git for easy reviewing',
          description: {
            type: DescriptionType.Code,
            text: 'git config --global color.ui auto'
          }
        }
      ]
    },
    {
      title: 'Setup & Initiation',
      contents: [
        {
          title: 'initialize an existing directory as a Git repository',
          description: { type: DescriptionType.Code, text: 'git init' }
        },
        {
          title: 'retrieve an entire repository from a hosted location via URL',
          description: { type: DescriptionType.Code, text: 'git clone [url]' }
        }
      ]
    },
    {
      title: 'Stage & Snapshot',
      contents: [
        {
          title:
            'show modified files in working directory, staged for your next commit',
          description: { type: DescriptionType.Code, text: 'git status' }
        },
        {
          title: 'add a file as it looks now to your next commit (stage)',
          description: { type: DescriptionType.Code, text: 'git add [file]' }
        },
        {
          title:
            'unstage a file while retaining the changes in working directory',
          description: { type: DescriptionType.Code, text: 'git reset [file]' }
        },
        {
          title: 'diff of what is changed but not staged',
          description: { type: DescriptionType.Code, text: 'git diff' }
        },
        {
          title: 'diff of what is staged but not yet commited',
          description: {
            type: DescriptionType.Code,
            text: 'git diff --staged'
          }
        },
        {
          title: 'commit your staged content as a new commit snapshot',
          description: {
            type: DescriptionType.Code,
            text: 'git commit -m “[descriptive message]”'
          }
        }
      ]
    },
    {
      title: 'Branch & Merge',
      contents: [
        {
          description: { type: DescriptionType.Code, text: 'git branch' },
          title:
            'list your branches. a * will appear next to the currently active branch'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git branch [branch-name]'
          },
          title: 'create a new branch at the current commit'
        },
        {
          description: { type: DescriptionType.Code, text: 'git checkout' },
          title:
            'switch to another branch and check it out into your working directory'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git merge [branch]'
          },
          title: 'merge the specified branch’s history into the current one'
        },
        {
          description: { type: DescriptionType.Code, text: 'git log' },
          title: 'show all commits in the current branch’s history'
        }
      ]
    },
    {
      title: 'Inspect & Compare',
      contents: [
        {
          description: { type: DescriptionType.Code, text: 'git log' },
          title: 'show the commit history for the currently active branch'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git log branchB..branchA'
          },
          title: 'show the commits on branchA that are not on branchB'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git log --follow [file]'
          },
          title: 'show the commits that changed file, even across renames'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git diff branchB...branchA'
          },
          title: 'show the diff of what is in branchA that is not in branchB'
        },
        {
          description: { type: DescriptionType.Code, text: 'git show [SHA]' },
          title: 'show any object in Git in human-readable format'
        }
      ]
    },
    {
      title: 'Tracking Path Changes',
      contents: [
        {
          description: { type: DescriptionType.Code, text: 'git rm [file]' },
          title: 'delete the file from project and stage the removal for commit'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git mv [existing-path] [new-path]'
          },
          title: 'change an existing file path and stage the move'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git log --stat -M'
          },
          title: 'show all commit logs with indication of any paths that moved'
        }
      ]
    },
    {
      title: 'Share & Update',
      contents: [
        {
          description: {
            type: DescriptionType.Code,
            text: 'git remote add [alias] [url]'
          },
          title: 'add a git URL as an alias'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git fetch [alias]'
          },
          title: 'fetch down all the branches from that Git remote'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git merge [alias]/[branch]'
          },
          title:
            'merge a remote branch into your current branch to bring it up to date'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git push [alias] [branch]'
          },
          title: 'Transmit local branch commits to the remote repository branch'
        },
        {
          description: { type: DescriptionType.Code, text: 'git pull' },
          title: 'fetch and merge any commits from the tracking remote branch'
        }
      ]
    },
    {
      title: 'Rewrite History',
      contents: [
        {
          description: {
            type: DescriptionType.Code,
            text: 'git rebase [branch]'
          },
          title: 'apply any commits of current branch ahead of specified one'
        },
        {
          description: {
            type: DescriptionType.Code,
            text: 'git reset --hard [commit]'
          },
          title:
            'clear staging area, rewrite working tree from specified commit'
        }
      ]
    },
    {
      title: 'Temporary Commits',
      contents: [
        {
          description: { type: DescriptionType.Code, text: 'git stash' },
          title: 'Save modified and staged changes'
        },
        {
          description: { type: DescriptionType.Code, text: 'git stash list' },
          title: 'list stack-order of stashed file changes'
        },
        {
          description: { type: DescriptionType.Code, text: 'git stash pop' },
          title: 'write working from top of stash stack'
        },
        {
          description: { type: DescriptionType.Code, text: 'git stash drop' },
          title: 'discard the changes from top of stash stack'
        }
      ]
    }
  ]
}
