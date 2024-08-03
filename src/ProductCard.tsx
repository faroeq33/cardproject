import Button from "./Button";
import ShoppingCartIcon from "./ShoppingCartIcon";

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
      <div className="flex flex-col gap-4 bg-white rounded-b-xl">
        <div className="w-full">
          <img
            src="src/assets/images/image-product-mobile.jpg"
            alt="chanel perfume"
            className="bg-black border rounded-t-lg bg-cover w-full"
          />
        </div>
        <div className="pl-4">
          <p className="text-xs font-bold m-0 text-left text-gray-400 uppercase tracking-widest">
            {product.category}
          </p>
        </div>

        <div className="cardbody text-left px-4 pb-4 space-y-4">
          <h2 className="text-4xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <ul className="flex items-center gap-4">
            <li className="font-custom text-primary-dark-cyan font-bold text-4xl">
              ${product.price}
            </li>
            <li>
              <span className="text-gray-500 font-custom line-through">
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
