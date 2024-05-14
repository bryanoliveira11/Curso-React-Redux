export default class Client {
  private _id: string;
  private _name: string;
  private _age: number;

  constructor(_name: string, _age: number, _id: string = '') {
    this._name = _name;
    this._age = _age;
    this._id = _id;
  }

  static nullClient() {
    return new Client('', 0, '');
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}
