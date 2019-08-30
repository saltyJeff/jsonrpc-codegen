# jsonrpc-codegen
Generate Typescript for your JSON RPC specifications along with all necessary handlers

Uses JSON-RPC for standardized API specifications

## Example
Check out the example subdirectory. Inside your `jsonrpc.json` specify which files to include
and the folder holding all the output

Inside [example/echo](example/echo) and [example/helloWorld](example/helloWorld) there are sample JSON files that specify a (very useless) API

The generated source code can be found in [example/src/jsonrpc](example/src/jsonrpc)

The usage of the source code can be found in [example/src/index.ts](example/src/index.ts)

## Usage
`jsonrpc <directory with jsonrpc.json file>`

## Installation
`npm install -g saltyJeff/jsonrpc-codegen`