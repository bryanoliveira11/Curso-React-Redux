import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';

export default function Home() {
  const [visible, setVisible] = useState<'table' | 'form'>('table');
  const [client, setClient] = useState<Client>(Client.nullClient());

  const clients = [
    new Client('c1', 34, '1'),
    new Client('c2', 23, '2'),
    new Client('c3', 32, '3'),
    new Client('c4', 12, '4'),
  ];

  function selectedClient(client: Client) {
    setClient(client);
    setVisible('form');
  }

  function deletedClient(client: Client) {
    console.log(client.name);
  }

  function saveClient(client: Client) {
    setVisible('table');
  }

  function newClient() {
    setClient(Client.nullClient());
    setVisible('form');
  }

  return (
    <div
      className={`flex justify-center items-center h-screen
     bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
    >
      <Layout title="Next CRUD">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button
                className="mb-4"
                color="green"
                onClick={newClient}
              >
                New Client
              </Button>
            </div>

            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            ></Table>
          </>
        ) : (
          <Form
            client={client}
            clientChanged={saveClient}
            canceled={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  );
}
