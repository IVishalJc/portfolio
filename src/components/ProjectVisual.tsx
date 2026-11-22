"use client";

import { motion } from "framer-motion";
import type { Accent, ProjectVisualKind } from "@/data/resume";

const ACCENT = {
  cyan: "#00e5ff",
  magenta: "#ff2bd6",
  lime: "#c8ff00",
  violet: "#9b5cff",
} as const;

/* ---------- RetailPilot: shelf scan ---------- */

const SHELF_ROWS = [
  [1, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 1],
];

function ShelfVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full">
      {SHELF_ROWS.map((row, r) => {
        const y = 22 + r * 40;
        return (
          <g key={r}>
            <line
              x1="12"
              y1={y + 26}
              x2="188"
              y2={y + 26}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
            />
            {row.map((filled, c) => {
              const x = 16 + c * 29;
              if (!filled) {
                return (
                  <motion.rect
                    key={c}
                    x={x}
                    y={y}
                    width="22"
                    height="26"
                    rx="2"
                    fill="none"
                    stroke={color}
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                    animate={{ opacity: [0.25, 1, 0.25] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: (r * 6 + c) * 0.12,
                    }}
                  />
                );
              }
              return (
                <rect
                  key={c}
                  x={x}
                  y={y}
                  width="22"
                  height="26"
                  rx="2"
                  fill="rgba(255,255,255,0.08)"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="0.8"
                />
              );
            })}
          </g>
        );
      })}

      <motion.rect
        x="0"
        width="200"
        height="2"
        fill={color}
        opacity="0.8"
        animate={{ y: [0, 138, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ---------- Search: vector space ---------- */

const NODES = [
  [42, 34],
  [78, 20],
  [150, 30],
  [172, 66],
  [36, 72],
  [62, 104],
  [112, 116],
  [158, 104],
  [128, 62],
  [92, 70],
];

function VectorVisual({ color }: { color: string }) {
  const [qx, qy] = [100, 70];

  return (
    <svg viewBox="0 0 200 140" className="h-full w-full">
      {NODES.map(([x, y], i) => (
        <motion.line
          key={`l-${i}`}
          x1={qx}
          y1={qy}
          x2={x}
          y2={y}
          stroke={color}
          strokeWidth="0.7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.5, 0.5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.22,
            times: [0, 0.3, 0.7, 1],
          }}
        />
      ))}

      {NODES.map(([x, y], i) => (
        <motion.circle
          key={`n-${i}`}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 3.4 : 2.2}
          fill={i % 3 === 0 ? color : "rgba(255,255,255,0.45)"}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}

      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`r-${i}`}
          cx={qx}
          cy={qy}
          r="8"
          fill="none"
          stroke={color}
          strokeWidth="0.8"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: [0.4, 4.5], opacity: [0.7, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
          style={{ transformOrigin: `${qx}px ${qy}px` }}
        />
      ))}

      <circle cx={qx} cy={qy} r="5" fill={color} />
    </svg>
  );
}

/* ---------- Ontology Composer: knowledge graph ---------- */

const KG_CENTER = { x: 100, y: 56, w: 40, label: "Product" };

const KG_NODES = [
  { x: 34, y: 20, w: 40, label: "Category", edge: "inCategory" },
  { x: 164, y: 18, w: 32, label: "Brand", edge: "brand" },
  { x: 26, y: 88, w: 30, label: "Store", edge: "soldAt" },
  { x: 172, y: 86, w: 30, label: "Offer", edge: "hasOffer" },
  { x: 100, y: 106, w: 38, label: "Variant", edge: "variant" },
];

const KG_CYCLE = 8;

function GraphNode({
  x,
  y,
  w,
  label,
  color,
  delay,
  filled,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  color: string;
  delay: number;
  filled?: boolean;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 1, 0] }}
      transition={{
        duration: KG_CYCLE,
        repeat: Infinity,
        times: [0, 0.12, 0.5, 0.92, 1],
        delay,
      }}
    >
      <rect
        x={x - w / 2}
        y={y - 7.5}
        width={w}
        height={15}
        rx={7.5}
        fill={filled ? color : "rgba(5,5,10,0.92)"}
        stroke={color}
        strokeWidth="1"
      />
      <text
        x={x}
        y={y + 2.4}
        textAnchor="middle"
        fill={filled ? "#05050a" : "rgba(255,255,255,0.9)"}
        fontSize="6.4"
        fontFamily="monospace"
      >
        {label}
      </text>
    </motion.g>
  );
}

