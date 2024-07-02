"use client";
import Card from "./components/Card";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Container } from "postcss";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";



export default function Home() {

  const getBlogs = (): Promise<Blog[]> => {
    const blogs = fetch(
      "https://6144e843411c860017d256f0.mockapi.io/api/v1/posts"
    ).then((res) => res.json());
    return blogs;
  };

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: getBlogs,
    staleTime: 5 * 1000,
  });

  const [currentPage, setCurrentPage]= useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const sortedData = data?.sort((x,y) => (
    Number(new Date(y.createdAt)) - Number( new Date(x.createdAt))))
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data?.slice(firstItemIndex, lastItemIndex)

  if(isLoading){
    return(
      <div className="flex justify-center items-center w-full h-screen">
        <DotsHorizontalIcon/>
      </div>
    )
  }

  if(isError){
    return(
      <div>
        <p>
          Error: {error.message}
        </p>
      </div>
    )
  }



  return (
    <main className="flex flex-col pb-24">
      <NavBar/>
      <HeroBanner/>

      
      <div className="w-3/6 m-auto mb-24">
        { // iterate over the current items that are returned 
        currentItems?.map((post) => (
            <div key={post.id}>
              <Card
                title={post.title}
                authors={post.authors.map((a) => a.name).join(", ")}
                desc={post.description}
                date={String(new Date(post.createdAt)).slice(0, 21)}
                comments={post.comments.length}
              />
            </div>
          ))}
      </div>
      <PaginationControls
                totalItems={data?.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
    </main>
  );
}




function PaginationControls({totalItems, itemsPerPage, currentPage, setCurrentPage}:
  {totalItems: any, itemsPerPage: any, currentPage: any, setCurrentPage: any})
  {
      //logic to show max number of pages
      let pages =[];
      for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
          pages.push(i);
      }

      const handleNextPage = () => {
          if(currentPage < pages.length){
              setCurrentPage(currentPage + 1);
          }
          window.scrollTo(0,600)
      };
      const handlePrevPage = () => {
          if(currentPage > 1){
              setCurrentPage(currentPage - 1);
          }
          window.scrollTo(0,600)
      }


  return(
      <Pagination>
          <PaginationContent>
              <PaginationItem>
                  <PaginationPrevious onClick={ () => handlePrevPage()}/>
              </PaginationItem>
              {pages.map((page,idx) =>(
                  <PaginationItem
                  onClick={ () => window.scrollTo(0,600)}
                  key={idx}
                  className={currentPage === page ? "bg-neutral-100 rounded-md hover:cursor-pointer": "hover:cursor-pointer "}
                  >
                      <PaginationLink onClick={() => setCurrentPage(page)}>
                          {page}
                      </PaginationLink>
                  </PaginationItem>

              ))}
              <PaginationItem>
                  <PaginationNext onClick={ () => handleNextPage()}/>
              </PaginationItem>

          </PaginationContent>
      </Pagination>
  );
}
