import "./buttonAction.css";

interface Props {
  text: string;
  isFunction: boolean;
  theFunction: (e: any) => void;
}
export default function ButtonAction(props: Props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={(e) => {
          if (props.isFunction) {
            {
              props.theFunction(e);
            }
          }
        }}
      >
        {props.text}
      </button>
    </>
  );
}
