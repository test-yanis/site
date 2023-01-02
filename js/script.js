function checkForm() {
  // Récupération de tous les champs de formulaire obligatoires
  var inputs = document.querySelectorAll("form input");

  // Initialisation de la variable qui indiquera si le formulaire est valide
  var formValid = true;

  // Vérification de chaque champ obligatoire
  for (var i = 0; i < inputs.length; i++) {
    // Si le champ est vide, le formulaire n'est pas valide
    if (i == 5 || i == 7) continue;
    if (inputs[i].value === "") {
      formValid = false;
      break;
    }
  }

  // Si le formulaire est valide, on laisse le formulaire s'envoyer normalement
  if (formValid) {
    return true;
  } else {
    // Sinon, on affiche un message d'erreur et on empêche l'envoi du formulaire
    alert("Veuillez remplir tous les champs obligatoires du formulaire avant de le soumettre.");
    return false;
  }
}

function displayTime() {
  // Récupération de la date et de l'heure actuelles
  var currentDate = new Date();
  var seconds = currentDate.getSeconds();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();

  // Formatage de l'heure et du jour
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  // Affichage de l'heure et du jour
  document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + " " + day + "/" + month + "/" + year;
}

// Appel de la fonction toutes les secondes (1000 milliseconds)
setInterval(displayTime, 1000);

function ellipse() {
  ctx = canvas.getContext('2d');
  if (!ellipseB) {
    ctx.strokeStyle = couleur;
    ctx.fillStyle = couleur;
    ctx.globalAlpha = opacite;
    ctx.beginPath();
    ctx.ellipse(centreX - 12, centreY - 50, 15, 30, 0, 0, 2 * Math.PI);
    ctx.fill();

  }
}

function logo(xoff, yoff) {
  ctx = canvas.getContext('2d');
  if (!logoB) {
    ctx.strokeStyle = couleur;
    ctx.fillStyle = couleur;
    ctx.globalAlpha = opacite;
    ctx.beginPath();
    ctx.moveTo(45 + xoff, 24 + yoff);
    ctx.bezierCurveTo(86 + xoff, 22 + yoff, 43 + xoff, 90 + yoff, 86 + xoff, 89 + yoff);
    ctx.bezierCurveTo(145 + xoff, 87 + yoff, 85 + xoff, 23 + yoff, 130 + xoff, 22 + yoff);
    ctx.bezierCurveTo(163 + xoff, 21 + yoff, 164 + xoff, 57 + yoff, 143 + xoff, 91 + yoff);
    ctx.bezierCurveTo(129 + xoff, 114 + yoff, 115 + xoff, 115 + yoff, 113 + xoff, 158 + yoff);
    ctx.bezierCurveTo(112 + xoff, 186 + yoff, 62 + xoff, 184 + yoff, 63 + xoff, 157 + yoff);
    ctx.bezierCurveTo(64 + xoff, 142 + yoff, 55 + xoff, 118 + yoff, 30 + xoff, 91 + yoff);
    ctx.bezierCurveTo(15 + xoff, 78 + yoff, 7 + xoff, 25 + yoff, 45 + xoff, 24 + yoff);
    ctx.fill();
  }
}

