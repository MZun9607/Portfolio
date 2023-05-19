export default function ContainerMiniCard( props ) {
    return (
        <div className="flex flex-col items-center text-neutral-100 hover:text-amber-300 py-6 px-6 sm:px-12 transition-opacity duration-200 lg:px-12 opacity-50 hover:opacity-100">
            <img src={props.img} className=" aspect-square object-contain w-full h-auto transition-transform hover:scale-110 duration-200 origin-center hover:-rotate-6"></img>
            <p className="pt-4 w-full  lg:text-xl  text-xl text-center ">
                {props.desc}
            </p>
        </div>
    )
}