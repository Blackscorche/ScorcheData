"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const topProducts = [
  { id: 1, name: "MTN 10GB Data", sales: 120, revenue: "₦24,000" },
  { id: 2, name: "Glo 5GB Data", sales: 95, revenue: "₦14,250" },
  { id: 3, name: "Airtel 2GB Data", sales: 80, revenue: "₦6,400" },
  { id: 4, name: "9Mobile 1.5GB Data", sales: 60, revenue: "₦5,700" },
];

export function TopSellingProductsTable() {
  return (
    <div className="border rounded-xl bg-transparent p-4 shadow-lg">
      <h2 className="text-lg font-semibold bg-gradient-to-r from-red-500 via-orange-500 to-black text-transparent bg-clip-text mb-3">
        Top Selling Products
      </h2>
      <Table className="text-gray-300">
        <TableCaption>List of top-selling products.</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead>Product</TableHead>
            <TableHead>Sales</TableHead>
            <TableHead className="text-right">Revenue</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topProducts.map((product) => (
            <TableRow
              key={product.id}
              className=" hover:bg-red-100/10 transition"
            >
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.sales}</TableCell>
              <TableCell className="text-right">{product.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total Revenue</TableCell>
            <TableCell className="text-right font-semibold">₦50,350</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
