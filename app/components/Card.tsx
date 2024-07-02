import { ChatBubbleIcon } from "@radix-ui/react-icons"
export default function Card({title, authors, date, desc, comments}: 
    {title: string, authors: string, date:string, desc:string, comments: number}){
    

        return(
        <div className="flex grow flex-col justify-around p-0.5 h-56 mb-8 border-b-2 border-zinc-400 hover:-translate-y-1.5 hover:cursor-pointer hover:border-orange-300 hover:border-b-4 duration-300">
            
            <h3 className="flex justify-between text-sm "> 
                <div>
                    {authors} 
                </div>
            </h3>

            <h1 className="text-2xl font-bold"> {title} </h1>

            <p className=" w-full min-w-0 h-24 text-zinc-500 text-md sm:text-base line-clamp-4 "> {desc} </p>

            <div className="flex flex-row justify-between text-xs text-zinc-500 "> 
                    <span> {date} </span>
                    <span className="flex flex-row gap-1"> 
                        <ChatBubbleIcon/> {comments} 
                    </span>
                </div>

        </div>
    )

}
