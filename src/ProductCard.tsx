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
            className="w-full bg-black bg-cover border rounded-t-lg"
          />
        </div>
        <div className="pl-4">
          <p
            className="m-0 text-xs tracking-widest text-left uppercase text-neutral-dark-grayish-blue"
            style={{
              fontWeight: "500",
              fontSizeAdjust: "12px",
              letterSpacing: "5px",
            }}
          >
            {product.category}
          </p>
        </div>

        <div className="px-4 pb-4 space-y-4 text-left cardbody">
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
