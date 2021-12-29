$(document).ready(function() {
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
	
	$(window).scroll(function(){
    var sc = $(this).scrollTop();
	
    if (sc > 50){
    $('header').addClass('sticky');
    }else{
    $('header').removeClass('sticky');
    }
  });
});
				  // Méthode de stockage
$(document).ready(function(){     
   
	//Gestion bouton inscription
    $(".button").click(function(){

        $("#form2").hide();
		        $("#form1").show();
    });	
	//Gestion bouton connexion	
    $(".button1").click(function(){
        $("#form1").hide();
		        $("#form2").show();
    });   
	//Validation formumlaire "s'inscrire"
    $("#stockage").click(function(){
		//On vérifie que les données sont correctes.
		if (!validateForm())
			//Si pas bon on sort
			return false;
		else
		{
			//Sinon on stocke les données
			if(typeof localStorage!='undefined' && JSON) {
				var coordonnees = {
			    masculin:$('#masculin').val(),
				feminin:$('#feminin').val(),
				mail:$('#mail').val(),
				password:$('#password').val(),
				pseudo:$('#pseudo').val(),
				nom:$('#nom').val(),
				prenom:$('#prenom').val(),
				age:$('#age').val(),
				ville:$('ville').val(),
  			    };
				localStorage.setItem('coord',JSON.stringify(coordonnees));
				
				//Et on cache le form pour montrer celui de connexion
				$("#form1").hide();        
				$("#form2").show();				
				} else alert("localStorage n'est pas supporté");
		}
    });
	//Validation formulaire se connecter
    $("#lecture").click(function(){	
		//On lit dans le storage
		if(typeof localStorage!='undefined' && JSON) {
		var coordonnees = JSON.parse(localStorage.getItem('coord'));
		//Si on ne trouve rien dans le storage
		if (coordonnees == null)
		{
			alert("pas d'inscription en cours");
			return false;
		}
		//alert("Coord lu mail:"+coordonnees.mail+" pwd:"+coordonnees.password);
		
		//On vérifie que mail et pwd sont bien ceux de l'inscription
		//c'est à dire ceux lus dans le storage...
		//on récupere le mail le pwd et le pseudo du form
		mail_con=$("#mail1").val();

		pwd_con=$("#password1").val();
		
		psd_con=$("#pseudo1").val();
		
		erreur=false;
		if (mail_con!=coordonnees.mail)
		{
		document.getElementById('erreurmail1').innerHTML="votre mail est invalide";  
        mail_con.focus;
        return false;
		erreur=true;
		}
		else{
        document.getElementById('erreurmail1').innerHTML="";
        }
		if (pwd_con!=coordonnees.password)
		{
		document.getElementById('erreurpassword1').innerHTML="Votre mot de passe est invalide";  
        pwd_con.focus;
        return false;
		erreur=true;
		}
		else{
        document.getElementById('erreurpassword1').innerHTML="";
        }
		if (psd_con!=coordonnees.pseudo)
		{
		document.getElementById('erreurpseudo1').innerHTML="Votre pseudo est invalide";  
        psd_con.focus;
        return false;
		erreur=true;
		}
        else{
        document.getElementById('erreurpseudo1').innerHTML="";
        }		
		if (erreur==true)
		{
			return false;
		}
		else
		{
			alert("Bienvenue sur notre forum animalier.");
		}
		
		location.href = 'forum.html';;
		} else alert("localStorage n'est pas supporté");	
	});  

	//Quand on clique sur reset
    $("#reset").click(function(){		
		localStorage.removeItem("coord");
	});	
	  
});

//Fonction pour vérifier les données.
function validateForm(){
	
	var email = $('#mail').val(),
        emailReg = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i,
        valid = emailReg.test(email);

    if (valid === false) {
        document.getElementById('erreurmail').innerHTML="Veuillez entrer une adresse mail valide";  
        email.focus;
        return false;
	}
	else{
         document.getElementById('erreurmail').innerHTML="";
    }
	var MDP = document.getElementById("password").value,
        maj = /[A-Z]+/,
        chif = /[1-9]+/,
        carac = /[@_\'\-\*\€\.\,\:\?\!\+]/,
        valid_chif = chif.test(MDP),
        valid_maj = maj.test(MDP),
        valid_carac = carac.test(MDP); 
    	
    if (valid_carac === true && valid_maj === true && valid_chif === true && MDP.length >= "8"){   
       document.getElementById('erreurpassword').innerHTML="";	 
	}
	else{
	  
	  document.getElementById('erreurpassword').innerHTML="Le mot de passe doit contenir au moins un chiffre, un caractère spécial, une majuscule et au moins 8 caractères"; 
	  MDP.focus;
	  return false; 
	}
	var mdp = $("#password").val(),
    conf_mdp = $("#Cpassword").val();

    if (mdp != conf_mdp) {
        document.getElementById('erreurCpassword').innerHTML="Veuillez confirmer votre mot de passe";  
        mdp.focus;
        return false;
    }
	else{
         document.getElementById('erreurCpassword').innerHTML="";
    }
	var Pseudo = document.forms["myForm"]["pseudo"]; 	
    if (Pseudo.value == ""){ 
		document.getElementById('erreurpseudo').innerHTML="Veuillez entrer votre pseudo";  
        email.focus;
		return false;
	}
	else{
         document.getElementById('erreurpseudo').innerHTML="";
    }
	var Nom = document.forms["myForm"]["nom"]; 	
    if (Nom.value == ""){ 
		document.getElementById('erreurnom').innerHTML="Veuillez entrer votre nom";
		Nom.focus;
		return false;
	}
	else{
         document.getElementById('erreurnom').innerHTML="";
    }
	var Prenom = document.forms["myForm"]["prenom"]; 	
    if (Prenom.value == ""){ 
		document.getElementById('erreurprenom').innerHTML="Veuillez entrer votre prenom";
		Prenom.focus;
		return false;
	}
	else{
         document.getElementById('erreurprenom').innerHTML="";
    }
	var age = document.getElementById('age').value;

    if (age < 1 && age != 0) {
        alert("Tu es beaucoup trop jeune pour t'inscrire sur se site")
    }
    if (age > 135) {
        alert('Tu es encore en vie ?')
    }
	  
	return true;
}	
var date = new Date(),
    heure = date.getHours(),
    minute = date.getMinutes(),
    heure_con;
function monHeure() {
    "use strict";
    heure_con = JSON.stringify({
        heurs: heure,
        minut: minute
    });
    sessionStorage.setItem('horloge', heure_con);
}
/*enregistrement de l'heure*/
var inp=localStorage.getItem('coord');
     obj = JSON.parse(inp);
var recup = sessionStorage.getItem('horloge'),
    obje = JSON.parse(recup);
	 
window.addEventListener('load', function () {
    "use strict";
	document.getElementById('lecture').addEventListener('click', monHeure);
});       
window.addEventListener('load', function () {
    "use strict";
    document.getElementById('prenom1').innerHTML = obj.pseudo;
    /*afficher le pseudo dans le html*/
    document.getElementById('heure1').innerHTML = obje.heurs + "h" + obje.minut;
	/*afficher l'heure dans le html*/
});








