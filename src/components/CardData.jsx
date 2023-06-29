export default function CardData(props) {
  const { icon, title, content } = props;
  return (
    <div className="bg-gray-200 rounded-xl">
      <div className="p-6">
        <div className="flex rounded-xl bg-gray-300 h-12 w-12 justify-center items-center mb-5 text-2xl">
          {icon}
        </div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="font-bold text-sm leading-5 text-gray-500">{content}</p>
      </div>
    </div>
  );
}
