import { Login } from "../Services/login"
// import { Header } from "./Header"
import { Input } from "./Input"
import { Button } from "./Button"


export const Card = () => {
    return (
        <>

        <section className="grid 
                justify-center-safe 
                relative z-10 
                border-1 
                border-gray-200
                rounded-2xl 
                pt-20 pr-20 pb-20 pl-20 
                mt-0 mr-auto mb-0 ml-auto 
                bg-black/85 
                
                " >
                    {/* <Header /> */}
        
        
                  <div className="flex flex-col gap-10" >

                    <Input typeInput="text" nameLabel="Login" nameInput="Login" placeHolder="Login aqui"/>

                    <Input typeInput="password" nameLabel="password" nameInput="password" placeHolder="Senha aqui"/>
        
                    {/* <button type="submit" onClick={Login}  className="
                  bg-green-600 
                  text-l
                  font-medium
                  text-white
                  h-10
                  w-30
                  mt-0 mr-auto mb-0 ml-auto 
                  cursor-pointer
                  ">Login</button> */}

                        <Button btnContent="Login" event={Login} />
        
                  </div>
        
                </section>
        </>
    )
}