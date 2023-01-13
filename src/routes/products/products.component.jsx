import './products.styles.css';
import LinkWithLawyers from "../../assets/images/linkWithLawyers.jpeg";
import Barter from "../../assets/images/barter.jpeg";
import FashionFix from "../../assets/images/fashionfix.jpeg";
import Native from "../../assets/images/native.jpeg";
import EventBase from "../../assets/images/event base.jpeg";
import { Link } from 'react-router-dom';




const Products = () => {
    const products = [{name: "Barter", logo:Barter, description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."},
         {name: "EventBase", logo: EventBase, description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."},
         {name: "FashionFix", logo:FashionFix, description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."},
         {name:"Link with Lawyers", logo:LinkWithLawyers, description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."},
         {name: "Native", logo: Native, description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."}
        ];
    return(
        <div className='products'>
        {
            products.map((product) => {
                return <Link to="/">
                <div className='product-container'>
                <img src={product.logo} alt="Product"  className='product-img' />
                </div>
                </Link>
            })
        }
        </div>
       
        )
}

export default Products;
