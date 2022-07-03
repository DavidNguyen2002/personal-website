function Project(props) {
    // PROPS:
    // image, name, description, tech, left/right, github

    return (
        <div className={`flex justify-center w-full h-96 gap-20 ${props.left ? "flex-row" : "flex-row-reverse"}`}>
            <div className="w-auto aspect-square p-4 flex justify-center items-center rounded-lg bg-[#f3b1a7] border-2 border-black">
                <a href={props.github} target="_blank" rel="noopener noreferrer"><img className="aspect-square rounded-md border-black border-2" src={props.image} alt={props.name} /></a>
            </div>
            <div className="flex justify-center items-center h-full w-full bg-rose-100 p-4 border-black border-2 rounded-lg">
                <div className="flex flex-col justify-center gap-8 w-full h-full bg-white border-black border-2 rounded-md p-6">
                    <div className="flex flex-col">
                        <h2 className={`font-bold text-3xl`}>{props.name}</h2>
                        <p className="text-xl">{props.description}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className={`text-xl`}>{props.tech}</p>
                        <a href={props.github} target="_blank" rel="noopener noreferrer" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project