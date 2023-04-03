const stripe = Stripe('pk_live_51MrypeBQxZBQgLFwmaQXH3WxHwqtbzHhv32Tny94aMqK7eyWMpukDcNvwwkTR6qHLKaSCWkCaaH10NlBwclSTnWQ00NJjcf24Y');

async function redirectToCheckout(event) {
  event.preventDefault();

  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: 'price_1MseJwBQxZBQgLFwVBN07A9U', quantity: 1 }],
    mode: 'payment',
    successUrl: 'https://www.ecofobs.com/success',
    cancelUrl: 'https://www.ecofobs.com/cancel',
  });

  if (error) {
    console.warn('Error:', error);
  }
}

const buyNowButton = document.getElementById('buy-now-button');
buyNowButton.addEventListener('click', redirectToCheckout);
