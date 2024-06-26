import Client from "./Client";

export default interface ClientRepo {
  save(client: Client): Promise<Client>;
  delete(client: Client): Promise<void>;
  getAllClients(): Promise<Client[]>;
}
