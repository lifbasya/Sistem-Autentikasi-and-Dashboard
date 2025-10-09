import { useState } from "react";
import { X, Menu, Package, User } from "lucide-react";
import { is } from "zod/v4/locales";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="">
      <div>
        <button>
          <Menu />
        </button>
      </div>
    </aside>
  );
}
