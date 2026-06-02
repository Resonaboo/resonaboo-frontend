import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import {
	SidebarInset,
	SidebarProvider,
	Sidebar,
	useSidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarTrigger,
} from "#/components/ui/sidebar";
import {
	createFileRoute,
	createLink,
	Link,
	Outlet,
	useLocation,
	type ToPathOption
} from "@tanstack/react-router";
import { Building2, ChevronDown, IdCard, LayoutDashboard, Scale } from "lucide-react";
import type { ReactElement } from "react";

type SidebarContentItem = {
	icon: ReactElement,
	label: string,
	to: string;
}

const SidebarMenuLink = createLink(SidebarMenuButton);

export const Route = createFileRoute("/_private/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	/*
	const {
		state,
		open,
		setOpen,
		openMobile,
		setOpenMobile,
		isMobile,
		toggleSidebar,
	} = useSidebar();

	console.log(isMobile);
	*/

	const pathname = useLocation({
    	select: (location) => location.pathname,
  	});

	const sidebarItems: SidebarContentItem[] = [
		{ icon: <LayoutDashboard />, label: "Dashboard", to:"/dashboard" },
		{ icon: <Building2 />, label: "Auditoria MEI", to:"/" },
		{ icon: <Building2 />, label: "Auditoria CNPJ", to:"/" },
	]
   
	return (
		<SidebarProvider>
				<Sidebar variant="sidebar">
					<SidebarHeader className="h-16 shadow-md">
						<div className="flex gap-2">
							<div className="w-10 h-10 flex items-center justify-center">
								<Scale size={40} />
							</div>
							<div className="flex flex-col justify-center">
								<h1 className="font-bold">Audityboo</h1>
								<span className="text-sm text-black/50">
									Auditoria Fiscal Inteligente
								</span>
							</div>
						</div>
					</SidebarHeader>
					<SidebarContent className="py-4 px-2">
						{sidebarItems.map((item) => { 
							return (
								<SidebarMenuLink className={`font-bold text-neutral-600 ${pathname === item.to ? 'text-neutral-900 bg-neutral-200 hover:bg-neutral-100' : ''}`} to={item.to}>
									{item.icon} {item.label}
								</SidebarMenuLink>
							)
						 })}
					</SidebarContent>
				</Sidebar>
				<SidebarInset>
					<main className="flex">
						<SidebarTrigger /> 
						<Outlet />
					</main>
				</SidebarInset>
			</SidebarProvider>
	);
}
