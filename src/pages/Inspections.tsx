import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Camera, Check, X, AlertTriangle } from "lucide-react";

const mockInspections = [
  {
    id: 1,
    equipmentId: "RIG-001",
    type: "Sling",
    lastInspection: "2024-02-01",
    status: "Pass",
    nextDue: "2024-05-01",
    inspector: "John Doe",
  },
  {
    id: 2,
    equipmentId: "RIG-002",
    type: "Shackle",
    lastInspection: "2024-01-15",
    status: "Warning",
    nextDue: "2024-04-15",
    inspector: "Jane Smith",
  },
  {
    id: 3,
    equipmentId: "RIG-003",
    type: "Chain Block",
    lastInspection: "2024-01-30",
    status: "Fail",
    nextDue: "2024-02-15",
    inspector: "Mike Johnson",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Pass":
      return <Check className="h-5 w-5 text-success" />;
    case "Fail":
      return <X className="h-5 w-5 text-danger" />;
    case "Warning":
      return <AlertTriangle className="h-5 w-5 text-warning" />;
    default:
      return null;
  }
};

const Inspections = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Equipment Inspections</h1>
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Inspections</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">156</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Due This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-warning">8</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Failed Inspections</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-danger">3</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Inspections</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Equipment ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Last Inspection</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Next Due</TableHead>
                <TableHead>Inspector</TableHead>
                <TableHead>Photos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockInspections.map((inspection) => (
                <TableRow key={inspection.id}>
                  <TableCell>{inspection.equipmentId}</TableCell>
                  <TableCell>{inspection.type}</TableCell>
                  <TableCell>{inspection.lastInspection}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(inspection.status)}
                      {inspection.status}
                    </div>
                  </TableCell>
                  <TableCell>{inspection.nextDue}</TableCell>
                  <TableCell>{inspection.inspector}</TableCell>
                  <TableCell>
                    <Camera className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inspections;