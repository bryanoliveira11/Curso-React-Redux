import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';
import ClientRepo from '../core/ClientRepo';
import ClientCollection from '../backend/db/ClientCollection';

export default function Home() {
  const [visible, setVisible] = useState<'table' | 'form'>('table');
  const [client, setClient] = useState<Client>(Client.nullClient());
  const [clients, setClients] = useState<Client[]>([]);
  const repo: ClientRepo = new ClientCollection();

  useEffect(getAllClients, []);

  function getAllClients() {
    repo.getAllClients().then((clients) => {
      setClients(clients);
      setVisible('table');
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    setVisible('form');
  }

  async function deleteClient(client: Client) {
    await repo.delete(client);
    getAllClients();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAllClients();
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
              <Button className="mb-4" color="green" onClick={newClient}>
                New Client
              </Button>
            </div>

            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deleteClient}
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
