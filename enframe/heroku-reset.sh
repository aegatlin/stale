#! /usr/bin/env bash

pushd enframe-test-app
heroku apps:destroy enframe-test-app-todo-staging --confirm enframe-test-app-todo-staging
heroku apps:destroy enframe-test-app-todo-prod --confirm enframe-test-app-todo-prod
popd
