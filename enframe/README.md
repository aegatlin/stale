# Enframe

You focus on `src/`, enframe will take care of the rest.

## Script Principles

1. Idempotent
1. Quick (re)execution

## Todos until v1

1. Fix "attempt to cache non-get-requests" workbox.
1. Workbox background sync for offline todo manipulation.
1. AdSense

## Difficult/Impossible Future Features

1. Automated deployment or cicd to app stores (gPlay, iOS, Windows, etc.).
1. Automated adding of the heroku DNS to google domains.
1. Automated domain registration via google domains.

## Dev Notes

- This script currently runs after compiling to js (from ts). This can make bugs hard to find. To run the ts code, do the following:

  ```bash
  cd enframe-test-app
  yarn ts-node ../srcbin/enframe.ts
  ```

- To update the "first commit" of the enframe test app (e.g., to add a new config var to `enframe.json`), do the following:

  ```bash
  yarn git-reset
  [add the new code]
  git add .
  git commit --amend --no-edit
  git tag -d v1
  git tag v1
  git push -f --tags
  git push -f --tags hub master
  ```

## Before enframing

- Ensure you have stored your Gitlab SSH key on your dev machine.
- Ensure you have the Heroku CLI on your dev machine.
- Ensure you have your `HEROKU_API_KEY` stored in Gitlab.
  - You can find your Heroku API key on your Heroku User Settings page online.
  - Copy your Heroku API key into Gitlab in `Settings -> CICD -> Variables`.
  - The deploy step of the gitlab pipeline will fail until you set this key.

## Usage

### From Scratch

1. Create a directory.

   ```bash
   mkdir new-app
   cd new-app
   ```

1. Add an `enframe.json` file.

   ```json
   {
     "appName": "new-app",
     "gitlabRemoteSSH": "git@gitlab.com:username/new-app.git"
   }
   ```

1. Add and execute enframe.

   ```bash
   yarn add --dev enframe
   yarn enframe
   ```

1. Set up your local environment variable `process.env.DATABASE_URL`. I use `direnv` for env var management. For example,

   ```bash
   echo 'export DATABASE_URL=postgres://user:password@localhost:5432/dbname' >> .envrc
   ```

   The Heroku `process.env.DATABASE_URL` env var will be automatically initialized when the postgres addon is attached to the app. So, on the cloud, it "just works".

### To Maintain

```bash
yarn upgrade enframe
yarn enframe
```

A useful aspect of enframe is the ability to no longer worry about application infrastructure. It will take care of it for you while you simply focus of `src/`.

## Notes

- The Gitlab repository does not need to exist before you set it as an upstream. If the repository does not already exist, Gitlab will create the project for you on first push.

- The app name you choose will need to be unique on Heroku. For example, the above app name, `new-app`, will try to create two new application on Heroku, `new-app-staging` and `new-app-prod`. If those heroku app names are taken, you will not be able to make them.

- Left untouched is .envrc from direnv. This holds the local DATABASE_URL for psql connections. You do not need to use direnv, but you will need to somehow supply the node `process.env.DATABASE_URL` with the correct value for local development to work appropriately.

## Credits / Shoutouts

- [Open source Feather Icons](https://feathericons.com/)
- [Favicon.io](https://favicon.io/favicon-converter/)
