import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Settings2 } from "lucide-react";

const Settings = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Settings2 className="h-8 w-8" />
          Settings
        </h1>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>
                Update your company details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Enter company name"
                  defaultValue="Smart Rigging Solutions Ltd."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter contact email"
                  defaultValue="contact@smartrigging.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Contact Phone</Label>
                <Input
                  id="phone"
                  placeholder="Enter contact phone"
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure how you want to receive alerts and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emailNotifications">Email Notifications</Label>
                <Input
                  id="emailNotifications"
                  type="email"
                  placeholder="Enter notification email"
                  defaultValue="alerts@smartrigging.com"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>
                Adjust system-wide settings and defaults
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="inspectionInterval">
                  Default Inspection Interval (days)
                </Label>
                <Input
                  id="inspectionInterval"
                  type="number"
                  defaultValue="90"
                  min="1"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;