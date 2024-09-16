import { useParams } from "react-router-dom";
import EditProductForm from "./EditProductForm";

export default function EditForm() {

const id = useParams().id
console.log(id);


  return (
    <>
      <div>EditForm</div>

      <EditProductForm productId={id?.toString()}/>
    </>
  );
}
