"use client";
import authRoute from "@/laduny/auth/authRoutes";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex-1 relative">{children}</div>
    </div>
  );
};

export default authRoute(DashboardLayout);