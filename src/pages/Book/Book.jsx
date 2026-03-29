import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    image,
    bookName,
    author,
    bookId,
    rating,
    category,
    yearOfPublishing,
    tags,
  } = singleBook;

  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div className="bg-white border rounded-2xl p-5 shadow hover:shadow-md transition">

        {/* Image Section */}
        <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
          <img
            src={image}
            alt={bookName}
            className="h-40 object-cover"
          />
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {
            tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))
          }
        </div>

        {/* Title + Year */}
        <h2 className="mt-3 font-semibold text-lg flex items-center gap-2">
          {bookName}

          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
            {yearOfPublishing}
          </span>
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-500 mt-1">
          By : {author}
        </p>

        {/* Divider */}
        <div className="border-t border-dashed my-3"></div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center text-sm">
          <span>{category}</span>

          <div className="flex items-center gap-1">
            <span>{rating}</span>
            <FaStarHalfAlt />
          </div>
        </div>

      </div>
    </Link>
  );
};

export default Book;