# Contribute to the Restaurant Application

This document provides information about contributing to the repository, which is part of the Restaurant App.

# Fork and clone the repository

Perform the following steps to create a copy of this repository on your local machine:

1. Fork the RestuarantApp repository:

- Log into GitHub (or create a GitHub account and then log into it).
- Go to the Restaurant App repository.
- Click the **Fork** button at the top of the screen.
- Choose the user for the fork from the options you are given, usually your GitHub ID.
- A copy of this repository is available in your GitHub account.

2. Get the string to use when cloning your fork:

- Clone the forked repository from the shell in a local directory with the `git clone` command, pasting in the URl you saved in the previous step:

```copy
git clone https://github.com/<UserName>/RestuarantApp
or

git clone git@github.com:<UserName>/RestuarantApp.git
```
Where <UserName> is your GitHub username. The RestuarantApp directory is now available in the local directory.

- Remember to sync your fork with the master branch regularly. To do this:

- Go to GitHub and copy the url of the main RestuarantApp repo:
https://github.com/afzal442/RestuarantApp.git
make sure to be in the root folder of the project and the branch should be master branch and type:
```
git remote add upstream https://github.com/afzal442/RestuarantApp.git
``` 
- Now you have your upstream setup in your local machine, whenever you need to make a new branch for making changes make sure your master branch is in sync with the main repository, to do this, make sure to be in the master branch:

```
git pull upstream master
git push origin master
```

# Building the React App locally

- Install the dependencies for your app to support the modules required.
Make sure you have `yarn` installed in your environment.

```
yarn install
```
- Run this app locally

```
yarn start
```

- Enter the following in a browser to view the website:
e.g.
`http://localhost:8000/`

# Submitting new content through a pull request

If you have forked and cloned the repository, you can modify the documentation or add new material by editing the markdown file(s) in the local clone of your fork and then submitting a pull request (PR).

- Create a local branch for your changes. Be sure to base your new branch on the contents of the master branch unless you intend to create a derivative PR:

```copy
git checkout master
git pull
git checkout -b <your-new-branch>
```

- Add and commit your changes. Here, we commit all modified files but you can specify individual files to the git add command. The `git commit -s` command commits the files and signs that you are contributing this intellectual property to this project.

```
git add .
git commit -s
```

- Push your branch to github:

```
git push --set-upstream origin <branch-name>
```

- Check that the title of the PR is correct; click the "Edit" button to modify it. Add "WIP" (Work in Progress) or "Draft" to the title if the PR is not yet ready for general review.

