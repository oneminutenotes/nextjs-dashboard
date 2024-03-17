import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import { CustomerField, FormattedCustomersTable } from '@/app/lib/definitions';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  return <>Customer Table</>;
}
