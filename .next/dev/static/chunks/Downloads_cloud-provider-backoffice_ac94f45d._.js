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
"[project]/Downloads/cloud-provider-backoffice/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/cloud-provider-backoffice/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
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
        infrastructureType: "rented",
        hardwareVendor: "OVH",
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
        infrastructureType: "self-hosted",
        hardwareVendor: "Internal",
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
        infrastructureType: "rented",
        hardwareVendor: "Hetzner",
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
"[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TerminalsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/lib/mock-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/cloud-provider-backoffice/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
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
function TerminalsPage() {
    _s();
    const [searchQuery, setSearchQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const filteredServers = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServers"].filter((server)=>server.hostname.toLowerCase().includes(searchQuery.toLowerCase()) || server.ipAddress.includes(searchQuery) || server.tags.some((tag)=>tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "space-y-6",
        variants: container,
        initial: "hidden",
        animate: "show",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-foreground text-glow flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        className: "h-8 w-8 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, this),
                                    "Terminal Hub"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "Secure command center for all your infrastructure"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full md:w-64",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Search hosts...",
                                    className: "pl-8 bg-secondary/50 border-white/10",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                children: filteredServers.map((server)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: item,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/terminal/${server.id}`,
                            target: "_blank",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "bg-card/40 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 group cursor-pointer relative overflow-hidden h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-5 space-y-4 relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 w-10 rounded-lg flex items-center justify-center transition-colors", server.status === "running" ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive"),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                    lineNumber: 96,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-bold text-foreground group-hover:text-primary transition-colors",
                                                                        children: server.hostname
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                        lineNumber: 99,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 text-xs text-muted-foreground font-mono mt-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                                className: "h-3 w-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                                lineNumber: 101,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            server.ipAddress
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                        lineNumber: 100,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex h-3 w-3",
                                                        children: [
                                                            server.status === "running" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex rounded-full h-3 w-3", server.status === "running" ? "bg-green-500" : "bg-red-500")
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "secondary",
                                                        className: "bg-white/5 border-white/10 text-xs font-normal",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                                className: "h-3 w-3 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 45
                                                            }, this),
                                                            server.os
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "secondary",
                                                        className: "bg-white/5 border-white/10 text-xs font-normal",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "h-3 w-3 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 45
                                                            }, this),
                                                            "Start: ",
                                                            new Date(server.lastBackup).toLocaleDateString(),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-white/5 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                className: "h-3 w-3 text-green-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "SSH Key auth"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium",
                                                        children: [
                                                            "Connect ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                className: "h-3 w-3 ml-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                                lineNumber: 84,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this)
                    }, server.id, false, {
                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            filteredServers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-20 text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "h-10 w-10 mb-4 opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                        lineNumber: 150,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$cloud$2d$provider$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            'No hosts found matching "',
                            searchQuery,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                        lineNumber: 151,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
                lineNumber: 149,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/cloud-provider-backoffice/app/(dashboard)/terminals/page.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_s(TerminalsPage, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");
_c = TerminalsPage;
var _c;
__turbopack_context__.k.register(_c, "TerminalsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_cloud-provider-backoffice_ac94f45d._.js.map