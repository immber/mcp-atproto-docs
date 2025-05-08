import { z } from "zod";
import type { atprotoDocsMCP } from '../index';



/**
 * Registers the docs search tool with the MCP server
 * @param agent The MCP server instance
 */

export function registerDocsTools(agent: atprotoDocsMCP) {
    agent.server.tool(
        "search_documentation",
        `Search the documentation for the given query.
        
        This tool can be used to answer questions about documentation. Results are limited and returned as semantically similar chunks to the query.`,
        { query: z.string() },
        async ({ query }) => {
			const results = await agent.env.AI.autorag("atproto-docs-rag").aiSearch({
				query: query,
			})
            return {
                content: [{ type: 'text', text:  results.response }],
            };
        }
    )
}