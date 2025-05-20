// import { Footer } from "./Footer"
//  import { Header } from "./Header"

export const Layout = ({ children }: any) => {

    return (
        <>
                
            
            <div className="grid items-center relative w-screen h-screen overflow-hidden">
                
                <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay loop muted playsInline>
                    <source src="../public/video/video3.mp4" type="video/mp4"/>
                </video>

                {/* Máscara com opacidade */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-0"></div>
                
                {children}      

            </div>


        </>
    )

}