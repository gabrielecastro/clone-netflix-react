import { useContext, useEffect } from "react";
import { AiFillCaretRight, AiFillHeart } from "react-icons/ai";
import AppContext from "../context/AppContext";
import all from "../data/all";

function CardDetails(props) {
  const { selectedItem, setSelectedItem } = useContext(AppContext);

  useEffect(() => {
    console.log(props);
    getMovieSelected()
  }, [])

  function getMovieSelected() {
    const { match: { params: { id } } } = props;
    const selectedItemFilter = all.filter((item) => item.id === Number(id) )
    setSelectedItem(selectedItemFilter);
  }

  return (
    <div className="container-cardDetails">
      {
        selectedItem.map((item) => (
          <div
            key={ item.id }
            className= 'cardDeitails'
            style={{
            background: `linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url(${item.imageCapa})`,
            backgroundSize: "cover"
          }}>
            <div
              className="container-card-details"
            >
            <h3
              className="title-card-details"
            >
              { item.name }
            </h3>
            <div
              className="container-sinopse-and-image"
            >
              <div
                className="card-details-image"
              >
                <img
                  src={ item.image }
                  alt={ item.name }
                >
                </img>
              </div>
              <p
                className="sinopse-card-details"
              >
                { item.sinopse }
              </p>
            </div>
            <div
              className="buttons-card-details"
            >
              <a
                className="button"
                href={ item.trailer }
                target="_blank" rel="noreferrer"
              >
                <span className="icons"><AiFillCaretRight /></span>
                Trailer
              </a>
              <a
                className="button"
                href={ item.trailer }
                target="_blank" rel="noreferrer"
              >
                <span
                  className="icons"
                >
                  <AiFillHeart />
                </span>
                Adicionar à minha Lista
              </a>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
}

export default CardDetails;
