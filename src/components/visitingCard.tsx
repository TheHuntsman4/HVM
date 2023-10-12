const VisitingCard = () => {
    return (
        <div className="text-center h-full w-full bg-white text-black border-2 border-black rounded-sm p-5">
            <div>
                <h1 className="font-bold text-2xl">Amritavarsham 70</h1>
                <h2 className="font-bold text-xl">Online Registration Pass</h2>
                <span className="text-lg">
                    Amritapuri P.O Kollamm Kerala 690525,<br></br>
                </span>
                <span className="text-lg">Ph:(0496)3241066</span>
            </div>

            <div className="flex gap-7 w-full justify-center items-center py-10">
                {/* <img className="w-1/2 lg:w-2/5 border-2 border-black p-2" alt="id-image" src='https://www.shutterstock.com/image-photo/head-shot-indian-businessman-formal-suit-2159105267' /> */}

            </div>

            <span className="text-xl font-bold pb-3">
                Some randome name
            </span>
            <div className="grid grid-cols-2 gap-3 text-lg">
                <div className="text-start">City</div>
                <div className="text-start">: some city</div>
                <div className="text-start">State</div>
                <div className="text-start">: some state</div>
                <div className="text-start">Valid From</div>
                <div className="text-start">: from his birth</div>
                <div className="text-start">Valid Till</div>
                <div className="text-start">: the heat death of the universe</div>
            </div>
            <span className="text-start w-full font-bold text-xl">
                <div className="text-left py-10">Last Visit: some time ig</div>
            </span>
            
        </div>

    )
}

export default VisitingCard
