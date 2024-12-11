import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package2, Search } from "lucide-react";

const mockInventory = [
  { id: "RIG001", name: "Wire Rope Sling", status: "Available", lastInspection: "2024-02-15", nextInspection: "2024-05-15" },
  { id: "RIG002", name: "Chain Hoist", status: "In Use", lastInspection: "2024-02-10", nextInspection: "2024-05-10" },
  { id: "RIG003", name: "Shackle Set", status: "Maintenance", lastInspection: "2024-02-01", nextInspection: "2024-05-01" },
];

export default function Inventory() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Inventory</h1>
        <Button>
          <Package2 className="mr-2 h-4 w-4" />
          Add Equipment
        </Button>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search equipment..." className="pl-8" />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Inspection</TableHead>
              <TableHead>Next Inspection</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockInventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.lastInspection}</TableCell>
                <TableCell>{item.nextInspection}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}