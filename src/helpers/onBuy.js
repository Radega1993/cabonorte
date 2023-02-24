import Swal from 'sweetalert2';

export const onBuy = (status, navigate, id) => {

    if (status === 'not-authenticated') {
      Swal.fire({
        title: 'Tienes que estar logeado para comprar',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Log in',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/auth/login');
        }
      })
      
    } else {
      navigate(`buy/product/${id}`);
    }
  }