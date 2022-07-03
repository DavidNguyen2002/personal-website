function ExperienceBlock(props) {
    return (
        <div className="w-full md:w-2/5 aspect-square flip-outer">
            <div className="w-full h-full flip-card md:rounded-lg lg:rounded-xl">
                <div className="flip-front w-full h-full md:rounded-lg lg:rounded-xl">
                    <img className="md:rounded-lg lg:rounded-xl w-full h-full" src={props.image} alt={props.name} />
                </div>
                <div className="flip-back bg-gray-400 w-full h-full md:rounded-lg lg:rounded-xl flex justify-center items-center">
                    <div className="flex flex-col justify-center-items-center gap-8">
                        <h2 className="font-bold text-4xl">
                            {props.name}
                        </h2>
                        <h3 className="text-3xl">
                            {props.position}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceBlock