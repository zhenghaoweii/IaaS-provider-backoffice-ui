(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/cloud-provider-backoffice/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/cloud-provider-backoffice/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/cloud-provider-backoffice/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/cloud-provider-backoffice/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/cloud-provider-backoffice/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/cloud-provider-backoffice/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/cloud-provider-backoffice/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/cloud-provider-backoffice/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/cloud-provider-backoffice/lib/mock-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockClusters",
    ()=>mockClusters,
    "mockDatacenters",
    ()=>mockDatacenters,
    "mockMaintenanceLogs",
    ()=>mockMaintenanceLogs,
    "mockNodes",
    ()=>mockNodes,
    "mockServers",
    ()=>mockServers
]);
const mockDatacenters = [
    {
        id: "dc1",
        name: "DC-US-EAST-1",
        provider: "proxmox",
        location: "Virginia, USA",
        apiEndpoint: "https://proxmox-us-east.example.com:8006",
        status: "active",
        infrastructureType: "cloud",
        managementType: "managed",
        createdAt: "2024-01-15T10:00:00Z",
        updatedAt: "2024-01-15T10:00:00Z"
    },
    {
        id: "dc2",
        name: "DC-EU-WEST-1",
        provider: "proxmox",
        location: "Frankfurt, Germany",
        apiEndpoint: "https://proxmox-eu-west.example.com:8006",
        status: "active",
        infrastructureType: "baremetal",
        managementType: "manual",
        createdAt: "2024-02-01T10:00:00Z",
        updatedAt: "2024-02-01T10:00:00Z"
    },
    {
        id: "dc3",
        name: "DC-ASIA-1",
        provider: "proxmox",
        location: "Singapore",
        apiEndpoint: "https://proxmox-asia.example.com:8006",
        status: "maintenance",
        infrastructureType: "baremetal",
        managementType: "managed",
        createdAt: "2024-03-10T10:00:00Z",
        updatedAt: "2024-03-10T10:00:00Z"
    }
];
const mockClusters = [
    {
        id: "cl1",
        name: "US-EAST-HA-CLUSTER",
        datacenterId: "dc1",
        datacenterName: "DC-US-EAST-1",
        type: "ha",
        status: "healthy",
        nodeCount: 2,
        quorum: true,
        createdAt: "2024-01-15T10:00:00Z",
        updatedAt: "2024-12-09T10:00:00Z"
    },
    {
        id: "cl2",
        name: "EU-WEST-CEPH-CLUSTER",
        datacenterId: "dc2",
        datacenterName: "DC-EU-WEST-1",
        type: "ceph",
        status: "healthy",
        nodeCount: 3,
        quorum: true,
        createdAt: "2024-02-01T10:00:00Z",
        updatedAt: "2024-12-09T10:00:00Z"
    }
];
const mockNodes = [
    {
        id: "n1",
        datacenterId: "dc1",
        datacenterName: "DC-US-EAST-1",
        name: "pve-us-01",
        hostname: "pve-us-01.internal",
        ipAddress: "10.0.0.10",
        status: "online",
        cpuCores: 64,
        cpuUsagePercent: 45.2,
        ramGb: 256,
        ramUsageGb: 128.5,
        diskGb: 4000,
        diskUsageGb: 1850.3,
        proxmoxNodeName: "pve-us-01",
        clusterId: "cl1",
        clusterName: "US-EAST-HA-CLUSTER",
        isClusterMaster: true,
        createdAt: "2024-01-15T10:00:00Z",
        updatedAt: "2024-12-09T10:00:00Z"
    },
    {
        id: "n2",
        datacenterId: "dc1",
        datacenterName: "DC-US-EAST-1",
        name: "pve-us-02",
        hostname: "pve-us-02.internal",
        ipAddress: "10.0.0.11",
        status: "online",
        cpuCores: 64,
        cpuUsagePercent: 62.8,
        ramGb: 256,
        ramUsageGb: 198.2,
        diskGb: 4000,
        diskUsageGb: 2340.7,
        proxmoxNodeName: "pve-us-02",
        clusterId: "cl1",
        clusterName: "US-EAST-HA-CLUSTER",
        isClusterMaster: false,
        createdAt: "2024-01-16T10:00:00Z",
        updatedAt: "2024-12-09T10:00:00Z"
    },
    {
        id: "n3",
        datacenterId: "dc2",
        datacenterName: "DC-EU-WEST-1",
        name: "pve-eu-01",
        hostname: "pve-eu-01.internal",
        ipAddress: "10.1.0.10",
        status: "online",
        cpuCores: 48,
        cpuUsagePercent: 38.5,
        ramGb: 192,
        ramUsageGb: 76.8,
        diskGb: 3000,
        diskUsageGb: 1200.5,
        proxmoxNodeName: "pve-eu-01",
        clusterId: "cl2",
        clusterName: "EU-WEST-CEPH-CLUSTER",
        isClusterMaster: true,
        createdAt: "2024-02-01T10:00:00Z",
        updatedAt: "2024-12-09T10:00:00Z"
    },
    {
        id: "n5",
        datacenterId: "dc2",
        datacenterName: "DC-EU-WEST-1",
        name: "pve-eu-02",
        hostname: "pve-eu-02.internal",
        ipAddress: "10.1.0.11",
        status: "online",
        cpuCores: 48,
        cpuUsagePercent: 52.3,
        ramGb: 192,
        ramUsageGb: 145.6,
        diskGb: 3000,
        diskUsageGb: 1890.2,
        proxmoxNodeName: "pve-eu-02",
        clusterId: "cl2",
        clusterName: "EU-WEST-CEPH-CLUSTER",
        isClusterMaster: false,
        createdAt: "2024-02-02T10:00:00Z",
        updatedAt: "2024-12-09T10:00:00Z"
    },
    {
        id: "n6",
        datacenterId: "dc2",
        datacenterName: "DC-EU-WEST-1",
        name: "pve-eu-03",
        hostname: "pve-eu-03.internal",
        ipAddress: "10.1.0.12",
        status: "online",
        cpuCores: 48,
        cpuUsagePercent: 41.8,
        ramGb: 192,
        ramUsageGb: 98.4,
        diskGb: 3000,
        diskUsageGb: 1456.7,
        proxmoxNodeName: "pve-eu-03",
        clusterId: "cl2",
        clusterName: "EU-WEST-CEPH-CLUSTER",
        isClusterMaster: false,
        createdAt: "2024-02-03T10:00:00Z",
        updatedAt: "2024-12-09T10:00:00Z"
    },
    {
        id: "n4",
        datacenterId: "dc3",
        datacenterName: "DC-ASIA-1",
        name: "pve-asia-01",
        hostname: "pve-asia-01.internal",
        ipAddress: "10.2.0.10",
        status: "maintenance",
        cpuCores: 48,
        cpuUsagePercent: 0,
        ramGb: 192,
        ramUsageGb: 0,
        diskGb: 3000,
        diskUsageGb: 890.2,
        proxmoxNodeName: "pve-asia-01",
        createdAt: "2024-03-10T10:00:00Z",
        updatedAt: "2024-12-09T10:00:00Z"
    }
];
const mockServers = [
    {
        id: "vm1",
        nodeId: "n1",
        nodeName: "pve-us-01",
        hostname: "web-prod-01",
        ipAddress: "10.0.1.10",
        status: "running",
        cpuCores: 8,
        ramGb: 32,
        diskGb: 500,
        os: "Ubuntu 22.04",
        proxmoxVmid: 101,
        isMaintenance: false,
        tags: [
            "web",
            "production",
            "public"
        ],
        lastBackup: "2024-12-14T02:00:00Z",
        createdAt: "2024-01-20T10:00:00Z",
        updatedAt: "2024-01-20T10:00:00Z"
    },
    {
        id: "vm2",
        nodeId: "n1",
        nodeName: "pve-us-01",
        hostname: "db-prod-01",
        ipAddress: "10.0.1.20",
        status: "running",
        cpuCores: 16,
        ramGb: 64,
        diskGb: 1000,
        os: "Debian 12",
        proxmoxVmid: 102,
        isMaintenance: false,
        tags: [
            "database",
            "production",
            "internal"
        ],
        lastBackup: "2024-12-14T01:00:00Z",
        createdAt: "2024-01-21T10:00:00Z",
        updatedAt: "2024-01-21T10:00:00Z"
    },
    {
        id: "vm3",
        nodeId: "n2",
        nodeName: "pve-us-02",
        hostname: "api-prod-01",
        ipAddress: "10.0.1.30",
        status: "running",
        cpuCores: 12,
        ramGb: 48,
        diskGb: 300,
        os: "Ubuntu 22.04",
        proxmoxVmid: 201,
        isMaintenance: false,
        tags: [
            "api",
            "production"
        ],
        lastBackup: "2024-12-14T03:00:00Z",
        createdAt: "2024-01-22T10:00:00Z",
        updatedAt: "2024-01-22T10:00:00Z"
    },
    {
        id: "vm4",
        nodeId: "n3",
        nodeName: "pve-eu-01",
        hostname: "app-prod-01",
        ipAddress: "10.1.1.10",
        status: "running",
        cpuCores: 4,
        ramGb: 16,
        diskGb: 250,
        os: "Ubuntu 22.04",
        proxmoxVmid: 301,
        isMaintenance: false,
        tags: [
            "app",
            "staging"
        ],
        lastBackup: "2024-12-13T12:00:00Z",
        createdAt: "2024-02-05T10:00:00Z",
        updatedAt: "2024-02-05T10:00:00Z"
    },
    {
        id: "vm5",
        nodeId: "n3",
        nodeName: "pve-eu-01",
        hostname: "cache-prod-01",
        ipAddress: "10.1.1.20",
        status: "stopped",
        cpuCores: 4,
        ramGb: 8,
        diskGb: 100,
        os: "Ubuntu 22.04",
        proxmoxVmid: 302,
        isMaintenance: false,
        tags: [
            "cache",
            "staging",
            "redis"
        ],
        lastBackup: "2024-12-12T10:00:00Z",
        createdAt: "2024-02-06T10:00:00Z",
        updatedAt: "2024-02-06T10:00:00Z"
    },
    {
        id: "vm6",
        nodeId: "n2",
        nodeName: "pve-us-02",
        hostname: "backup-prod-01",
        ipAddress: "10.0.1.40",
        status: "maintenance",
        cpuCores: 8,
        ramGb: 32,
        diskGb: 2000,
        os: "Debian 12",
        proxmoxVmid: 202,
        isMaintenance: true,
        tags: [
            "backup",
            "infrastructure"
        ],
        lastBackup: "2024-12-14T00:00:00Z",
        createdAt: "2024-01-25T10:00:00Z",
        updatedAt: "2024-01-25T10:00:00Z"
    }
];
const mockMaintenanceLogs = [
    {
        id: "ml1",
        serverId: "vm6",
        action: "maintenance_start",
        description: "Starting routine disk maintenance",
        performedBy: "admin@example.com",
        performedAt: "2024-12-09T08:00:00Z"
    },
    {
        id: "ml2",
        serverId: "vm2",
        action: "reboot",
        description: "Kernel security update applied",
        performedBy: "admin@example.com",
        performedAt: "2024-12-08T14:30:00Z"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/lib/mock-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/lucide-react/dist/esm/icons/power.js [app-client] (ecmascript) <export default as Power>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
const item = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0
    }
};
function ActivityPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "space-y-6",
        variants: container,
        initial: "hidden",
        animate: "show",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-10",
                variants: item,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-foreground text-glow",
                        children: "Activity Log"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-muted-foreground",
                        children: "Track all maintenance and server operations"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: item,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            className: "relative z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Recent Activities"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "relative z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockMaintenanceLogs"].map((log)=>{
                                    const server = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServers"].find((s)=>s.id === log.serverId);
                                    const icon = getActivityIcon(log.action);
                                    const isMaintenance = log.action.includes("maintenance");
                                    const isReboot = log.action === "reboot";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 border-b border-border/50 pb-4 last:border-0 last:pb-0 hover:bg-secondary/30 p-4 rounded-lg transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex h-10 w-10 items-center justify-center rounded-lg ring-1 transition-all group-hover:scale-110 ${isMaintenance ? "bg-yellow-500/10 ring-yellow-500/20 text-yellow-500" : isReboot ? "bg-destructive/10 ring-destructive/20 text-destructive" : "bg-primary/10 ring-primary/20 text-primary"}`,
                                                children: icon
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-foreground font-mono uppercase text-sm tracking-wide",
                                                                    children: log.action.replace("_", " ")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                                    lineNumber: 61,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground mt-1",
                                                                    children: log.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                                    lineNumber: 62,
                                                                    columnNumber: 27
                                                                }, this),
                                                                server && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-xs text-muted-foreground flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "bg-secondary px-1.5 py-0.5 rounded border border-border",
                                                                            children: "Server"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                                            lineNumber: 65,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-foreground",
                                                                            children: server.hostname
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                                            lineNumber: 66,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-mono text-muted-foreground/70",
                                                                            children: [
                                                                                "(",
                                                                                server.ipAddress,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                                            lineNumber: 67,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 flex items-center gap-2 text-xs text-muted-foreground font-mono uppercase tracking-wider",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: new Date(log.performedAt).toLocaleString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                                lineNumber: 73,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-primary",
                                                                children: log.performedBy
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, log.id, true, {
                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = ActivityPage;
function getActivityIcon(action) {
    switch(action){
        case "maintenance_start":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                lineNumber: 92,
                columnNumber: 14
            }, this);
        case "reboot":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                lineNumber: 94,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/activity/page.tsx",
                lineNumber: 96,
                columnNumber: 14
            }, this);
    }
}
var _c;
__turbopack_context__.k.register(_c, "ActivityPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_cloud-provider-backoffice_f7ddb4e0._.js.map