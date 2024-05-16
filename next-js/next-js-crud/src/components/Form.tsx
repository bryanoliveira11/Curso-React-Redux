import { useState } from 'react';
import Input from './Input';
import Client from '../core/Client';
import Button from './Button';

interface FormProps {
  client: Client;
  canceled?: () => void;
  clientChanged?: (client: Client) => void;
}

export default function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id ? (
        <Input text="ID" value={id} readOnly={true} className="mb-2" />
      ) : (
        false
      )}
      <Input text="Name" value={name} valueChanged={setName} className="mb-2" />
      <Input text="Age" type="number" value={age} valueChanged={setAge} />
      <div className="flex justify-end mt-5">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.clientChanged?.(new Client(name, +age, id))}
        >
          {id ? 'Edit' : 'Save'}
        </Button>
        <Button onClick={props.canceled}> Cancel </Button>
      </div>
    </div>
  );
}
