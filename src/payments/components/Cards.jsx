export default function Cards({ head, value, bgColor, textColor}) {
  return (
    <div className={`flex-grow shadow p-5 space-y-3 rounded-md ${bgColor} `}>
      <h4 className="text-lg text-black">{head}</h4>
      <h1 className="text-3xl font-semibold text-black">{value}</h1>
    </div>
  );
}
