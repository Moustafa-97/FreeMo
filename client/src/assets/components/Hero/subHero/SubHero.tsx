import "./subHero.css";

interface Props {
  icon: any;
  header: string;
  body: string;
  bg: string;
  color: string;
}

export default function SubHero(props: Props) {
  return (
    <>
      <section
        className="card"
        style={{ backgroundColor: `${props.bg}`, color: `${props.color}` }}
      >
        <div className="subIcon">{props.icon}</div>
        <div className="content">
          <h3 className="contentHeader">{props.header}</h3>
          <p className="contentBody">{props.body}</p>
        </div>
      </section>
    </>
  );
}
