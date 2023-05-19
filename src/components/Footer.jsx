import ContainerMaxWidth from "./containers/ContainerMaxWidth"

export default function Footer( props ) {
    return (
        <div className="bg-neutral-900 bg-opacity-40 text-neutral-100
                    w-full h-full m-0 py-2 ">
            <ContainerMaxWidth spacing="h-full" item={
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center">
                    <div className="flex-none xl:pl-16  h-full"> 
                        <div className="flex">
                        </div>
                    </div>
                    <div className="text-base lg:text-xl grid grid-cols-2 gap-12 py-4 lg:my-0 "> 
                        <div className="text-right lg:text-left">
                            <h1>Número de contacto: </h1>
                            <h1>e-mail: </h1>
                        </div>
                        <div className="text-left">
                            <h1>(+51)   928892316</h1>
                            <h1>mzb9607@gmail.com</h1>
                        </div>
                    </div>
                </div>
            }/>
        </div>
    )
}
