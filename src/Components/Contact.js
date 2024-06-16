const Contact = ()=>{
    return(
        <div>
            <h1 className="font-bold p-4 m-4 text-3xl">"You may contact Saket Karn on saketkarn38@gmail.com"</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name" name="name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="message" name="message"/>
                <button className="border border-black p-2 m-2 bg-gray1-00 rounded-lg">Submit</button>
                <button className="border border-black p-2 m-2 bg-gray1-00 rounded-lg">Test</button>
            </form>
        </div>
    )
}

export default Contact