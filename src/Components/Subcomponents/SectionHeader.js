function SectionHeader(props) {
    return (
        <div className="flex flex-col gap-20 items-center">
            <h2 className="text-6xl text-center font-bold max-w-[90%]">{props.title}</h2>
            <p className="text-center text-2xl md:text-4xl max-w-5xl w-4/5 xl:w-full">
                {props.subtitle}
            </p>
        </div>
    )
}

export default SectionHeader