const VisitingCard = () => {
    return (
        <div className="text-center h-full w-full bg-white text-black border-2 border-black rounded-sm p-5">
            <div>
                <h1 className="font-bold text-2xl">Amrita Hospital Kochi</h1>
                <h2 className="font-bold text-xl">Visitor Pass</h2>
            </div>

            <div className="flex gap-7 w-full justify-center items-center py-10">
                {/* <img className="w-1/2 lg:w-2/5 border-2 border-black p-2" alt="id-image" src='https://www.shutterstock.com/image-photo/head-shot-indian-businessman-formal-suit-2159105267' /> */}

            </div>
            <div className="grid grid-cols-2 gap-3 text-lg">
                <div className="text-start">Name</div>
                <div className="text-start">: Some Name</div>
                <div className="text-start">Company</div>
                <div className="text-start">: Some Company</div>
                <div className="text-start">Visitng</div>
                <div className="text-start">: Faculty Name</div>
                <div className="text-start">Department</div>
                <div className="text-start">: Department Name</div>
                <div className="text-start">Designation</div>
                <div className="text-start">:Faculty Designation</div>
            </div>
        </div>

    )
}

export default VisitingCard
