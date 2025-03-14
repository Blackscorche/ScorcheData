import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Dummy VTU services data
const servicesData = [
  { id: 1, name: "Airtime Recharge", status: "Active" },
  { id: 2, name: "Data Subscription", status: "Active" },
  { id: 3, name: "Electricity Bills", status: "Inactive" },
  { id: 4, name: "Cable TV Subscription", status: "Active" },
];

export default function DashServices() {
  const [services, setServices] = useState(servicesData);

  return (
    <div className=" text-white">
      <h1 className="text-2xl font-bold">VTU Services</h1>

      {/* Service Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Card className="bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
          <CardHeader>
            <CardTitle>Total Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{services.length}</p>
          </CardContent>
        </Card>

        <Card className="bg-red-500 shadow-lg">
          <CardHeader>
            <CardTitle>Active Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {services.filter((s) => s.status === "Active").length}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-orange-500 shadow-lg">
          <CardHeader>
            <CardTitle>Inactive Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {services.filter((s) => s.status === "Inactive").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Services Table */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Manage Services</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Service Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>{service.id}</TableCell>
                    <TableCell>{service.name}</TableCell>
                    <TableCell
                      className={
                        service.status === "Active" ? "text-green-500" : "text-red-500"
                      }
                    >
                      {service.status}
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
