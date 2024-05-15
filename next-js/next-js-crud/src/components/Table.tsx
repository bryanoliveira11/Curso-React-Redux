import Client from '../core/Client';
import { iconEdit, trashIcon } from './Icons';

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.selectedClient || props.deletedClient;

  function renderTableHead() {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {showActions ? <th className="text-center p-4">Actions</th> : false}
      </tr>
    );
  }

  function renderData() {
    return props.clients?.map((client, index) => {
      return (
        <tr
          key={client.id}
          className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? renderActions(client) : false}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center">
        {props.selectedClient ? (
          <button
            className={`flex text-green-600 rounded-full hover:bg-purple-50 p-2 m-1`}
            onClick={() => props.selectedClient?.(client)}
          >
            {iconEdit}
          </button>
        ) : (
          false
        )}

        {props.deletedClient ? (
          <button
            className={`flex text-red-500 rounded-full hover:bg-purple-50 p-2 m-1`}
            onClick={() => props.deletedClient?.(client)}
          >
            {trashIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`bg-gradient-to-r from-purple-500 to-purple-800 text-gray-50`}
      >
        {renderTableHead()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