function points(xoff = 300, yoff = 100) {
  if (!pointsB) {
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "#0f0";
    ctx.globalAlpha = 1;

    ctx.beginPath();
    ctx.arc(45 + xoff, 24 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(86 + xoff, 89 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(130 + xoff, 22 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(143 + xoff, 91 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(113 + xoff, 158 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(63 + xoff, 157 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(30 + xoff, 91 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.arc(7 + xoff, 25 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(86 + xoff, 22 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(43 + xoff, 90 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(145 + xoff, 87 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(85 + xoff, 23 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(163 + xoff, 21 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(164 + xoff, 57 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(129 + xoff, 114 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(115 + xoff, 115 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(112 + xoff, 186 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(62 + xoff, 184 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(64 + xoff, 142 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(55 + xoff, 118 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(15 + xoff, 78 + yoff, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();

    // Lignes
    const points = [
      [7 + xoff, 25 + yoff],
      [86 + xoff, 22 + yoff],
      [43 + xoff, 90 + yoff],
      [145 + xoff, 87 + yoff],
      [85 + xoff, 23 + yoff],
      [163 + xoff, 21 + yoff],
      [164 + xoff, 57 + yoff],
      [129 + xoff, 114 + yoff],
      [115 + xoff, 115 + yoff],
      [112 + xoff, 186 + yoff],
      [62 + xoff, 184 + yoff],
      [64 + xoff, 142 + yoff],
      [55 + xoff, 118 + yoff],
      [15 + xoff, 78 + yoff]
    ];

    for (let i = 0; i < points.length - 1; i += 2) {
      ctx.beginPath();
      ctx.moveTo(points[i][0], points[i][1]);
      ctx.lineTo(points[i + 1][0], points[i + 1][1]);
      ctx.strokeStyle = "#00f";
      ctx.stroke();
    }


  }

}

function draw() {
  clear();
  ellipse();
  logo(300, 100);
  points();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let couleur, animation, animationInterval, cercleVisible, centreX, centreY, checkbox, checkbox2, ctx, canvas, logoB, ellipseB, pointsB;
document.addEventListener('DOMContentLoaded', function () {
  canvas = document.getElementById('monCanvas');
  centreX = canvas.width / 2;
  centreY = canvas.height / 2;

  ctx = canvas.getContext('2d');
  checkbox = document.getElementById('afficherCercle');
  checkbox2 = document.getElementById('afficherLogo');
  checkbox3 = document.getElementById('afficherPoint');
  const couleurCercle = document.getElementById('couleurCercle');
  const opaciteCercle = document.getElementById('opaciteCercle');
  const animationCercle = document.getElementById('animationCercle');
  couleurCercle.value = "#7f7f7f";
  couleur = couleurCercle.value;

  opacite = opaciteCercle.value;
  animationCercle.value = "none";

  draw();

  checkbox.addEventListener('change', function (e) {
    if (e.target.checked) {
      ellipseB = true;
      draw();
    } else {
      // Effacez le canvas pour masquer le cercle
      ellipseB = false;
      draw();
    }
  });
  checkbox2.addEventListener('change', function (e) {
    if (e.target.checked) {
      logoB = true;
      draw();
    } else {
      // Effacez le canvas pour masquer le cercle
      logoB = false;
      draw();
    }
  });
  checkbox3.addEventListener('change', function (e) {
    if (e.target.checked) {
      pointsB = true;
      draw();
    } else {
      // Effacez le canvas pour masquer le cercle
      pointsB = false;
      draw();
    }
  });
  couleurCercle.addEventListener('input', function (e) {

    // Mettre à jour la couleur du cercle
    couleur = couleurCercle.value;
    draw();

  });

  opaciteCercle.addEventListener('input', function (e) {
    // La valeur de l'opacité est disponible dans la propriété value de l'événement
    opacite = e.target.value;

    // Mettre à jour l'opacité du cercle
    ctx.globalAlpha = opacite;
    draw();
  });
  animationCercle.addEventListener('change', function (e) {
    // La valeur sélectionnée est disponible dans la propriété value de l'événement
    const animation = e.target.value;

    // Arrêtez l'animation en cours, s'il y en a une
    clearInterval(animationInterval);

    if (animation === 'flash') {
      // Démarrez l'animation de clignotement
      animationInterval = setInterval(function () {
        // Alterner l'affichage du cercle
        if (cercleVisible) {
          clear();
        } else {
          couleur = couleurCercle.value;
          draw();
        }
        cercleVisible = !cercleVisible;
      }, 250);  // Clignote toutes les secondes
    } else if (animation === 'fade') {
      // Démarrez l'animation de fondu
      opacite = 0;
      let sens = 1;  // 1 pour fade in, -1 pour fade out
      animationInterval = setInterval(function () {
        // Fondre le cercle
        opacite += 0.1 * sens;
        if (opacite > 1) {
          opacite = 1;
          sens = -1;
        } else if (opacite < 0) {
          opacite = 0;
          sens = 1;
        }
        console.log(opacite);
        draw();
        ctx.globalAlpha = opacite;
        couleur = couleurCercle.value;
        console.log(opacite);

      }, 100);  // Fondre tous les 100ms    
    }
  })
})
