import { useEffect, useState } from 'react';
import Client from '../core/Client';
import ClientRepo from '../core/ClientRepo';
import ClientCollection from '../backend/db/ClientCollection';

export default function useClients() {
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

  function selectClient(client: Client) {
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

  return {
    newClient,
    saveClient,
    deleteClient,
    selectClient,
    getAllClients,
    client,
    clients,
    visible,
    setVisible,
  };
}
