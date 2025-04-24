function subscribe() {
    const email = document.getElementById('email').value;
    if (email && email.includes('@')) {
      alert(`Thanks for subscribing, ${email}!`);
      document.getElementById('email').value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  }
  