import Button from "./Button";
import ShoppingCartIcon from "./ShoppingCartIcon";
import CategoryText from "./CategoryText";

function ProductCard() {
  const product = {
    category: "Perfume",
    name: "Gabrielle Essence Eau De Parfum",
    description:
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    price: 149.99,
    discountPrice: 169.99,
  };

  return (
    <>
      <div className="flex flex-col gap-4 bg-white rounded-b-xl lg:flex-row ">
        <div className="w-full lg:w-1/2">
          <img
            src="src/assets/images/image-product-mobile.jpg"
            alt="Chanel Perfume"
            className="w-full bg-black bg-cover border rounded-tl-lg rounded-tr-lg lg:rounded-l-lg lg:rounded-tr-none"
          />
        </div>

        <div className="px-4 pb-4 space-y-4 text-left lg:w-1/2 lg:pt-4 cardbody">
          <div className="flex-none lg:flex-1">
            <CategoryText name={product.category} />
          </div>
          <h2 className="text-3xl font-bold">{product.name}</h2>

          <p className="text-neutral-dark-grayish-blue">
            {product.description}
          </p>
          <ul className="flex items-center gap-4">
            <li className="text-4xl font-bold font-custom text-primary-dark-cyan">
              ${product.price}
            </li>
            <li>
              <span className="line-through font-custom text-neutral-dark-grayish-blue">
                ${product.discountPrice}
              </span>
            </li>
          </ul>
          <Button>
            <ShoppingCartIcon className="w-6 h-6" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
