

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="font-bold text-3xl px-4 py-10">Contact Us page : To order food </h1>
      <input type="text" className=" border border-black rounded-lg my-5 text-center" placeholder="Name" />
      <input type="text" className="border border-black rounded-lg text-center " placeholder="Text" />
       <div>
        <button className="bg-cyan-400  text-black px-4 my-8 rounded-sm cursor-pointer  hover:bg-cyan-700 hover:text-white">Submit</button>
       </div>
    </div>
  )
}

export default Contact;
