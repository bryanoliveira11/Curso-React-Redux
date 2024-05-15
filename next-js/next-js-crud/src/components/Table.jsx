export default function Table(props) {
  function renderTableHead() {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
      </tr>
    );
  }

  function renderData() {
    return props.clients?.map((client, index) => {
      return (
        <tr key={client.id} className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
        </tr>
      );
    });
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
