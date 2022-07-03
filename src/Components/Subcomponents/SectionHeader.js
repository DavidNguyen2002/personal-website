function SectionHeader(props) {
    return (
        <div className="flex flex-col gap-20">
            <h2 className="text-6xl text-center font-bold">{props.title}</h2>
            <p className="text-center text-4xl max-w-5xl">
                {props.subtitle}
            </p>
        </div>
    )
}

export default SectionHeader