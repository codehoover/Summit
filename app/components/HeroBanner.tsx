export default function HeroBanner(){
    return(
        <div className=" mb-72 sm:mb-96 xl:px-80 w-full h-82  ">

            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center gap-8 w-full sm:w-2/5 lg:w-2/5 xl:w-9/12 pl-12">
                    <h1 className="text-6xl font-medium ">
                        Learn, Share, Connect.
                    </h1>
                    <p className="text-lg text-gray-500 font-light w-4/5"> 
                        Write, share and read about the ideas and topics that you care about. 
                    </p>
                </div>

                <div className="hidden sm:flex justify-center items-center ">
                    <h1 className="z-10 flex justify-center items-center rounded-lg text-8xl font-bold bg-slate-100/60 h-48 w-48"> B </h1>
                    
                    <div className="absolute right-46 z-0">
                        <div className=" absolute bg-purple-300 w-36 h-36 sm:w-64 sm:h-64 -top-28 right-46 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob delay-300"></div>
                        <div className=" absolute bg-red-300 w-36 h-36 sm:w-64 sm:h-64 right-16 -top-44 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob delay-700 "></div>
                        <div className=" absolute bg-orange-300 w-36 h-36 sm:w-64 sm:h-64 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob delay-1000 "></div>
                    </div>                    
                </div>
                
            </div>

        </div>
    )
}