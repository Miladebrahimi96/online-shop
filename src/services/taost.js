import { ToastContainer, toast } from 'react-toastify';

export const notify = (item) => {
    if(item > 0){
        toast.info("Item added to cart", {theme: "colored"})
    }else {
        toast.info("Item removed from cart", {theme: "colored"})
    }
}