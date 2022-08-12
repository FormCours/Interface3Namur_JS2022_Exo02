import PriceDisplay from '../price-display/price-display';
import style from './product-list.module.css';
import clsx from 'clsx';

const ProductListItem = ({ name, price, promo }) => {

    const reducPrice = price - (price * promo / 100);

    const stylePrice = clsx({
        [style.priceBarred]: promo !== null
    });

    return (
        <li>
            <span>{name}</span>
            {' '}
            <PriceDisplay className={stylePrice} price={price} />
            {' '}
            {promo && (
                <PriceDisplay className={style.pricePromo} price={reducPrice} />
            )}
        </li>
    );
};

const ProductList = ({ productData }) => {

    const productRender = productData.map(
        product => <ProductListItem {...product} key={product.id} />
    );

    return (
        <>
            <h3>Liste des produits (Nb: {productData.length})</h3>
            <ul>
                {productRender}
            </ul>
        </>
    );
};

ProductList.defaultProps = {
    productData: []
};

export default ProductList;