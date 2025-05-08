# A Remote MCP Server for ATproto Docs 
## Deployed to Cloudflare (Without Auth)

This remote MCP server publishes a `tool` for searching and querying the documentation for ATprotocol.

Created with love, to make it easier for developers building on the protocol. 

<a href="https://glama.ai/mcp/servers/@immber/mcp-atproto-docs">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@immber/mcp-atproto-docs/badge" alt="ATproto Docs Server MCP server" />
</a>

## Based on: 

Originally based on the [remote MCP authless server template](https://github.com/cloudflare/ai/tree/main/demos/remote-mcp-authless) CloudFlare provides. 

This remote MCP server is publicly available at: 
```
https://mcp-atproto-docs.immber.workers.dev/sse
```

It queries a CloudFlare AutoRAG instance that is fed with ATprocol's public documentation. 


## Connect to Cloudflare AI Playground

You can connect to this MCP server from the Cloudflare AI Playground, which is a remote MCP client:

1. Go to https://playground.ai.cloudflare.com/
2. Enter your deployed MCP server URL ( `https://mcp-atproto-docs.immber.workers.dev/sse`)
3. You can now use this MCP tool directly from the playground!

## Connect Claude Desktop to your MCP server

To connect to your MCP server from Claude Desktop, follow [Anthropic's Quickstart](https://modelcontextprotocol.io/quickstart/user) and within Claude Desktop go to Settings > Developer > Edit Config.

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