import { ActionConfig } from "../../types";

export const ACTIONS: ActionConfig[] = [
    {
        id: "trust_cat",
        name: "Trust the Cat",
        description: "You decide to believe what it's telling you.",
        category: "strange",
        costs: [],
        effects: [{ type: 'modify_max_resource_flat', resourceId: 'insight', amount: 10 }],
        prerequisites: [{ resourceId: 'lore', minAmount: 5 }],
        maxExecutions: 1,
        exclusiveWith: ["reject_cat", "exploit_cat"]
    },
    {
        id: "reject_cat",
        name: "Reject the Cat",
        description: "You decide to reject what it's telling you.",
        category: "strange",
        costs: [],
        effects: [{ type: 'modify_max_resource_flat', resourceId: 'insight', amount: 10 }],
        prerequisites: [{ resourceId: 'lore', minAmount: 5 }],
        maxExecutions: 1,
        exclusiveWith: ["trust_cat", "exploit_cat"]
    },
    {
        id: "exploit_cat",
        name: "Exploit the Cat",
        description: "You decide to exploit what it's telling you.",
        category: "strange",
        costs: [],
        effects: [{ type: 'modify_max_resource_flat', resourceId: 'insight', amount: 10 }],
        prerequisites: [{ resourceId: 'lore', minAmount: 5 }],
        maxExecutions: 1,
        exclusiveWith: ["trust_cat", "reject_cat"]
    }
]