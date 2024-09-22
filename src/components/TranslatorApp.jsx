const TranslatorApp = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center px-8 pt-12 pb-6 relative">
      <button className="absolute top-4 right-4">
        <i className="fa-solid fa-xmark text-xl text-[#111]"></i>
      </button>
      <div className="w-full min-h-20 flex justify-center items-center px-4 bg-[#111] border">
        <div>English</div>
        <i className="fa-solid fa-arrows-rotate"></i>
        <div>English</div>
      </div>
      <div>
        <textarea></textarea>
        <div>0/200</div>
      </div>
      <button>
          <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div>
        <textarea></textarea>
      </div>
    </div>
  )
}

export default TranslatorApp
