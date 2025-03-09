#!/bin/bash

source ./scripts/functions.sh

kill_pid_on_port $1

unset YARN_PID
yarn start &
YARN_PID=$!

wait_on_port $1

yarn cypress run

kill_pid_on_port $1
kill $YARN_PID
unset YARN_PID
