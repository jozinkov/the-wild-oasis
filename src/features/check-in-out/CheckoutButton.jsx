import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

CheckoutButton.propTypes = {
  bookingId: PropTypes.number,
};

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkout } = useCheckout();

  return (
    <Button
      $variation="primary"
      $size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
