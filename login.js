function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-btn').classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
  }
  
  function showSignup() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-btn').classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
  }
  