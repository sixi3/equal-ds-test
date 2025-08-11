import React, { useState } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarGroupTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarTrigger,
  SidebarRail,
} from 'equal-ds-ui';
import { 
  ArrowLeftCircle, 
  Component, 
  Landmark, 
  FileQuestion, 
  LayoutTemplate, 
  FileStack, 
  BellDot, 
  Grid2x2Plus,
  Braces,
  FileInput,
  FileX2,
  TextSearch,
  ChartLine,
  FileChartPie,
  Cog,
  MonitorCog,
  UserCog,
  BookText,
  FileCode2,
  ChartPie
} from 'lucide-react';

export default function App() {
  const [selected, setSelected] = useState('consent-templates');
  
  // State for managing group order
  const [groupOrder, setGroupOrder] = useState([
    'aa-ecosystem',
    'bulk-operations', 
    'analytics',
    'admin-setup',
    'reference-docs'
  ]);

  return (
    <div className="h-screen flex">
      <SidebarProvider
        defaultOpen
        defaultActiveItem={selected}
        onActiveItemChange={(id) => setSelected(id ?? 'consent-templates')}
      >
        <Sidebar aria-label="Primary" className="shrink-0">
          <SidebarHeader className="flex items-center justify-between h-16">
            <div className="font-semibold">FinPro</div>
            <SidebarTrigger srLabel="Collapse sidebar" className="h-8 w-8">
              <ArrowLeftCircle className="h-5 w-5" />
            </SidebarTrigger>
          </SidebarHeader>
          <SidebarContent 
            reorderGroups={true}
            groupOrder={groupOrder}
            onGroupOrderChange={setGroupOrder}
          >
            {/* AA ECOSYSTEM */}
            <SidebarGroup id="aa-ecosystem" defaultOpen>
              <SidebarGroupTrigger>
                <SidebarGroupLabel>AA ECOSYSTEM</SidebarGroupLabel>
              </SidebarGroupTrigger>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="account-aggregator" icon={<Component className="w-5 h-5" />}>Account Aggregator</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="fip" icon={<Landmark className="w-5 h-5" />}>FIP</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="purpose" icon={<FileQuestion className="w-5 h-5" />}>Purpose</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="consent-templates" icon={<LayoutTemplate className="w-5 h-5" />}>Consent Templates</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="consent-requests" icon={<FileStack className="w-5 h-5" />}>Consent Requests</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="fi-notifications" icon={<BellDot className="w-5 h-5" />}>FI Notifications</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="data-fetch-request" icon={<Grid2x2Plus className="w-5 h-5" />}>Data Fetch Request</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* BULK OPERATIONS */}
            <SidebarGroup id="bulk-operations" defaultOpen>
              <SidebarGroupTrigger>
                <SidebarGroupLabel>BULK OPERATIONS</SidebarGroupLabel>
              </SidebarGroupTrigger>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="bulk-consent-request" icon={<Braces className="w-5 h-5" />}>Bulk Consent Request</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="bulk-data-fetch" icon={<FileInput className="w-5 h-5" />}>Bulk Data Fetch</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="bulk-consent-revoke" icon={<FileX2 className="w-5 h-5" />}>Bulk Consent Revoke</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="bulk-csv-upload" icon={<FileStack className="w-5 h-5" />}>Bulk CSV Upload</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* ANALYTICS */}
            <SidebarGroup id="analytics" defaultOpen>
              <SidebarGroupTrigger>
                <SidebarGroupLabel>ANALYTICS</SidebarGroupLabel>
              </SidebarGroupTrigger>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="insights" icon={<TextSearch className="w-5 h-5" />}>Insights</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="analytics" icon={<ChartLine className="w-5 h-5" />}>Analytics</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="pdf-analytics" icon={<FileChartPie className="w-5 h-5" />}>PDF Analytics</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* ADMIN & SETUP */}
            <SidebarGroup id="admin-setup" defaultOpen>
              <SidebarGroupTrigger>
                <SidebarGroupLabel>ADMIN & SETUP</SidebarGroupLabel>
              </SidebarGroupTrigger>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="settings" icon={<Cog className="w-5 h-5" />}>Settings</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="manage-apps" icon={<MonitorCog className="w-5 h-5" />}>Manage Apps</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="admin" icon={<UserCog className="w-5 h-5" />}>Admin</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* REFERENCE & DOCS */}
            <SidebarGroup id="reference-docs" defaultOpen>
              <SidebarGroupTrigger>
                <SidebarGroupLabel>REFERENCE & DOCS</SidebarGroupLabel>
              </SidebarGroupTrigger>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="central-registry" icon={<BookText className="w-5 h-5" />}>Central Registry</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="integration-docs" icon={<FileCode2 className="w-5 h-5" />}>Integration Docs</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton itemId="mis" icon={<ChartPie className="w-5 h-5" />}>MIS</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
        <div className="flex-1 p-6 space-y-4">
          <SidebarTrigger>
            <ArrowLeftCircle className="h-5 w-5" />
          </SidebarTrigger>
          <div>Selected: {selected}</div>
          <div className="text-sm text-gray-600">
            Group Order: {groupOrder.join(' → ')}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}


