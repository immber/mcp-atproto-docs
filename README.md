# A Remote MCP Server for ATproto Docs 
<a href="https://glama.ai/mcp/servers/@immber/mcp-atproto-docs">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@immber/mcp-atproto-docs/badge" alt="ATproto Docs Server MCP server" />
</a>
<a href="https://smithery.ai/server/@immber/mcp-atproto-docs"><img alt="Smithery Badge" src="https://smithery.ai/badge/@immber/mcp-atproto-docs"></a>


## Deployed to Cloudflare 


This remote MCP server publishes a `tool` for searching and querying the documentation for ATprotocol.

| Tool                   | Description             |
|------------------------|-------------------------|
| `search_documentation` | Searches the atproto docs |


Created with love 💙, to make life easier for developers building on the protocol. 

This remote MCP server is publicly available at: 
```
https://mcp-atproto-docs.immber.workers.dev/sse
```

## Depends on

Created using the [remote MCP authless server template](https://github.com/cloudflare/ai/tree/main/demos/remote-mcp-authless) CloudFlare provides. 

This MCP server queries a CloudFlare AutoRAG instance that is fed by a Cloudflare worker with ATprocol's public documentation. 
* cron worker `=>`  R2 storage bucket `=>`  AutoRAG  Vectorize DB
  

This project was originally inspired by [Cloudflare's Documentation MCP Server](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/docs-vectorize). 


## Sources

[atproto-docs-worker](https://github.com/immber/atproto-docs-worker) is a cloudflare worker that crawls and saves documentation to an R2 bucket. It runs on a weekly cron schedule. 

To view or request changes to the list of resources currently being included, please visit that repo.  

## Using the tool
Connect with any MCP compatible client. Then ask your AI agent of choice to use the `search_documentation` tool. 

### Connect to Cloudflare AI Playground

You can connect to this MCP server from the Cloudflare AI Playground, which is a remote MCP client:

1. Go to https://playground.ai.cloudflare.com/
2. Enter your deployed MCP server URL ( `https://mcp-atproto-docs.immber.workers.dev/sse`)
3. You can now use this MCP tool directly from the playground!

### Connect Claude Desktop to your MCP server

To connect to this MCP server from Claude Desktop, follow [Anthropic's Quickstart](https://modelcontextprotocol.io/quickstart/user) and within Claude Desktop go to Settings > Developer > Edit Config.

Update with this configuration:

```json
{
  "mcpServers": {
    "search_atproto_docs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp-atproto-docs.immber.workers.dev/sse"
      ]
    }
  }
}
```


Restart Claude and you should see the tools become available. 

### Sample Queries
![screenshot from claude desktop showing the results of a query about oauth](https://github.com/immber/mcp-atproto-docs/blob/b602d5b7a3c9609a2ff23e9c4572c34d30b50d99/Screenshot-oauth.png)
