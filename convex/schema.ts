import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  incidents: defineTable({
    title: v.string(),
    description: v.string(),
    severity: v.union(v.literal("Low"), v.literal("Medium"), v.literal("High")),
    reportedDate: v.string(),
  }),
});
