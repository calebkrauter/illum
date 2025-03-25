#!/usr/bin/env bash

deps=$(npx --yes depcheck --json | jq -r '.dependencies[], .devDependencies[]')

if [ -z "$deps" ]; then
	echo '✅ No unused dependencies found'
else
	echo '🧹 Unused dependencies:'
	echo "$deps"

	echo -n 'Remove these? (y/N) '
	read confirm
	if [[ "$confirm" =~ ^[Yy]$ ]]; then
		count=$(echo "$deps" | wc -l)
		echo "$deps" | xargs npm uninstall
		echo "✅ Uninstalled $count package(s)"
	else
		echo '❌ Skipped'
	fi
fi
