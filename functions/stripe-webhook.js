const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function (event) {
  const body = JSON.parse(event.body);
  const signature = event.headers['stripe-signature'];

  let eventObj;

  try {
    eventObj = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }

  // Handle the event
  switch (eventObj.type) {
    case 'checkout.session.completed':
      const session = eventObj.data.object;
      // Here, you can add code to update your website data accordingly
      break;
    // ... handle other event types
    default:
      return {
        statusCode: 400,
        body: `Unhandled event type: ${eventObj.type}`,
      };
  }

  return {
    statusCode: 200,
    body: 'Success',
  };
};
