import { FaComment, FaHeart, FaLock, FaShare } from "react-icons/fa";
import "./longCard.css";
import ButtonAction from "../../buttons/ButtonAction";

interface Props {
  image: string;
  header: string;
  description: string;
  date: string;
  bg: string;
  color: string;
}
export default function LongCard(props: Props) {
  return (
    <>
      <div
        className="longCard"
        style={{ backgroundColor: `${props.bg}`, color: `${props.color}` }}
      >
        {/* 1st column: Image */}
        <div
          className="longCard-column image-column"
          style={{ backgroundColor: `${props.color}` }}
        >
          <img
            src={props.image}
            alt="longCard Image"
            className="longCard-image"
          />
        </div>

        {/* 2nd column: Visitors, Header, Description */}
        <div className="longCard-column content-column">
          <div className="longCard-row visitors">
            <FaLock /> 123
          </div>
          <div className="longCard-row header">{props.header}</div>
          <div className="longCard-row description">{props.description}</div>
        </div>

        {/* 3rd column: Date, Button, Icons */}
        <div className="longCard-column actions-column">
          <div className="longCard-row date">{props.date}</div>
          <div className="action-button">
            <ButtonAction
              text="Action"
              isFunction={false}
              theFunction={() => {}}
            />
          </div>
          <div className="longCard-row icons">
            <FaComment className="longIcon" />
            <FaHeart className="longIcon" />
            <FaShare className="longIcon" />
          </div>
        </div>
      </div>
    </>
  );
}
