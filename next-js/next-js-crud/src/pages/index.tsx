import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';

export default function Home() {
  const clients = [
    new Client('c1', 34, '1'),
    new Client('c2', 23, '2'),
    new Client('c3', 32, '3'),
    new Client('c4', 12, '4'),
  ];

  function selectedClient(client: Client) {
    console.log(client.name);
  }

  function deletedClient(client: Client) {
    console.log(client.name);
  }

  return (
    <div
      className={`flex justify-center items-center h-screen
     bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
    >
      <Layout title="Next CRUD">
        <Table
          clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        ></Table>
      </Layout>
    </div>
  );
}
