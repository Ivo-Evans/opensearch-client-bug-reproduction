This is a reproduction of a bug in the OpenSearch NodeJS client. The `cat.aliases` method is typed as returning an array of `AliasesRecord`s, but actually returns a string. 

To run this reproduction, run `docker compose up` in one terminal and `npm i && npm run start` in another. 