function OntologyVisual({ color }: { color: string }) {
  return (
    <div className="flex h-full w-full flex-col">
      <svg viewBox="0 0 200 120" className="w-full flex-1">
        {/* edges (TBox relationships) */}
        {KG_NODES.map((n, i) => {
          const mx = (KG_CENTER.x + n.x) / 2;
          const my = (KG_CENTER.y + n.y) / 2;
          return (
            <g key={`e-${i}`}>
              <motion.line
                x1={KG_CENTER.x}
                y1={KG_CENTER.y}
                x2={n.x}
                y2={n.y}
                stroke={color}
                strokeWidth="0.9"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 1, 0],
                  opacity: [0, 0.55, 0.55, 0.55, 0],
                }}
                transition={{
                  duration: KG_CYCLE,
                  repeat: Infinity,
                  times: [0, 0.16, 0.5, 0.92, 1],
                  delay: 0.1 + i * 0.1,
                }}
              />
              <motion.text
                x={mx}
                y={my - 2}
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="4.6"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0.8, 0.8, 0] }}
                transition={{
                  duration: KG_CYCLE,
                  repeat: Infinity,
                  times: [0, 0.2, 0.5, 0.92, 1],
                  delay: 0.1 + i * 0.1,
                }}
              >
                {n.edge}
              </motion.text>
            </g>
          );
        })}

        {/* ABox instance dots populating each class */}
        {KG_NODES.map((n, i) =>
          [0, 1, 2].map((j) => (
            <motion.circle
              key={`i-${i}-${j}`}
              cx={n.x - 8 + j * 8}
              cy={n.y + 14}
              r="1.7"
              fill={color}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0], scale: [0, 0, 1, 1, 0] }}
              transition={{
                duration: KG_CYCLE,
                repeat: Infinity,
                times: [0, 0.42, 0.56, 0.92, 1],
                delay: i * 0.08 + j * 0.05,
              }}
            />
          ))
        )}

        {/* class nodes */}
        {KG_NODES.map((n, i) => (
          <GraphNode
            key={n.label}
            {...n}
            color={color}
            delay={0.1 + i * 0.1}
          />
        ))}
        <GraphNode {...KG_CENTER} color={color} delay={0} filled />

        {/* query pulse traversing the graph */}
        {KG_NODES.map((n, i) => (
          <motion.circle
            key={`q-${i}`}
            r="2.6"
            fill="#ffffff"
            initial={{ opacity: 0 }}
            animate={{
              cx: [KG_CENTER.x, n.x],
              cy: [KG_CENTER.y, n.y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: KG_CYCLE,
              repeat: Infinity,
              times: [0.68, 0.84],
              delay: i * 0.06,
            }}
          />
        ))}
      </svg>

      <div className="flex items-center justify-between gap-1 font-mono text-[8px] tracking-wider text-white/35">
        {["SCHEMAS", "TBOX", "ABOX", "KG AGENT"].map((stage, i) => (
          <motion.span
            key={stage}
            animate={{ color: ["rgba(255,255,255,0.3)", color, "rgba(255,255,255,0.3)"] }}
            transition={{
              duration: KG_CYCLE,
              repeat: Infinity,
              times: [0, 0.08, 0.2],
              delay: i * (KG_CYCLE * 0.2),
            }}
          >
            {stage}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Agent Builder: prompt to scaffold ---------- */

const TOOLS = ["search", "sql", "kg", "notify"];
const SCAFFOLD = ["agent.py", "tools/", "evals/", "config.yaml"];
const SCAFFOLD_CYCLE = 7;

function ScaffoldVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full">
      <defs>
        <clipPath id="agent-type-clip">
          <motion.rect
            x="10"
            y="12"
            height="12"
            animate={{ width: [0, 0, 132, 132, 0] }}
            transition={{
              duration: SCAFFOLD_CYCLE,
              repeat: Infinity,
              times: [0, 0.04, 0.3, 0.92, 1],
              ease: "linear",
            }}
          />
        </clipPath>
      </defs>

      <text
        x="10"
        y="8"
        fill="rgba(255,255,255,0.3)"
        fontSize="5"
        fontFamily="monospace"
        letterSpacing="0.6"
      >
        PROMPT
      </text>
      <rect
        x="8"
        y="11"
        width="184"
        height="15"
        rx="3"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="0.8"
      />
      <text
        x="12"
        y="21"
        fill="rgba(255,255,255,0.85)"
        fontSize="6.2"
        fontFamily="monospace"
        clipPath="url(#agent-type-clip)"
      >
        an agent that reconciles stock counts
      </text>
      <motion.rect
        y="14"
        width="1.4"
        height="9"
        fill={color}
        animate={{ x: [12, 12, 144, 144, 12], opacity: [1, 1, 1, 0, 1] }}
        transition={{
          duration: SCAFFOLD_CYCLE,
          repeat: Infinity,
          times: [0, 0.04, 0.3, 0.92, 1],
          ease: "linear",
        }}
      />

      <text
        x="10"
        y="42"
        fill="rgba(255,255,255,0.3)"
        fontSize="5"
        fontFamily="monospace"
        letterSpacing="0.6"
      >
        TOOLS
      </text>
      {TOOLS.map((tool, i) => (
        <motion.g
          key={tool}
          initial={{ opacity: 0.25 }}
          animate={{ opacity: [0.25, 0.25, 1, 1, 0.25] }}
          transition={{
            duration: SCAFFOLD_CYCLE,
            repeat: Infinity,
            times: [0, 0.34, 0.42, 0.92, 1],
            delay: i * 0.08,
          }}
        >
          <rect
            x={9 + i * 46}
            y="46"
            width="42"
            height="14"
            rx="7"
            fill="rgba(255,255,255,0.05)"
            stroke={color}
            strokeWidth="0.9"
          />
          <text
            x={30 + i * 46}
            y="55.5"
            textAnchor="middle"
            fill="rgba(255,255,255,0.85)"
            fontSize="6"
            fontFamily="monospace"
          >
            {tool}
          </text>
        </motion.g>
      ))}

      <text
        x="10"
        y="76"
        fill="rgba(255,255,255,0.3)"
        fontSize="5"
        fontFamily="monospace"
        letterSpacing="0.6"
      >
        GENERATED SCAFFOLD
      </text>
      {SCAFFOLD.map((file, i) => (
        <motion.g
          key={file}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1, 0], x: [-6, -6, 0, 0, -6] }}
          transition={{
            duration: SCAFFOLD_CYCLE,
            repeat: Infinity,
            times: [0, 0.5, 0.62, 0.92, 1],
            delay: i * 0.1,
          }}
        >
          <text
            x="12"
            y={90 + i * 13}
            fill="rgba(255,255,255,0.3)"
            fontSize="6"
            fontFamily="monospace"
          >
            {i === SCAFFOLD.length - 1 ? "└" : "├"}
          </text>
          <rect
            x="21"
            y={84 + i * 13}
            width="110"
            height="9"
            rx="2"
            fill="rgba(255,255,255,0.05)"
          />
          <text
            x="25"
            y={90.5 + i * 13}
            fill={color}
            fontSize="6"
            fontFamily="monospace"
          >
            {file}
          </text>
          <motion.text
            x={140}
            y={90.5 + i * 13}
            fill="rgba(255,255,255,0.45)"
            fontSize="5.4"
            fontFamily="monospace"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{
              duration: SCAFFOLD_CYCLE,
              repeat: Infinity,
              times: [0, 0.56, 0.68, 0.92, 1],
              delay: i * 0.1,
            }}
          >
            created
          </motion.text>
        </motion.g>
      ))}
    </svg>
  );
}

