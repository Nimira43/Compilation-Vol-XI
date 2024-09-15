const TranslatorApp = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-12">
      <div className="w-full h-64 bg-[#111] rounded-t-full rounded-bl-full border-8 border-[#ff4500] flex flex-col justify-center pr-6 text-[#87ceeb]">
        <span className="font-fredericka text-6xl text-center">Welcome</span>
        <span className="font-fredericka text-3xl text-center">Bienvenue</span>
        <span className="font-fredericka text-4xl text-right">Bienvenido</span>
        <span className="font-fredericka text-2xl text-right">欢迎</span>
      </div>
      <div className="w-full text-right space-y-5 mt-20 mb-36">
        <h1 className="text-4xl text-[#111]">Translator</h1>
        <button className="w-32 h-10 bg-[#111] rounded-xl font-bold uppercase text-lg active:translate-y-[1px]">Start</button>
      </div>
    </div>
  )
}

export default TranslatorApp
