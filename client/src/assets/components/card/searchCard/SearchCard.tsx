import { FaLink } from "react-icons/fa";
import { BsTag } from "react-icons/bs";
import { TiTime } from "react-icons/ti";
import "./searchCard.css";
import ButtonAction from "../../buttons/ButtonAction";

interface Props {
  bg: string;
  color: string;
}

export default function SearchCard(props: Props) {
  const searchCategory = [
    {
      id: 1,
      name: "ONLINE CODES",
      icon: <FaLink className="searchCardForIcon" />,
    },
    {
      id: 2,
      name: "STORE CODES",
      icon: <BsTag className="searchCardForIcon" />,
    },
    {
      id: 3,
      name: "ONLINE SALES",
      icon: <TiTime className="searchCardForIcon" />,
    },
  ];
  const category = ["all", "category1", "category2"];
  const store = ["all", "store1", "store2"];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search clicked");
  };
  return (
    <>
      <section
        className="searchCard"
        style={{ backgroundColor: `${props.bg}`, color: `${props.color}` }}
      >
        <div className="searchCardHeader">Search Card</div>
        <div className="searchCardFor">
          {searchCategory.map((category) => (
            <div
              key={category.id}
              className="searchCardCat"
              style={{
                backgroundColor: `${props.color}`,
                color: `${props.bg}`,
              }}
            >
              {category.icon}
              <p className="searchCardForTag">{category.name}</p>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={handleSubmit} className="searchCardForm">
            <div className="searchCardFormKeyword">
              <label htmlFor="keyword">KEYWORD</label>
              <input
                style={{
                  backgroundColor: `${props.color}`,
                  color: `${props.bg}`,
                }}
                id="keyword"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className="searchCardFormSelect">
              <div className="searchCardFormSelectCategory">
                <label htmlFor="category">CATEGORY</label>
                <div className="selectWraper">
                  <select
                    style={{
                      backgroundColor: `${props.color}`,
                      color: `${props.bg}`,
                    }}
                    id="category"
                  >
                    {category.map((category) => (
                      <option
                        style={{
                          backgroundColor: `${props.color}`,
                          color: `${props.bg}`,
                        }}
                        value="category"
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="searchCardFormSelectStore">
                <label htmlFor="Store">STORE</label>
                <div className="selectWraper">
                  <select
                    style={{
                      backgroundColor: `${props.color}`,
                      color: `${props.bg}`,
                    }}
                    id="Store"
                  >
                    {store.map((store) => (
                      <option
                        style={{
                          backgroundColor: `${props.color}`,
                          color: `${props.bg}`,
                        }}
                        value="store"
                      >
                        {store}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="action-button">
              <ButtonAction
                text="Action"
                isFunction={false}
                theFunction={() => {}}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
