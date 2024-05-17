import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import useClients from '../hooks/useClients';

export default function Home() {
  const {
    newClient,
    deleteClient,
    selectClient,
    saveClient,
    client,
    clients,
    visible,
    setVisible,
  } = useClients();

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
              selectedClient={selectClient}
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
