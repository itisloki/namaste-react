const Contact = () => {
    return(
        <div>
            <h1 className="p-4 m-4 text-3xl font-bold">Contact Us page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className="p-2 m-2 bg-green-100 rounded-lg">Submit</button>
            </form>
        </div>
    )
 }

 export default Contact;