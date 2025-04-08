"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookCheckIcon,
  BookOpen,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Command,
  Frame,
  GalleryVerticalEnd,
  GraduationCap,
  Map,
  PieChart,
  Puzzle,
  Settings2,
  SquareTerminal,
  Trophy,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "EduSpark",
      logo: BrainCircuit,
      plan: "© The Codesters",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    // {
    // //   title: "Playground",
    // //   url: "#",
    // //   icon: SquareTerminal,
    // //   isActive: true,
    // //   items: [
    // //     {
    // //       title: "History",
    // //       url: "#",
    // //     },
    // //     {
    // //       title: "Starred",
    // //       url: "#",
    // //     },
    // //     {
    // //       title: "Settings",
    // //       url: "#",
    // //     },
    // //   ],
    // // },
    // // {
    // //   title: "Models",
    // //   url: "#",
    // //   icon: Bot,
    // //   items: [
    // //     {
    // //       title: "Genesis",
    // //       url: "#",
    // //     },
    // //     {
    // //       title: "Explorer",
    // //       url: "#",
    // //     },
    // //     {
    // //       title: "Quantum",
    // //       url: "#",
    // //     },
    // //   ],
    // // },
    // // {
    //   // title: "Documentation",
    //   // url: "#",
    //   // icon: BookOpen,
    //   // items: [
    //   //   {
    //   //     title: "Introduction",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Get Started",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Tutorials",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Changelog",
    //   //     url: "#",
    //   //   },
    //   // ],
    // // },
    // // {
    // //   title: "Settings",
    // //   url: "#",
    // //   icon: Settings2,
    // //   items: [
    // //     {
    // //       title: "General",
    // //       url: "#",
    // //     },
    // //     {
    // //       title: "Team",
    // //       url: "#",
    // //     },
    // //     {
    // //       title: "Billing",
    // //       url: "#",
    // //     },
    // //     {
    // //       title: "Limits",
    // //       url: "#",
    // //     },
    // //   ],
    // },
  ],
  projects: [
    {
      name: "Stats",
      url: "/dashboard/stats",
      icon: ChartNoAxesCombined,
    },
    {
      name: "Quizes",
      url: "/dashboard/quiz",
      icon: Puzzle,
    },
    {
      name: "Assignments",
      url: "/dashboard/assignments",
      icon: BookCheckIcon,
    },
    {
      name: "Leaderboard",
      url: "/dashboard/leaderboard",
      icon: Trophy,
    },
    {
      name: "Learning",
      url: "/dashboard/learning",
      icon: GraduationCap,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
