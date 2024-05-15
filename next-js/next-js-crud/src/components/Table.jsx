export default function Table(props) {
  function renderTableHead() {
    return (
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    );
  }

  function renderData() {
    return props.clients?.map((client, index) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      );
    });
  }

  return (
    <table>
      <thead>{renderTableHead()}</thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
