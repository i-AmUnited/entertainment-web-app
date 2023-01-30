const ContentDetail = ({year, icon, category, rating, title}) => {
    return ( 
        <div>
          <div className="flex gap-5 text-xs opacity-75">
            <div>{year}</div>
            <div className="flex gap-1">
              <span><img src={icon} alt="" /></span>
              <span>{category}</span>
            </div>
            <div>{rating}</div>
          </div>
          <div>{title}</div>
        </div>
     );
}
 
export default ContentDetail;