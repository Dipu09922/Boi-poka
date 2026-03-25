import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImage}
      className="w-[318px] h-[394px] object-cover rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold mb-5">Books to freshen up<br/> your bookshelf.</h1>
      <button className="btn bg-[#23BE0A] text-white px-6 py-3 rounded-lg font-bold text-lg">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;