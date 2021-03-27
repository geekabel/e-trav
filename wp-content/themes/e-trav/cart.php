<?php include"./etravel-header.inc.php"; ?>

<main>
  <div class="cart-title">
    <h1>Your cart ()<!--Number of product php--></h1>
      <div class="cart-subtitle">
            <p>Product</p>
            <p>Quantity</p>
            <p>Summary</p>
      </div>
</div>
<hr>

  <div class="product-cart">
    <img src="ressources-etravel/pinkchild.png" alt="">
    <div class="product-cart-info">


    <h2>Pink travel case<!--name product php--></h2>
    <p>Color:<!--color product php--></p>
    <p>Size:<!--size product php--></p>
    <p>Supprimer<!--delete product entry php--></p>
        </div>
    <!--vertical line-->
      <div class="quantity">
        <form class="value">
            <div class="value-button" id="decrease">-</div>
            <input type="number" id="number" value="0" />
            <div class="value-button" id="increase">+</div>
        </form>
      </div>
    <p>14.90 €</p>
  </div>




<div class="subtotal">
  <div class="subtotal-promo">
    <h2>Do you have a promo code ?</h2>
  </div>
  <div class="subtotal-content">
    <div class="subtotal-title">
      <h3>SUBTOTAL</h3>
      <p>58.60 €</p>
    </div>

    <div class="subtotal-shipping">
      <p>ESTIMATED SHIPPING & HANDLING standard FREE arrives 25-30 days</p>
      <p>0.00 €</p>
    </div>

    <div class="subtotal-tax">
      <p>TAX</p>
      <p>0.00 €</p>
    </div>

    <div class="subtotal-total">
      <p>TOTAL</p>
      <p>58.60 €</p>
    </div>
  </div>
</div>

<div class="subtotal-button-text">
  <p>Checkout</p>
  <p>or</p>
  <p>checkout with paypal</p>
</div>
  <div class="subtotal-button">


        <img src="ressources-etravel/curve.svg" alt="">
      </div>


</main>

<?php include"./etravel-footer.inc.php"; ?>
