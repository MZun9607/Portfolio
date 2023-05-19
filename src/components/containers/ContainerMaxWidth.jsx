export default function ContainerMaxWidth( props ) {
    let divClassName = "w-full max-w-5xl p-2 "

    if (!(props.bg== null || props.bg =="")) {
        divClassName = divClassName + props.bg + " "
    }
    if (!(props.spacing== null || props.spacing =="")) {
        divClassName = divClassName + props.spacing + " "
    }

    return (
        <div className="flex w-full items-center justify-center">
            <div className={divClassName}>
                {props.item}
            </div>
        </div>
    )
}