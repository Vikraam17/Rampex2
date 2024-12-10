import React from 'react';

const Git = () => {
  return (
    <div className='containerGit'>
      <h1 className='headerGit'>Git Commands and Descriptions</h1>
      <ul>
        <li><strong>git init</strong>: Initializes a new Git repository in the current directory.</li>
        <li><strong>git clone [URL]</strong>: Clones a repository from a remote source (e.g., GitHub) to your local machine.</li>
        <li><strong>git add [file]</strong>: Adds a file or files to the staging area.</li>
        <li><strong>git add .</strong>: Adds all changes in the current directory to the staging area.</li>
        <li><strong>git status</strong>: Shows the status of changes (staged, unstaged, and untracked files).</li>
        <li><strong>git commit -m "[message]"</strong>: Commits staged changes with a descriptive message.</li>
        <li><strong>git push [remote] [branch]</strong>: Pushes local changes to a remote repository branch.</li>
        <li><strong>git pull [remote] [branch]</strong>: Fetches and merges changes from a remote repository branch.</li>
        <li><strong>git branch</strong>: Lists all branches in the repository.</li>
        <li><strong>git branch [branch-name]</strong>: Creates a new branch.</li>
        <li><strong>git checkout [branch-name]</strong>: Switches to the specified branch.</li>
        <li><strong>git checkout -b [branch-name]</strong>: Creates and switches to a new branch.</li>
        <li><strong>git merge [branch-name]</strong>: Merges the specified branch into the current branch.</li>
        <li><strong>git fetch</strong>: Downloads changes from a remote repository without merging them into your current branch.</li>
        <li><strong>git rebase [branch-name]</strong>: Re-applies commits from one branch onto another, creating a linear commit history.</li>
        <li><strong>git log</strong>: Displays the commit history for the repository.</li>
        <li><strong>git diff</strong>: Shows changes between the working directory and the staging area.</li>
        <li><strong>git stash</strong>: Temporarily saves uncommitted changes for later use.</li>
        <li><strong>git stash apply</strong>: Applies stashed changes to the working directory.</li>
        <li><strong>git reset [file]</strong>: Unstages a file, keeping its changes in the working directory.</li>
        <li><strong>git reset --hard</strong>: Resets the working directory and staging area to match the last commit, discarding changes.</li>
        <li><strong>git remote add [name] [URL]</strong>: Adds a new remote repository.</li>
        <li><strong>git remote -v</strong>: Displays the remote repositories for the project.</li>
        <li><strong>git rm [file]</strong>: Removes a file from the working directory and the staging area.</li>
        <li><strong>git tag [tag-name]</strong>: Creates a new tag for the current commit.</li>
        <li><strong>git cherry-pick [commit-hash]</strong>: Applies a specific commit to the current branch.</li>
        <li><strong>git revert [commit-hash]</strong>: Reverses the changes of a specific commit, creating a new commit.</li>
        <li><strong>git blame [file]</strong>: Shows who made each change in a file, line by line.</li>
        <li><strong>git archive</strong>: Creates a compressed archive of a repository's contents.</li>
      </ul>
    </div>
  );
};

export default Git;