export default function Button(props) {
  const nameButton = props.nameButton;
  return (
    <button className="bg-gray-300 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300 ... mx-3 text-black rounded-3xl w-32 h-10">
      {nameButton}
    </button>
  );
}
