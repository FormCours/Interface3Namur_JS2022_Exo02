
const PriceDisplay = ({ price, className }) => {

    const priceFormatted = price.toLocaleString(undefined, {
        style: 'currency',
        currency: 'EUR'
    });

    return (
        <span className={className}>
            {priceFormatted}
        </span>
    );
};

export default PriceDisplay;