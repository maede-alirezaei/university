import React from "react";
import { useContext } from "react";
import FavoriteContext from "../store/favorite-context";
import Card from "../ui/Card";
function ProjectInfo(props) {
  const cntx = useContext(FavoriteContext);
  const itemIsfavorite = cntx.itemIsFavoriteHandler(props.info.id);
  function toggleFavorite(FavoriteContext) {
    if (itemIsfavorite) {
      cntx.removeFavoriteHandler(props.info.id);
    } else {
      cntx.addFavoriteHandler(props.info);
    }
  }
  return (
    <Card>
      <section>
        <div>
          <span>{"نام دانشجو :"}</span>
          <span> {props.info.studentName} </span>
          <span>{props.info.studentLastName}</span>
        </div>
        <div>
          <span>{"رشته :"}</span>
          <span>{props.info.studentMajor}</span>
        </div>
        <div>
          <span>{"دانشگاه : "}</span>
          <span>{props.info.universityName}</span>
        </div>
      </section>
      <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
          class="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>{"دانلود"}</span>
      </button>
      <button
        onClick={toggleFavorite}
        className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
      >
        {!itemIsfavorite ? (
          <span>{"اضافه کردن به مورد علاقه ها"}</span>
        ) : (
          <span>{"حذف کردن از مورد علاقه ها"}</span>
        )}
      </button>
    </Card>
  );
}

export default ProjectInfo;
