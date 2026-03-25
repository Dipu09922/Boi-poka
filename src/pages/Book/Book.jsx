import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const { image, bookName, author,bookId, rating, category, yearOfPublishing,tags
 } =
    singleBook;
  return (
    <Link to={`/bookdetails/${bookId}`}>
    <div className="card bg-base-100 shadow-sm border p-6 shadow">
      <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-10">
           {
            tags.map(tag=><button>{tag}</button>)
           }
        </div>
        <h2 className="card-title">{bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        
        <h3>Book By : {author}</h3>
        <div className="border-t-1 border-dashed"></div>
        <div className="card-actions justify-end">
          <div className="">{category}</div>
          <div className="flex items-center gap-1">
            <span>{rating}</span>
            <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
    </Link>
    
  );
};

export default Book;
