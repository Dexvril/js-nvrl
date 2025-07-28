<script>
  let greeting = "Halo, Selamat Datang di Website Saya!";
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f4f8;
    font-family: Arial, sans-serif;
  }

  .greeting {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
    text-align: center;
  }

  .flower {
    position: relative;
    width: 100px;
    height: 100px;
  }

  .petal {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #ff6b6b;
    border-radius: 50% 50% 0 0;
    transform-origin: bottom center;
    animation: bloom 2s infinite;
  }

  .petal:nth-child(2) { transform: rotate(45deg); }
  .petal:nth-child(3) { transform: rotate(90deg); }
  .petal:nth-child(4) { transform: rotate(135deg); }
  .center {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #ffd700;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes bloom {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(10deg); }
  }
</style>

<div class="container">
  <h1 class="greeting">{greeting}</h1>
  <div class="flower">
    <div class="petal"></div>
    <div class="petal"></div>
    <div class="petal"></div>
    <div class="petal"></div>
    <div class="center"></div>
  </div>
</div>