import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserGrowthChart } from "../UserGrowthChart";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { ActiveInactive } from "@/components/ActiveInactive";
const dummyUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Moderator", status: "Active" },
];

export default function Users() {
  const [users, setUsers] = useState(dummyUsers);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className=" text-white">
      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold">100,230</p>
        </div>
        <div className="p-6 rounded-xl bg-red-500 shadow-lg">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-3xl font-bold">45,678</p>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
          <h2 className="text-lg font-semibold">New Signups</h2>
          <p className="text-3xl font-bold">52,000</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 mt-6">
        <UserGrowthChart />
        
        
        <ActiveInactive/>
      </div>

      {/* User Management Table */}
      <div className="mt-8">
        <Input
          className="border-gray-600 bg-transparent text-white focus:ring-orange-500"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Table className="mt-6 border border-gray-300 rounded shadow-xl overflow-hidden ">
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-900">
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className={user.status === "Active" ? "text-green-400" : "text-red-400"}>
                    {user.status}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" className="text-blue-400 hover:text-blue-500">
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-red-400 hover:text-red-500"
                      onClick={() => handleDelete(user.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="5" className="text-center text-gray-500 py-4">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