/* ---------- Nexus: five-stage agent pipeline ---------- */

const STAGES = ["INGEST", "CLASSIFY", "ENRICH", "RESOLVE", "AUDIT"];

function PipelineVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full">
      <line
        x1="20"
        y1="62"
        x2="180"
        y2="62"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="1"
      />

      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`p-${i}`}
          cy="62"
          r="3"
          fill={color}
          animate={{ cx: [20, 180], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            delay: i * 1.05,
            ease: "linear",
            times: [0, 0.1, 0.9, 1],
          }}
        />
      ))}

      {STAGES.map((stage, i) => {
        const x = 20 + i * 40;
        return (
          <g key={stage}>
            <motion.circle
              cx={x}
              cy="62"
              r="9"
              fill="rgba(5,5,10,1)"
              stroke={color}
              strokeWidth="1.2"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: i * 0.55,
              }}
            />
            <circle cx={x} cy="62" r="3" fill={color} opacity="0.85" />
            <text
              x={x}
              y="92"
              textAnchor="middle"
              fill="rgba(255,255,255,0.45)"
              fontSize="6.5"
              fontFamily="monospace"
              letterSpacing="0.5"
            >
              {stage}
            </text>
            <text
              x={x}
              y="42"
              textAnchor="middle"
              fill="rgba(255,255,255,0.3)"
              fontSize="6"
              fontFamily="monospace"
            >
              {`0${i + 1}`}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ProjectVisual({
  kind,
  accent,
}: {
  kind: ProjectVisualKind;
  accent: Accent;
}) {
  const color = ACCENT[accent];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative h-full w-full">
        {kind === "shelf" && <ShelfVisual color={color} />}
        {kind === "vector" && <VectorVisual color={color} />}
        {kind === "ontology" && <OntologyVisual color={color} />}
        {kind === "scaffold" && <ScaffoldVisual color={color} />}
        {kind === "pipeline" && <PipelineVisual color={color} />}
      </div>
      <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-40" />
    </div>
  );
}
