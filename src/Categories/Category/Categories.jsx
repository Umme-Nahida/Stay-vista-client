import Container from "../../components/Shared/Container";
import { categories } from "../CategoriesData";
import CategoriCart from "./CategoriCart";

const Categories = () => {

    return (
       <Container>
         <div className="flex items-center justify-between gap-5 overflow-x-auto mb-10">
            {
                categories.map(item=>(
                    <CategoriCart key={item.label} title={item.label} icon={item.icon}></CategoriCart>
                ))
            }
        </div>
       </Container>
    );
};

export default Categories;