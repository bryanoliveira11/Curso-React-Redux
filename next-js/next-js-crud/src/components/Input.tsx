interface InputProps {
  text: string;
  type?: 'text' | 'number';
  value: any;
  readOnly?: boolean;
  className?: string;
  valueChanged?: (value: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-4">{props.text}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        readOnly={props.readOnly}
        onChange={e => props.valueChanged?.(e.target.value)}
        className={`
        border border-purple-500 rounded-lg focus:outline-none
      bg-gray-50 px-4 py-2 ${props.readOnly ? '' : 'focus:bg-white'}`
      }
      />
    </div>
  );
}
