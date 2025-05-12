interface MyCard  {
    nameLabel: string,
    typeInput: string,
    nameInput: string,
    placeHolder: string
}
export const Input = ({typeInput, nameLabel, nameInput, placeHolder}: MyCard) => {

    return (
        <>
        <div className="grid gap-5">
            
            <label htmlFor={nameInput} className="text-white gap-0">{nameLabel}</label>
            <input type={typeInput} name={nameInput} id={nameInput} placeholder={placeHolder} className="
            bg-white/15
            outline-sky-700
            border-amber-50 
            border-1
            rounded-xs
            pt-4 pr-4 pb-4 pl-4
            text-white"/>
        </div>
        </>
    )

    
}