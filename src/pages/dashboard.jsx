import { email } from "zod";
import Navbar from "../components/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
function Dashboard() {
  return (
    <>
    <Navbar />
      <div>Dashboard Page</div>
      <Input type="email" placeholder="input Email" />
      <Button>Button</Button>
      <p>ini Dashboard</p>
    </>
  );
}

export default Dashboard;
