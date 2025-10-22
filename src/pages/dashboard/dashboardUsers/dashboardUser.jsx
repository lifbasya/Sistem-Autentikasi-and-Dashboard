import DataTable from "@/components/dataTable";
import { columns } from "@/pages/dashboard/dashboardUsers/columsUser";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import { getUsers } from "@/utils/api/users";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function DashboardUser() {
  const [users, setUsers] = useState([]);
  
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/dashboard/users/add");
  };

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
      <Button onClick={handleAddUser} className="mb-4">Add user </Button>
      <DataTable columns={columns} data={users} />
    </LayoutDashboard>
  );
}
