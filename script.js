document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
  
    // 🔴 Զամբյուղը միշտ մաքրել էջը բացելիս
    cartItemsContainer.innerHTML = '';
    totalPriceEl.textContent = '0 Դրամ';
  
    // Զամբյուղը դատարկ է, setupRemoveButtons և updateTotalPrice անհրաժեշտ չեն
  
    // Ստուգում «Արժեքը հաստատել»-ի ժամանակ
    checkoutBtn.addEventListener('click', () => {
      alert("Դուք ոչ մի բան չեք ավելացրել 😢");
    });
  });
  