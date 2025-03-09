# Tractatus

The goal of this project is to make Ludwig Wittgenstein's Tractatus Logico-Philosophicus easier to read.

This project is open source. Feedback, comment, and contributions are welcome.

## Locations

The [production](https://tractatus.online) application is hosted on Heroku.

The [live staging](https://tractatus.gatlin.io) application is also hosted on Heroku. However, it is on a free dyno, so it might be sleeping when you visit, i.e., you will have to wait for ~20 seconds before it loads the first time / awakens.

The [backlog](https://www.pivotaltracker.com/projects/2334697) is public on Pivotal Tracker.

## Local set up

1. Global install [yarn](https://yarnpkg.com/). (I reference `yarn` in the `package.json` scripts at the moment, so for the moment you cannot use `npm`.)
1. Clone this repository
1. Run `cd tractatus`
1. Run `yarn`
1. Run `yarn start`. This will start the backend and serve up the frontend on port `:3000` by default.

### Troubleshooting

If cypress is failing to run, you might not have all the required dependencies that Cypress needs on your local machine. See [here](https://docs.cypress.io/guides/guides/continuous-integration.html#Advanced-setup). On Ubuntu 19.04, I had to run `apt install libgconf-2-4` to get `yarn itest` to work.

## Testing

To run the full test suite once, run `yarn test`. This will run the unit tests (`yarn utest`) and then the integration tests (`yarn itest`).

A live testing setup can be achieved as follows:

1. Run `yarn watch`. This will start the server locally, and restart it continuously on code change.
1. Run `yarn uwatch`. This will run the unit tests (`yarn utest`) and rerun them continuously on code change.
1. Run `yarn cy`. This will open the [cypress](https://cypress.io) GUI and allow you to run the integration test suite. The integration test suite reruns continuously on changes to the cypress spec files. Changes elsewhere, you have to rerurn manually, i.e., `ctrl r` to refresh the cypress GUI.

## Notes

* This source code is not currently capable of working on Windows. It references shell scripts in the `package.json` scripts.
* There is currently no database set up.
* The deployment to production requires manual intervention. That is, the CICD pipeline stops after staging is smoke tested.
