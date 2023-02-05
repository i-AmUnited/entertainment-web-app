const list = [
     'New', 'Hot', 'Gaming', 'Coding', 'Blogs', 'Unboxing', 'Sport'
]

const Trending = () => {
    return ( 
        
          <div className="bg-slate-400">
            <div className="flex ">
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