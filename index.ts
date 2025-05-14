import { Client } from "@opensearch-project/opensearch";

const client = new Client({
  node: "http://127.0.0.1:9200",
});

const main = async () => {
  const aliasName = "foo";
  const givenNoAliases = await client.cat.aliases({ name: aliasName });
  console.log(typeof givenNoAliases.body, givenNoAliases.body);

  const index = "bar";
  await client.index({
    index,
    body: {
      hello: "world",
    },
  });

  await client.indices.putAlias({ name: aliasName, index });

  const givenAliases = await client.cat.aliases({ name: aliasName });
  console.log(typeof givenAliases.body, givenAliases.body);
};

main()