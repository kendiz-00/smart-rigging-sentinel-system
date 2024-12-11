import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BarChart2, Printer, Download } from "lucide-react";

const reportTypes = [
  {
    title: "Equipment Usage Report",
    description: "Track usage patterns and equipment availability",
    icon: FileText,
  },
  {
    title: "Inspection Summary",
    description: "Overview of all equipment inspections and their status",
    icon: BarChart2,
  },
  {
    title: "Maintenance Records",
    description: "Detailed maintenance history and upcoming schedules",
    icon: FileText,
  },
  {
    title: "Compliance Report",
    description: "Regulatory compliance status and certification tracking",
    icon: FileText,
  },
];

const Reports = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Reports</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {reportTypes.map((report, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <report.icon className="h-5 w-5" />
                    {report.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Printer className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
                    <Download className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{report.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;