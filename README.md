# coursera-test
coursera test repository
<!DOCTYPE html>
<html>
<head>
  <title>Responsive Page</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif; 
	  background-color: lightgreen;
    }

    header {
      text-align: center;
      padding: 20px;
    }

    h1 {
      font-size: 24px;
    }

    main {
      margin: 10px;
    }

    .section {
      float: left;
      width: 33.33%;
      padding: 20px;
      border: 2px solid black;
      background-color: pink;
      position: relative;
	  margin-bottom: 5px;
    }

    .section-title {
      position: absolute;
      top: 0px;
      right: 0px;
      padding: 15px;
	  border: 1px solid black;
      color: black;
    }

    .info-box {
      display: flex;
      flex-direction: column;
      height: 100%;
	  padding: 30px;
    }

    .info-content {
      flex: 1;
      padding-top: 30px;
    }

    @media (max-width: 991px) {
      
      .section {
        width: 50%; 
        clear: both;
		margin: 2px;
      }

      .section:nth-child(3) {
        width: 100%;
      }
    }

    @media (max-width: 767px) {
  
      .section {
        width: 100%;	
		margin-bottom: 5px;
      }
    }

    @media (min-width: 992px) {
     
      .section {
	    margin: 2px;
        width: 33%;
		padding- right: 5px;
		
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Our Menu</h1>
  </header>

  <main>
    <section class="section">
      <div class="info-box">
        <div class="section-title" style="background-color: #FF5252; top: 0px; right: 0px;">Chicken</div>
        <div class="info-content">
          <p>Chicken is the most common type of poultry in the world. Owing to the relative ease and low cost of raising chickens—in comparison to mammals such as cattle or hogs—chicken meat (commonly called just "chicken") and chicken eggs have become prevalent in numerous cuisines.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="info-box">
        <div class="section-title" style="background-color: #FFD740; top: 0px; right: 0px;">Beef</div>
        <div class="info-content">
          <p>Beef is the culinary name for meat from cattle (Bos taurus). In prehistoric times, humankind hunted aurochs and later domesticated them. Since that time, numerous breeds of cattle have been bred specifically for the quality or quantity of their meat.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="info-box">
        <div class="section-title" style="background-color: #69F0AE; top: 0px; right: 0px;">Sushi</div>
        <div class="info-content">
          <p>Sushi is a Japanese dish of prepared vinegared rice ( sushi-meshi), usually with some sugar and salt, accompanied by a variety of ingredients ( neta),such as seafood often raw and vegetables.It is popular dish in the south east asian community</p>
        </div>
      </div>
    </section>
  </main>
</body>
</html>
