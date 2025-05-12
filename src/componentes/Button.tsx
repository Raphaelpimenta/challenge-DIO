// import { Login } from "../Services/login"

interface MyFunc {
    btnContent: string,
    event: () => void
    
    
}

export const Button = ({btnContent, event}: MyFunc) => {
    return (
        <button onClick={event} className="
        bg-green-600 
        text-l
        font-medium
        text-white
        h-10
        w-30
        mt-0 mr-auto mb-0 ml-auto 
        cursor-pointer
        "
        >{btnContent}</button>
    )

}