import {
  PageDescription,
  PageHeader,
  PageTitle,
} from "@/components/custom/page-header";

export default function Layout({
  children,
  bookings,
  occupancy,
  orders,
  revenue,
  staylist,
  foodrevenuechart,
  roomstatus,
  notifications,
}: {
  children: React.ReactNode;
  bookings: React.ReactNode;
  occupancy: React.ReactNode;
  orders: React.ReactNode;
  revenue: React.ReactNode;
  staylist: React.ReactNode;
  foodrevenuechart: React.ReactNode;
  roomstatus: React.ReactNode;
  notifications?: React.ReactNode;
}) {
  return (
    <div className="space-y-10 @container">
      <PageHeader>
        <PageTitle>Dashboard</PageTitle>
        <PageDescription>Welcome back Admin</PageDescription>
      </PageHeader>
      <section className="grid @6xl:grid-cols-4 @4xl:grid-cols-3 @xl:grid-cols-2 gap-6">
        {occupancy}
        {revenue}
        {bookings}
        {orders}
      </section>
      <section className="grid @5xl:grid-cols-2 gap-6">
        {staylist}
        {foodrevenuechart}
      </section>
      <section className="grid @6xl:grid-cols-8 gap-6">
        {roomstatus}
        {notifications}
      </section>
      {children}
    </div>
  );
}
