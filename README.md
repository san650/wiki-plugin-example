# wiki-plugin-example

Client side plugin tutorial for [FedWiki](https://github.com/fedwiki/wiki).

## Plugin structure

```
.
├── client
│   └── example.js
├── factory.json
└── package.json
```

### Factory file

General metadata about the plugin and category to be placed in.

`factory.json`

```json
{
  "title": "Example",
  "name": "Example",
  "category": "format"
}
```

## License

wiki-plugin-example is licensed under the MIT license.

See [LICENSE](./LICENSE) for the full license text.
