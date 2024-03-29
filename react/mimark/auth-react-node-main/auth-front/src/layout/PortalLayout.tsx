import { Link } from "react-router-dom";
import React, { MouseEvent } from "react";
import { useAuth } from "../auth/AuthProvider";
// import { API_URL } from "../auth/authConstants";

interface PortalLayoutProps {
  children?: React.ReactNode;
}
export default function PortalLayout({ children }: PortalLayoutProps) {
  const auth = useAuth();

  async function handleSignOut(e: MouseEvent) {
    e.preventDefault();
    auth.logout();

    // try {
    //   const response = await fetch(`${API_URL}/signout`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${auth.getRefreshToken()}`,
    //     },
    //   });
    //   if (response.ok) {
    //     auth.signout();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }
  return (
    <>
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      {/* <Link  className="navbar-brand" to="/dashboard">Dashboard de {auth.getUser()?.name ?? ""}</Link> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal" id="shown.bs.modal">Registrar un empleado</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/vista_clientes.html">Ver clientes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Inventario</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"  data-bs-toggle="modal" data-bs-target="#product" id="shown.bs.modal">Agregar producto</a>
          </li>
          <li>
            {/* <Link to="/me" className="nav-link">{auth.getUser()?.username ?? ""}</Link> */}
          </li>
          <li>
              <Link to="#" onClick={handleSignOut}  className="nav-link" >
                Sign out
              </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
      </header>

      <main>{children}</main>
    </>
  );
}
