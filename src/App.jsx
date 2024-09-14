import TranslatorStart from './components/TranslatorStart'

const App = () => {
  return (
    <div className="w-full h-screen bg-[#111] flex justify-center items-center text-[#ff4500]">
      <div className='w-[90%] max-w-lg h-[70vh] bg-[#222] rounded-md border-2 border-[#ff4500] flex flex-col'>
        <TranslatorStart />
      </div>
    </div>
  )
}

export default App
