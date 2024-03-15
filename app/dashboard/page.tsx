import { lusitana } from '@/app/ui/fonts';
import { Card } from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';
import { promise } from 'zod';

export default async function Page() {
  // waterflow promise fetch
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();

  // parallel promise fetch
  const data = await Promise.all([
    fetchRevenue(),
    fetchLatestInvoices(),
    fetchCardData(),
  ]);
  const revenue = data[0];
  const latestInvoices = data[1];
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = data[2];

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
