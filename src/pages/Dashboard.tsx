import { AlertTriangle, Package, CheckCircle2, Clock } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Equipment"
          value="234"
          icon={<Package className="h-4 w-4 text-secondary" />}
          description="+4 since last month"
        />
        <DashboardCard
          title="Due Inspections"
          value="12"
          icon={<Clock className="h-4 w-4 text-warning" />}
          description="Within next 7 days"
        />
        <DashboardCard
          title="Critical Alerts"
          value="3"
          icon={<AlertTriangle className="h-4 w-4 text-danger" />}
          description="Requires immediate attention"
        />
        <DashboardCard
          title="Inspected Today"
          value="18"
          icon={<CheckCircle2 className="h-4 w-4 text-success" />}
          description="On schedule"
        />
      </div>
    </div>
  );
}