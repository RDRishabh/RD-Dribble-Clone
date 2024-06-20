import React from 'react';

const PortfolioCard = ({ portfolio  , handleLike , handleRemoveLike}) => {
  const { photo, author, authorIcon, likeButton, tags, portfolioName, save, stmember } = portfolio;

  const handleBtnPress = () =>{
      if(save){
          handleRemoveLike(portfolioName)
      }else{
          handleLike(portfolioName)
      }
  }

  return (
    <div className="portfolio-card max-w-[300px] flex flex-col gap-2">
        <div className="relative group">
            <img src={photo} alt="Portfolio" className="portfolio-photo w-full rounded-custom-sm" />
            <div className="absolute z-10 inset-0 flex items-end p-4 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent via-transparent">
               <h3 className="text-white font-semibold">{portfolioName}</h3>
               {/* <div className="tags flex gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="tag bg-blue-50 text-blue-500 rounded-md px-1">{tag}</span>
                    ))}
                </div> */}
            </div>
        </div>
        <div className="author-info flex items-center justify-between gap-2">
            <div className={`flex items-center gap-2`}>
                <img src={authorIcon} alt="Author Icon" className="author-icon w-[25px] rounded-full"/>
                <span className="author-name">{author}</span>
            </div>

            <div className="actions">
                <button className="save cursor-pointer" onClick={handleBtnPress}>
                    {save ?
                        <i className="fi fi-sr-heart text-red-500"></i>
                        :
                        <i className="fi fi-rr-heart"></i>
                    }
                </button>
            </div>
        </div>

    </div>
  );
};

export default PortfolioCard;
