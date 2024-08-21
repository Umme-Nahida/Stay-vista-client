import Container from "../../components/Shared/Container";
import { categories } from "../CategoriesData";
import CategoriCart from "./CategoriCart";

const Categories = () => {

    return (
       <Container>
         <div className="flex items-center justify-around overflow-x-auto mb-10 gap-5">
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