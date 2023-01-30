const list = [
     'New', 'Hot', 'Gaming', 'Coding', 'Blogs', 'Unboxing', 'Sport'
]

const Trending = () => {
    return ( 
        
          <div className="bg-slate-400">
            <div className="flex flex-grow gap-4 overflow-x-scroll p-2">
              {
               list.map((item) => (
                 <div className="h-[100px] bg-white">
                    {item}
                 </div>
               )
               )
              }   
            </div>         
          </div>
     );
}
 
export default Trending;