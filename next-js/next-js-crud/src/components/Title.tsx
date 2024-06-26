export default function Title(props) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="pl-5 px-2 py-2 text-2xl">{props.children}</h1>
      <hr className="border-2 border-purple-500 rounded-md"/>
    </div>
  )
}
