import DataTable from "@/components/dataTable";
import { columns } from "@/pages/dashboard/dashboardUsers/columsUser";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import { getUsers } from "@/utils/api/users";
import { useEffect, useState } from "react";

export default function DashboardUser() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <LayoutDashboard>
      <DataTable columns={columns} data={users} />
    </LayoutDashboard>
  );
}
