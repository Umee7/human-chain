import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => await ctx.db.query("incidents").collect(),
});

export const add = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    severity: v.union(v.literal("Low"), v.literal("Medium"), v.literal("High")),
    reportedDate: v.string(),
  },
  handler: async (ctx, args) => await ctx.db.insert("incidents", args),
});

export const remove = mutation({
  args: { id: v.id("incidents") },
  handler: async (ctx, args) => await ctx.db.delete(args.id),
});