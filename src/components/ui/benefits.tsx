import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
const tiers = [
  {
    tier: "Monthly volume requirement",
    tier1: "10M–49M	",
    tier2: "50M–249M	",
    tier3: "250M–499M",
    tier4: "250M–499M",
    tier5: "250M–499M",
  },
  {
    tier: "Rebate per million traded",
    tier1: "5.00",
    tier2: "7.00",
    tier3: "10.00",
    tier4: "15.00",
    tier5: "17.00",
  },
  {
    tier: "Average savings",
    tier1: "10%",
    tier2: "14%",
    tier3: "20%",
    tier4: "30%",
    tier5: "34%",
  },
  {
    tier: "Dedicated relationship manager",
    tier1: "✓",
    tier2: "✓",
    tier3: "✓",
    tier4: "✓",
    tier5: "✓",
  },
  {
    tier: "Premium account services	",
    tier1: "",
    tier2: "",
    tier3: "",
    tier4: "",
    tier5: "",
  },
  {
    tier: "Priority service line",
    tier1: "✓",
    tier2: "✓",
    tier3: "✓",
    tier4: "✓",
    tier5: "✓",
  },
  {
    tier: "Free VPS",
    tier1: "✓",
    tier2: "✓",
    tier3: "✓",
    tier4: "✓",
    tier5: "✓",
  },
  {
    tier: "Free wire transfers",
    tier1: "✓",
    tier2: "✓",
    tier3: "✓",
    tier4: "✓",
    tier5: "✓",
  },
  {
    tier: "Monthly TradingView subscription reimbursement",
    tier1: "Essential",
    tier2: "Plus",
    tier3: "Plus",
    tier4: "Premium",
    tier5: "Premium",
  },
  {
    tier: "OANDA MT4 Pro Orderbook",
    tier1: "",
    tier2: "",
    tier3: "",
    tier4: "",
    tier5: "",
  },
  {
    tier: "Open orders",
    tier1: "Premium Order Book",
    tier2: "Premium Order Book",
    tier3: "Premium Order Book",
    tier4: "Premium Order Book",
    tier5: "Premium Order Book",
  },
  {
    tier: "Monthly",
    tier1: "Premium Order Book",
    tier2: "Premium Order Book",
    tier3: "Premium Order Book",
    tier4: "Premium Order Book",
    tier5: "Premium Order Book",
  },

  {
    tier: "Updates every 5 minutes (standard OB updates every 20)",
    tier1: "Premium Order Book",
    tier2: "Premium Order Book",
    tier3: "Premium Order Book",
    tier4: "Premium Order Book",
    tier5: "Premium Order Book",
  },

  {
    tier: "API support",
    tier1: "✓",
    tier2: "✓",
    tier3: "✓",
    tier4: "✓",
    tier5: "✓",
  },
  {
    tier: "API support",
    tier1: "✓",
    tier2: "✓",
    tier3: "✓",
    tier4: "✓",
    tier5: "✓",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead className="text-xl font-bold">Tier 1 (US$)</TableHead>
          <TableHead className="text-xl font-bold">Tier 2 (US$)</TableHead>
          <TableHead className="text-xl font-bold">Tier 3 (US$)</TableHead>
          <TableHead className="text-xl font-bold">Tier 4 (US$)</TableHead>
          <TableHead className="text-xl font-bold">Tier 5 (US$)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tiers.map((tier) => (
          <TableRow key={tier.tier}>
            <TableCell className="font-medium">{tier.tier}</TableCell>
            <TableCell className="font-semibold">{tier.tier1}</TableCell>
            <TableCell>{tier.tier2}</TableCell>
            <TableCell>{tier.tier3}</TableCell>
            <TableCell>{tier.tier4}</TableCell>
            <TableCell className="text-right">{tier.tier5}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
