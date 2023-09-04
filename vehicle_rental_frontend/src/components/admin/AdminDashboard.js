import React from 'react';
import NavbarLogin from '../NavbarLogin';

function DashboardCard({ title, value, link }) {
  return (
    <>
      <div className="col-md-3">
      <div className="card">
        <div className="card-body bg-primary text-light">
          <div className="card-title text-center">
            <h1>{value}</h1>
          </div>
          <div className="card-text text-center">{title}</div>
        </div>
        <div className="card-footer text-center">
          <a href={link} className="btn btn-secondary">
            Full Detail <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

function AdminDashboard() {
  // Replace these with actual data from your API
  const View_User = 50;
  const totalVehicles = 100;
  const totalBookings = 200;
  const listedBrands = 10;

  return (
    <div className="ts-main-content">
      {/* Include your leftbar component */}
      {/* Include your header component */}
      <NavbarLogin />

      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="page-title">Admin Dashboard</h2>

              <div className="row">
                <DashboardCard title="Related Customer" value={View_User} link="view_users" />
                <DashboardCard title="Car Listing" value={totalVehicles} link="manage-cars" />
                <DashboardCard title="Total Bookings" value={totalBookings} link="manage_book" />
                <DashboardCard title="Payment Info" link="paymentInfo" />
               
                {/* Add more DashboardCard components as needed */}
              </div>
              
              <div className="row">

              <DashboardCard title="Add new Car" value={listedBrands} link="register_cars" />

              </div>
            </div>
          </div>

          {/* Add more rows and cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
