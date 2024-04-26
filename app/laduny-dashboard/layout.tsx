"use client"
import ProtectedRoute from "../ProtectedRouter"; // Corrected import

export default function LadunyDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen">
      <div className="flex-1 relative">
        <ProtectedRoute>{children}</ProtectedRoute> {/* Removed space before children */}
      </div>
    </div>
  );
}