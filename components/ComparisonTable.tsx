import { Check, Minus } from "lucide-react";

interface ComparisonRow {
  feature: string;
  awareness: boolean | string;
  compliance: boolean | string;
  sustainable: boolean | string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return (
      <span className="text-sm font-semibold text-navy">{value}</span>
    );
  }
  if (value) {
    return <Check size={18} className="text-primary mx-auto" />;
  }
  return <Minus size={18} className="text-gray-300 mx-auto" />;
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full border-collapse min-w-[540px]">
        <thead>
          <tr className="bg-navy text-white">
            <th className="text-left py-4 px-5 text-sm font-semibold">
              Feature
            </th>
            <th className="text-center py-4 px-5 text-sm font-semibold">
              Awareness
            </th>
            <th className="text-center py-4 px-5 text-sm font-semibold">
              Compliance
            </th>
            <th className="text-center py-4 px-5 text-sm font-semibold">
              Sustainable
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={`${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-t border-gray-100`}
            >
              <td className="py-3.5 px-5 text-sm text-gray-700 font-medium">
                {row.feature}
              </td>
              <td className="py-3.5 px-5 text-center">
                <CellValue value={row.awareness} />
              </td>
              <td className="py-3.5 px-5 text-center">
                <CellValue value={row.compliance} />
              </td>
              <td className="py-3.5 px-5 text-center">
                <CellValue value={row.sustainable} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
